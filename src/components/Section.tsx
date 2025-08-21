export default function Section({ id, title, subtitle, children }:{ id?: string, title: string, subtitle?: string, children: React.ReactNode }){
  return (
    <section id={id} className="section">
      <div className="container-g">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
          {subtitle && <p className="opacity-70 mt-2">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
