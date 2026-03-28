import { useReveal } from "./hooks/useReveal";
import Cursor from "./components/subComponents/Cursor";
import Particles from "./components/subComponents/Particles";
import Nav from "./section/nav";
import Hero from "./section/Hero";
import Ticker from "./components/subComponents/Ticker";
import OrbitalSection from "./section/OrbitalSection";
import ProblemSection from "./section/ProblemSection";
import StepsSection from "./section/StepsSection";
import FeaturesSection from "./section/FeaturesSection";
import RoastSection from "./section/RoastSection";
import WaitlistSection from "./section/WaitlistsSection";
import Footer from "./section/Footer";

function Divider() {
  return <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg,transparent,var(--border),transparent)" }} />;
}

export default function App() {
  const appRef = useReveal();

  return (
    <div ref={appRef}>
      <style>{`input { cursor: none !important; } ::placeholder { color: var(--muted); }`}</style>
      <Cursor />
      <Particles />
      <Nav />
      <Hero />
      <Ticker />
      <OrbitalSection />
      <Divider />
      <ProblemSection />
      <Divider />
      <StepsSection />
      <Divider />
      <FeaturesSection />
      <Divider />
      <RoastSection />
      <Divider />
      <WaitlistSection />
      <Footer/>
    </div>
  );
}