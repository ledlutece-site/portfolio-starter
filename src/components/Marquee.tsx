'use client';
import { marquee } from "@/content/site";
export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-white/10">
      <div className="whitespace-nowrap animate-marquee py-2">
        <span className="text-sm opacity-70">{marquee.text.repeat(8)}</span>
      </div>
    </div>
  );
}
