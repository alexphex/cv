import { CV_DATA } from "@/content/data";

export default function Home() {
  return (
    // Увеличили ширину до max-w-4xl и базовый шрифт до text-lg
    <main className="max-w-4xl mx-auto py-16 px-8 font-mono selection:bg-barva-blue/30 text-lg">
      
      {/* HEADER */}
      <header className="mb-16 border-l-4 border-barva-blue pl-8 flex flex-col items-start">
        <h1 className="text-4xl md:text-6xl font-bold text-barva-blue tracking-tighter lowercase">
          {CV_DATA.name}
        </h1>
        
        {/* Твоя роль */}
        <p className="text-xl md:text-2xl text-barva-text mt-3 font-semibold">
          {CV_DATA.role}
        </p>
        
        {/* Блок с контактами */}
        <div className="mt-6 space-y-2 text-barva-accent">
          <p className="text-base md:text-lg">
            Email: <a href={`mailto:${CV_DATA.email}`} className="hover:text-barva-blue underline decoration-barva-accent/30 underline-offset-4 transition-colors">
              {CV_DATA.email}
            </a>
          </p>
          <p className="text-barva-green text-base md:text-lg font-bold">
            {"-> "} 
            <a href={CV_DATA.linkedin} target="_blank" className="hover:text-barva-blue transition-colors">Linkedin</a>
            {" | -> "}
            <a href={CV_DATA.github} target="_blank" className="hover:text-barva-blue transition-colors">GitHub</a>
          </p>
        </div>

        {/* Кнопка скачивания — ТЕПЕРЬ ПОД ССЫЛКАМИ */}
        <div className="mt-8 w-full sm:w-auto">
          <a 
            href="/CV_alex2026.pdf" 
            download="Alexei_Verdes_CV.pdf" 
            className="flex items-center justify-center px-6 py-3 border-2 border-barva-green text-barva-green hover:bg-barva-green hover:text-barva-bg transition-all rounded font-bold text-sm md:text-base tracking-widest uppercase"
          >
            <span className="mr-2 text-xl">💾</span> DOWNLOAD CV (PDF)
          </a>
        </div>
      </header>

      {/* PROFILE */}
      <section className="mb-14">
        <h2 className="text-barva-purple font-bold mb-5 tracking-widest uppercase text-sm border-b border-white/5 inline-block">// Profile</h2>
        <p className="text-barva-text leading-relaxed text-xl opacity-90">
          {CV_DATA.profile}
        </p>
      </section>

      {/* SKILLS */}
      <section className="mb-14">
        <h2 className="text-barva-purple font-bold mb-6 tracking-widest uppercase text-sm border-b border-white/5 inline-block">// Skills</h2>
        <div className="grid gap-4">
          {CV_DATA.skills.map((skill, i) => (
            <div key={i} className="text-lg border-b border-white/5 pb-3 group">
              <strong className="text-barva-blue group-hover:text-barva-accent transition-colors">{skill.category}:</strong> 
              <span className="ml-3 opacity-80">{skill.items}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mb-14">
        <h2 className="text-barva-purple font-bold mb-6 tracking-widest uppercase text-sm border-b border-white/5 inline-block">// Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {CV_DATA.projectGroups.map((group, i) => (
            <div key={i} className="p-6 bg-barva-card rounded-xl border border-white/5 hover:border-barva-blue/40 transition-all flex flex-col">
              <h3 className="text-barva-accent font-bold text-xl mb-2">{group.title}</h3>
              <p className="text-sm opacity-60 mb-4 italic leading-snug flex-grow">{group.description}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-base text-barva-green font-bold">
                {group.links.map((link, li) => (
                  <a key={li} href={link.url} target="_blank" className="hover:text-barva-blue transition-colors">
                    {"->"} {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION, LANGUAGES & INFO */}
      <div className="grid md:grid-cols-3 gap-12 border-t border-white/10 pt-10">
        <section>
          <h2 className="text-barva-purple font-bold mb-4 text-sm uppercase tracking-wider">// Languages</h2>
          <ul className="text-base space-y-2 opacity-80">
            {CV_DATA.languages.map(l => <li key={l} className="flex items-center"><span className="text-barva-blue mr-2">■</span> {l}</li>)}
          </ul>
        </section>
        
        <section className="md:col-span-2">
          <h2 className="text-barva-purple font-bold mb-4 text-sm uppercase tracking-wider">// Additional Information</h2>
          <ul className="text-base space-y-2 opacity-80">
            <li className="flex items-start"><span className="text-barva-blue mr-2 mt-1.5 text-[10px]">■</span> Problem-solving skills and willingness to learn.</li>
            <li className="flex items-start"><span className="text-barva-blue mr-2 mt-1.5 text-[10px]">■</span> Able to produce clean, maintainable code and work independently.</li>
          </ul>
        </section>
      </div>

      <footer className="mt-24 pt-8 border-t border-white/10 text-barva-green/40 text-sm text-center italic">
        {CV_DATA.name} wp-dev 2026. Built with Next.js & Vercel
      </footer>
    </main>
  );
}