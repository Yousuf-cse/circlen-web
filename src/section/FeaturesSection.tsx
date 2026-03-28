import { useReveal } from "@/hooks/useReveal";

export default function FeaturesSection() {
  const ref = useReveal();
  const features = [
  { icon: "🫦", title: "No Cap", desc: "Udemy? Counts. Instagram during a 'study session'? Caught in 4K. YouTube is guilty until proven innocent." },
  { icon: "💬", title: "Your Friends Will Hear About It", desc: "The moment you start fumbling, your whole circle gets the notification. Automatically cooked. No mercy." },
  { icon: "🌀", title: "Your Circle, No Filter", desc: "Everyone in one view. Who's locked in, who's rotting, who's been doom-scrolling for 40 minutes — it's all there, bestie." },
  { icon: "🪞", title: "The Lore Doesn't Lie", desc: "You said you didn't study. The app said otherwise. Your circle said oof. The CGPA said everything." },
];
  return (
    <section ref={ref} style={{ padding: "60px 24px 100px", maxWidth: 1100, margin: "0 auto" }}>
      <p className="reveal" style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--green)", fontWeight: 500, marginBottom: 16, fontFamily: "'DM Mono',monospace", textAlign: "center" }}>Features</p>
      <h2 className="reveal" style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(28px,4vw,52px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 0, textAlign: "center" }}>
        SNITCHING, But <span style={{ color: "var(--green)" }}>Make It Aesthetic </span>
      </h2>
      <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12, marginTop: 60 }}>
        {features.map((f, i) => (
          <div key={f.title} className={`feature-card reveal${i > 0 ? ` reveal-d${i}` : ""}`}
            style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, padding: 32, transition: "all 0.3s", position: "relative", overflow: "hidden", cursor: "none" }}
          >
            <div style={{ fontSize: 28, marginBottom: 14 }}>{f.icon}</div>
            <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{f.title}</div>
            <div style={{ color: "var(--muted2)", fontSize: 13, lineHeight: 1.7, fontWeight: 300 }}>{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}