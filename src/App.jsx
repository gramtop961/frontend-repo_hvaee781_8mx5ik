import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Tools from "./components/Tools";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Tools />
        <Testimonials />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} SecPros LLC · DevOps • Cloud • Security
        </div>
      </footer>
    </div>
  );
}

export default App;