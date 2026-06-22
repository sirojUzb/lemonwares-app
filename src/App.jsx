import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CloudHosting from "./components/CloudHosting";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import PricingCards from "./components/PricingCards";
import Testimonials from "./components/Testimonials";
import Brands from "./components/Brands";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CloudHosting />
      <Services />
      <Pricing />
      <PricingCards />
      <Testimonials />
      <Brands />
      <CtaBanner />
      <Footer />
    </div>
  );
}

export default App;
