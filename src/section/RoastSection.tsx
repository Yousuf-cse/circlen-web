import { useEffect, useRef, useState } from "react";

export default function RoastSection() {
  const feedRef = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !shown) { setShown(true); }
    }, { threshold: 0.2 });
    if (feedRef.current) obs.observe(feedRef.current);
    return () => obs.disconnect();
  }, [shown]);

  const roasts = [
    { r: true, icon: "🚨", title: "Rafi is aura farming again", titleColor: "var(--red)", body: "Rafi opened YouTube 3 times in the last 30 mins during a \"Physics session\". Studying or just vibing?", time: "2 minutes ago" },
    { r: true, icon: "💀", title: "Breaking News: Dev hasn't studied today", titleColor: "var(--red)", body: "Dev has logged 0 minutes of study today. His exam is in 3 days. Prayers up 🙏", time: "1 hour ago" },
    { r: false, icon: "🔥", title: "Priya is different", titleColor: "var(--green)", body: "Priya just hit a 21-day study streak. She's been on Udemy for 3 hours straight. What are you doing?", time: "3 hours ago" },
    { r: true, icon: "📱", title: "Ahmed's CGPA is in danger", titleColor: "var(--red)", body: "Ahmed opened Instagram 14 times in the last 40 mins. His session title said \"Math\". The math isn't mathing.", time: "5 hours ago" },
  ];

  return (
    <section style={{ padding: "60px 24px 100px", maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
      <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--green)", fontWeight: 500, marginBottom: 16, fontFamily: "'DM Mono',monospace" }}>The Roast Feed</p>
      <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(28px,4vw,52px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em" }}>
        Notifications your friends<br /><span style={{ color: "var(--red)" }}>can't IGNORE.</span>
      </h2>
      <div ref={feedRef} style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 10 }}>
        {roasts.map((r, i) => (
          <div key={i} className={`roast-notif${shown ? " show" : ""}`}
            style={{
              background: "var(--surface)",
              border: `1px solid ${r.r ? "rgba(255,69,69,0.15)" : "rgba(0,232,122,0.15)"}`,
              borderRadius: 14, padding: "16px 18px",
              display: "flex", alignItems: "flex-start", gap: 12, textAlign: "left",
              transitionDelay: shown ? `${i * 180}ms` : "0ms",
            }}>
            <div style={{ fontSize: 20, flexShrink: 0, marginTop: 1 }}>{r.icon}</div>
            <div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 13, fontWeight: 700, marginBottom: 4, color: r.titleColor }}>{r.title}</div>
              <div style={{ fontSize: 12, color: "var(--muted2)", lineHeight: 1.55, fontWeight: 300 }}>{r.body}</div>
              <div style={{ fontSize: 10, color: "rgba(100,100,100,0.7)", marginTop: 6, fontFamily: "'DM Mono',monospace" }}>{r.time}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}