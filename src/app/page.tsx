import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { projects, values, services } from "@/content/site";

export default function Page(){
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <Section id="portfolio" title="Selected Work" subtitle="Recent projects and case studies">
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => <ProjectCard key={i} p={p} />)}
        </div>
      </Section>

      <Section id="values" title="My Values" subtitle="What guides my work">
        <div className="grid md:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div key={i} className="card p-6">
              <h3 className="font-medium">{v.title}</h3>
              <p className="text-sm opacity-80 mt-2">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="services" title="What I Do" subtitle="Ways we can work together">
        <div className="grid md:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="card p-6 flex flex-col">
              <h3 className="font-medium">{s.title}</h3>
              <p className="text-sm opacity-80 mt-2 flex-1">{s.desc}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm opacity-80">{s.price}</span>
                <a className="text-sm px-3 py-2 rounded-xl bg-accent text-black" href="#contact">{s.cta}</a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="What People Say">
        <Testimonials />
      </Section>

      <Section id="contact" title="Contact" subtitle="Tell me about your project">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="opacity-80">I’ll reply within 1–2 business days. For urgent requests, use the WhatsApp link in the footer.</p>
            <div className="mt-6 p-5 card">
              <h4 className="font-medium mb-2">Project checklist</h4>
              <ul className="list-disc list-inside text-sm opacity-80 space-y-1">
                <li>Goal & constraints (timeline, budget)</li>
                <li>Drawings/refs (DWG, PDFs, images)</li>
                <li>Lux targets / standards</li>
              </ul>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>

      <Footer />
    </main>
  );
}
