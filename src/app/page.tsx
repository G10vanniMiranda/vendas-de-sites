import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Portfolio from "./components/Portfolio";
import Catalogo from "./components/Catalogo";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <main className="bg-[#0A0A0A] text-white overflow-hidden">
      <Header />
      <Hero />
      <Benefits />
      <Portfolio />
      <Catalogo />
      <CallToAction />
      <Footer />
    </main>
  );
}
