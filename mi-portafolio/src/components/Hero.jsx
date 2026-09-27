export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 md:py-28 flex flex-col items-start gap-6">
      <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/60 text-cyan-400 border border-cyan-800">
        Disponible para nuevos proyectos
      </div>
      <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
        Construyendo soluciones web <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          rápidas, modernas y funcionales.
        </span>
      </h1>
      <p className="text-lg text-slate-400 max-w-2xl">
        Desarrollador enfocado en resolver problemas reales mediante código limpio, arquitecturas escalables y diseño responsive.
      </p>
      <div className="flex gap-4 pt-2">
        <a 
          href="#proyectos" 
          className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-6 py-3 rounded-lg transition-colors shadow-lg shadow-cyan-500/20"
        >
          Ver proyectos
        </a>
        <a 
          href="#contacto" 
          className="border border-slate-700 hover:border-slate-500 text-white font-medium px-6 py-3 rounded-lg transition-colors"
        >
          Hablemos
        </a>
      </div>
    </section>
  );
}