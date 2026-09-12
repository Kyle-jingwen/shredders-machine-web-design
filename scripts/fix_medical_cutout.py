from pathlib import Path
import numpy as np
from PIL import Image, ImageFile, ImageFilter
from collections import deque

ImageFile.LOAD_TRUNCATED_IMAGES = True
SRC = Path(r"E:\shredding_web\site\public\images\products\medical-shredder-small.jpg")
DST = Path(r"E:\shredding_web\site\public\images\products\medical-shredder-small.png")


def flood(arr, bg, tol):
    h, w = arr.shape[:2]
    out = arr.copy()
    visited = np.zeros((h, w), dtype=bool)
    q = deque()

    def push(y, x):
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


img = Image.open(SRC).convert("RGBA")
arr = np.array(img)
cut = flood(arr, np.array([0, 0, 0], dtype=np.uint8), tol=20)
cut = flood(cut, np.array([255, 255, 255], dtype=np.uint8), tol=48)
# extra: drop remaining near-paper-white (keep light-grey machine panels ~220)
paper = (cut[:, :, 0] > 248) & (cut[:, :, 1] > 248) & (cut[:, :, 2] > 248)
cut[paper, 3] = 0
img = Image.fromarray(cut)
bbox = img.getbbox()
if bbox:
    img = img.crop(bbox)
pad = 32
canvas = Image.new("RGBA", (img.width + pad * 2, img.height + pad * 2), (0, 0, 0, 0))
alpha = Image.new("L", canvas.size, 0)
alpha.paste(img.split()[-1], (pad, pad))
halo = alpha.filter(ImageFilter.MaxFilter(5)).filter(ImageFilter.GaussianBlur(5))
layer = Image.new("RGBA", canvas.size, (236, 226, 186, 0))
layer.putalpha(halo.point(lambda v: min(210, int(v * 0.85))))
canvas = Image.alpha_composite(canvas, layer)
canvas.paste(img, (pad, pad), img)
canvas.save(DST, "PNG", optimize=True)
a = np.array(canvas)
Path(r"E:\shredding_web\site\scripts\_inspect.txt").write_text(
    f"size {canvas.size} alpha0 {float((a[:,:,3]==0).mean())}\n", encoding="utf-8"
)
