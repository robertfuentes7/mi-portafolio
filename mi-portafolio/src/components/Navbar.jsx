export default function Navbar() {
  return (
    <nav className="w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-xl font-bold tracking-tight text-white">
          Dev<span className="text-cyan-400">.</span>
        </span>
        <div className="flex gap-6 text-sm font-medium text-slate-300">
          <a href="#proyectos" className="hover:text-cyan-400 transition-colors">Proyectos</a>
          <a href="#habilidades" className="hover:text-cyan-400 transition-colors">Habilidades</a>
          <a href="#contacto" className="text-cyan-400 border border-cyan-500/30 px-3 py-1 rounded-md hover:bg-cyan-500/10 transition-colors">Contacto</a>
        </div>
      </div>
    </nav>
  );
}