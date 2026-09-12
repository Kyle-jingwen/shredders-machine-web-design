import Image from "next/image";

export function ProcessFlowchart() {
  return (
    <div className="rounded-2xl border border-ink-700 bg-ink-900 p-2 shadow-2xl shadow-black/40 sm:p-3">
      <Image
        src="/images/process/flowchart.png"
        alt="TIMO integrated shredding and dewatering process: feed, shred, separate, dewater, output"
        width={1536}
        height={1024}
        sizes="(max-width: 1024px) 100vw, 55vw"
        className="h-auto w-full rounded-xl"
        priority
      />
    </div>
  );
}
