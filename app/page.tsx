import Header from "./components/Header";
import Hero from "./components/Hero";
import IntroVideo from "./components/IntroVideo";
import WhyTakalam from "./components/WhyTakalam";
import WhatYouGet from "./components/WhatYouGet";
import Pricing from "./components/Pricing";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Primary Flow: Hero → Video → Why/Who → What → Pricing → Steps */}
        <Hero />
        <IntroVideo />
        <WhyTakalam />
        <WhatYouGet />
        <Pricing />
        <HowItWorks />
        
        {/* Social Proof & Conversion */}
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
