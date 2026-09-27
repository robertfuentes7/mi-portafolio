export default function Footer() {
  return (
    <footer id="contacto" className="border-t border-slate-800 bg-slate-950 py-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-lg font-bold text-white">Dev<span className="text-cyan-400">.</span></span>
          <p className="text-sm text-slate-500 mt-1">Listo para colaborar en nuevos proyectos y desafíos técnicos.</p>
        </div>

        <div className="flex gap-6 text-sm font-medium text-slate-400">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
          <a href="mailto:tuemail@example.com" className="hover:text-cyan-400 transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}