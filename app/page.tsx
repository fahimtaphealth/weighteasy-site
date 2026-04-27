import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import MedsStrip from "@/components/MedsStrip";
import SupportGap from "@/components/SupportGap";
import Zones from "@/components/Zones";
import Features from "@/components/Features";
import CoachBand from "@/components/CoachBand";
import Stats from "@/components/Stats";
import WhoItsFor from "@/components/WhoItsFor";
import Integrations from "@/components/Integrations";
import Testimonials from "@/components/Testimonials";
import CaseStudy from "@/components/CaseStudy";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <MedsStrip />
      <SupportGap />
      <Zones />
      <Features />
      <CoachBand />
      <Stats />
      <WhoItsFor />
      <Integrations />
      <CaseStudy />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
