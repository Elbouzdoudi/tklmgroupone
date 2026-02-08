import Header from "./components/Header";
import Hero from "./components/Hero";
import ChooseHowYouLearn from "./components/ChooseHowYouLearn";
import IntroVideo from "./components/IntroVideo";
import WhyTakalam from "./components/WhyTakalam";
import WhatYouGet from "./components/WhatYouGet";
import Pricing from "./components/Pricing";
import GroupSessions from "./components/GroupSessions";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Stats from "./components/Stats";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero with split CTAs */}
        <Hero />
        
        {/* Choose How You Learn - immediately after hero */}
        <ChooseHowYouLearn />
        
        {/* Message from the teacher */}
        <IntroVideo />
        
        {/* Why Takalam & Who it's for */}
        <WhyTakalam />
        
        {/* What You Get */}
        <WhatYouGet />
        
        {/* 1-on-1 Private Sessions (renamed Pricing) */}
        <Pricing />
        
        {/* Group Sessions - equal visual importance */}
        <GroupSessions />
        
        {/* How It Works - parallel flows */}
        <HowItWorks />
        
        {/* Social Proof & Conversion */}
        <Testimonials />
        <Stats />
        
        {/* FAQ - with tabs for Private/Group */}
        <FAQ />
        
        {/* Contact/Registration */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
