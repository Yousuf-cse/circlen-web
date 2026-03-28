import { useReveal } from "@/hooks/useReveal";

export default function StepsSection() {
  const ref = useReveal();
  const steps = [
    { num: "01", icon: "👥", title: "Create Your Circle", desc: "Invite 3-5 friends. Small groups only — this isn't a leaderboard, it's an intervention." },
    { num: "02", icon: "😴", title: "Just Show Up", desc: "Open the app. That's your only job. Circlen handles the rest — silently, automatically, without you lifting a finger." },
    { num: "03", icon: "☠️", title: "The Truth Comes Out", desc: "Who actually studied and who just said they didn't? Circlen knows. Your whole circle knows. No more CGPA surprises." },
  ];
  return (
    <section ref={ref} style={{ padding: "60px 24px 100px", maxWidth: 1100, margin: "0 auto" }}>
      <p className="reveal" style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--green)", fontWeight: 500, marginBottom: 16, fontFamily: "'DM Mono',monospace", textAlign: "center" }}>How It Works</p>
      <h2 className="reveal" style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(28px,4vw,52px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 0, textAlign: "center" }}>
        Simple. <span style={{ color: "var(--green)" }}>SAVAGE.</span> Effective.
      </h2>
      <div className="steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, marginTop: 60, background: "var(--border)", borderRadius: 20, overflow: "hidden" }}>
        {steps.map((s, i) => (
          <div key={s.num} className={`step-card reveal${i > 0 ? ` reveal-d${i}` : ""}`}
            style={{ background: "var(--surface)", padding: "44px 32px", position: "relative", transition: "background 0.3s" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "var(--surface2)"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "var(--surface)"}
          >
            <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 56, fontWeight: 800, color: "rgba(0,232,122,0.08)", lineHeight: 1, marginBottom: 20, letterSpacing: "-0.05em" }}>{s.num}</div>
            <div style={{ fontSize: 26, marginBottom: 14 }}>{s.icon}</div>
            <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{s.title}</div>
            <div style={{ color: "var(--muted2)", fontSize: 13, lineHeight: 1.7, fontWeight: 300 }}>{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}