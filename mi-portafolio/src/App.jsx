// 1. IMPORTAR: Traemos los bloques desde la carpeta components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

// 2. RENDERIZAR: Los mostramos en orden de arriba a abajo
export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Barra superior fija */}
      <Navbar />

      {/* Contenido principal */}
      <main>
        <Hero />
        <Projects />
      </main>

      {/* Pie de página con enlaces */}
      <Footer />
    </div>
  );
}