"""Remove edge-connected white/black backgrounds and add a TIMO-style outer glow stroke."""

from __future__ import annotations

from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image, ImageFile, ImageFilter

ImageFile.LOAD_TRUNCATED_IMAGES = True

ROOT = Path(r"E:\shredding_web\site\public\images\products")

JOBS = [
    ("medical-shredder-small.jpg", "medical-shredder-small.png", "auto"),
    ("baler-scene.png", "baler-scene.png", "auto"),
    ("hospital-as30.png", "hospital-as30.png", "auto"),
    ("eps-esp220.png", "eps-esp220.png", "auto"),
    ("pur-ys360.png", "pur-ys360.png", "auto"),
    ("medical-mw220.png", "medical-mw220.png", "auto"),
]


def edge_background(arr: np.ndarray) -> np.ndarray:
    h, w = arr.shape[:2]
    samples = np.vstack(
        [
            arr[0, :, :3],
            arr[-1, :, :3],
            arr[:, 0, :3],
            arr[:, -1, :3],
        ]
    )
    return np.median(samples, axis=0)


def flood_alpha(arr: np.ndarray, bg: np.ndarray, tol: int) -> np.ndarray:
    h, w = arr.shape[:2]
    out = arr.copy()
    visited = np.zeros((h, w), dtype=bool)
    q: deque[tuple[int, int]] = deque()

    def push(y: int, x: int) -> None:
        if 0 <= y < h and 0 <= x < w and not visited[y, x]:
            q.append((y, x))

    for x in range(w):
        push(0, x)
        push(h - 1, x)
    for y in range(h):
        push(y, 0)
        push(y, w - 1)

    bg_i = bg.astype(np.int16)
    thresh = tol * 3
    while q:
        y, x = q.popleft()
        if visited[y, x]:
            continue
        visited[y, x] = True
        diff = int(np.abs(out[y, x, :3].astype(np.int16) - bg_i).sum())
        if diff > thresh:
            continue
        out[y, x, 3] = 0
        push(y - 1, x)
        push(y + 1, x)
        push(y, x - 1)
        push(y, x + 1)
    return out


def add_glow(img: Image.Image, radius: int = 5, pad: int = 28) -> Image.Image:
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
    canvas = Image.new("RGBA", (img.width + pad * 2, img.height + pad * 2), (0, 0, 0, 0))
    alpha = Image.new("L", canvas.size, 0)
    alpha.paste(img.split()[-1], (pad, pad))
    halo = alpha.filter(ImageFilter.MaxFilter(5)).filter(ImageFilter.GaussianBlur(radius))
    glow = Image.new("RGBA", canvas.size, (236, 226, 186, 0))
    glow.putalpha(halo.point(lambda v: min(210, int(v * 0.85))))
    canvas = Image.alpha_composite(canvas, glow)
    canvas.paste(img, (pad, pad), img)
    return canvas


def process(src_name: str, dst_name: str, _mode: str) -> None:
    src = ROOT / src_name
    dst = ROOT / dst_name
    img = Image.open(src).convert("RGBA")
    arr = np.array(img)
    bg = edge_background(arr)
    brightness = float(bg.mean())
    tol = 32 if brightness > 140 else 22
    cut = flood_alpha(arr, bg, tol)
    # keep original alpha where already transparent
    cut[:, :, 3] = np.minimum(arr[:, :, 3], cut[:, :, 3])
    out = add_glow(Image.fromarray(cut))
    out.save(dst, "PNG", optimize=True)
    print(f"OK {src_name} -> {dst_name}  bg~{brightness:.0f}  {out.size}")


def main() -> None:
    for job in JOBS:
        process(*job)


if __name__ == "__main__":
    main()
