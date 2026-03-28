import { useReveal } from "@/hooks/useReveal";

export default function ProblemSection() {
  const ref = useReveal();
  return (
    <section ref={ref} style={{ padding: "100px 24px", maxWidth: 900, margin: "0 auto", position: "relative" }}>
      <p className="reveal section-label" style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--green)", fontWeight: 500, marginBottom: 16, fontFamily: "'DM Mono',monospace" }}>The Problem</p>
      <h2 className="reveal" style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(28px,4vw,52px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em" }}>
        "I didn't study<br />at all bro" — <span style={{ color: "var(--red)" }}>9.4 CGPA.</span>
      </h2>
      <p className="reveal reveal-d1" style={{ fontSize: "clamp(16px,2vw,19px)", color: "var(--muted2)", lineHeight: 1.85, fontWeight: 300, maxWidth: 600, marginTop: 28 }}>
        We've all been there. The friend who claims to never open a book but somehow aces everything.
        The group chat where everyone says they're not ready — then the results drop and you're the only one who actually wasn't ready.
        <br /><br />
        Circlen puts your study habits in front of your friends. <span style={{ color: "var(--green)" }}>Raw. Unfiltered. Real.</span> No more lies. No more excuses. Just data.
      </p>
    </section>
  );
}