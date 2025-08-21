import Image from "next/image";

export default function ProjectCard({ p }:{ p: { title:string, tag:string, year:string, summary:string, image:string } }){
  return (
    <article className="card overflow-hidden hover:-translate-y-1 transition-transform">
      <div className="relative w-full aspect-[16/10]">
        <Image src={p.image} alt={p.title} fill className="object-cover" />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 text-xs opacity-70 mb-2">
          <span>{p.tag}</span> • <span>{p.year}</span>
        </div>
        <h3 className="text-lg font-medium">{p.title}</h3>
        <p className="text-sm opacity-80 mt-2">{p.summary}</p>
      </div>
    </article>
  );
}
