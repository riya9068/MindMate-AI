import Navbar from "../components/Navbar";
import About from "../components/About";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import DashboardPreview from "../components/DashboardPreview";
import AIChatPreview from "../components/AIChatPreview";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <HowItWorks />
       <DashboardPreview />
        <AIChatPreview />
        <CTA />
        <Footer />
        
    </>
  );
};

export default Home;