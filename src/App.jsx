import Header from "./components/Header";
import Hero from "./components/Hero";
import Recursos from "./components/Recursos";
import Sobre from "./components/Sobre";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">

      <Header />

      <main>
      <Hero/>
      <Recursos />
      <Sobre />
      </main>

      <Footer /> 


    </div>
  )
}