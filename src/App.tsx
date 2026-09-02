import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Conditions from "./components/Conditions";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import AreasServed from "./components/AreasServed";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFab from "./components/WhatsAppFab";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Conditions />
        <Testimonials />
        <FAQ />
        <AreasServed />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export default App;
