const proyectos = [
  {
    id: 1,
    titulo: "Sistema de Gestión & Módulos Empresariales",
    descripcion: "Arquitectura modular y backend enfocado en optimización de flujos operativos y base de datos relacional.",
    tags: ["Python", "Docker", "PostgreSQL"],
    link: "#",
    codigo: "#",
  },
  {
    id: 2,
    titulo: "Landing Page Comercial de Alta Conversión",
    descripcion: "Sitio web rápido, responsive y optimizado para SEO enfocado en captación de clientes locales.",
    tags: ["React", "Tailwind CSS", "Vite"],
    link: "#",
    codigo: "#",
  },
  {
    id: 3,
    titulo: "Panel de Control de Finanzas Personales",
    descripcion: "Aplicación interactiva para tracking de ingresos, gastos y cálculo de métricas financieras clave.",
    tags: ["JavaScript", "React", "Tailwind"],
    link: "#",
    codigo: "#",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-800">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-2">Proyectos Destacados</h2>
        <p className="text-slate-400">Soluciones prácticas orientadas a resolver problemas reales de negocio.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {proyectos.map((proyecto) => (
          <div 
            key={proyecto.id} 
            className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all hover:-translate-y-1 duration-200"
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">{proyecto.titulo}</h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">{proyecto.descripcion}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {proyecto.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="text-xs font-medium px-2.5 py-1 rounded bg-slate-800 text-cyan-400 border border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-4 border-t border-slate-800/80 text-sm font-medium">
              <a href={proyecto.link} className="text-cyan-400 hover:underline">Demo en vivo →</a>
              <a href={proyecto.codigo} className="text-slate-400 hover:text-white transition-colors">Código</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}