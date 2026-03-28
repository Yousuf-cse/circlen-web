import { useState } from "react";

export default function Hero() {
  const [msg, setMsg] = useState("");
  const handleJoin = (inputId: string) => {
    const el = document.getElementById(inputId) as HTMLInputElement;
    const email = el?.value.trim();
    if (!email || !email.includes("@")) { el.style.borderColor = "rgba(255,69,69,0.5)"; setTimeout(() => el.style.borderColor = "", 1000); return; }
    setMsg("✅ You're on the list!");
    el.value = "";
  };

  return (
    <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "120px 24px 80px", position: "relative", overflow: "hidden" }}>
      <div className="hero-grid" />
      <div style={{ position: "absolute", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,232,122,0.07) 0%,transparent 70%)", top: "50%", left: "50%", animation: "breathe 7s ease-in-out infinite", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,69,69,0.05) 0%,transparent 70%)", top: "30%", left: "65%", transform: "translate(-50%,-50%)", animation: "breathe 10s ease-in-out infinite reverse", pointerEvents: "none" }} />
      {[["tl", "80px", "40px", "auto", "auto", "1px 0 0 1px"], ["tr", "80px", "auto", "auto", "40px", "1px 1px 0 0"], ["bl", "auto", "40px", "40px", "auto", "0 0 1px 1px"], ["br", "auto", "auto", "40px", "40px", "0 1px 1px 0"]].map(([cls, top, left, bottom, right, bw]) => (
        <div key={cls} className={`hero-corner ${cls}`} style={{ top, left: left === "auto" ? undefined : left, bottom: bottom === "auto" ? undefined : bottom, right: right === "auto" ? undefined : right, borderWidth: bw }} />
      ))}

      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,232,122,0.08)", border: "1px solid var(--border-green)", padding: "6px 16px", borderRadius: 100, fontSize: 11, color: "var(--green)", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500, marginBottom: 28, animation: "fadeUp 0.7s ease both", position: "relative", zIndex: 3 }}>
        <div className="badge-dot" style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green)" }} />
        Coming Soon — Waitlist Open
      </div>

      <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(44px,7.5vw,108px)", fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.04em", maxWidth: 960, position: "relative", zIndex: 3, animation: "fadeUp 0.7s 0.12s ease both" }}>
        <span style={{ color: "var(--white)", display: "block" }}>Your circle.</span>
        <span className="hero-title-t2">No more lies.</span>
      </h1>

      <p style={{ fontSize: "clamp(15px,1.8vw,18px)", color: "var(--muted2)", maxWidth: 460, lineHeight: 1.75, marginTop: 28, fontWeight: 300, animation: "fadeUp 0.7s 0.24s ease both", position: "relative", zIndex: 3 }}>
        Your friend says "I never study" and gets 9+ CGPA.<br />
        Circlen knows what they were <em>actually</em> doing.
      </p>

     <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 44, animation: "fadeUp 0.7s 0.36s ease both", position: "relative", zIndex: 3, flexWrap: "wrap", justifyContent: "center", padding: "0 16px", boxSizing: "border-box", width: "100%" }}>
  <div style={{ display: "flex", alignItems: "center", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 100, padding: "5px 5px 5px 20px", gap: 8, transition: "border-color 0.3s,box-shadow 0.3s", width: "100%", maxWidth: 420, boxSizing: "border-box" }}
    onFocus={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-green)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(0,232,122,0.12)"; }}
    onBlur={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}
  >
    <input id="heroEmail" type="email" placeholder="your@email.com" onKeyDown={e => e.key === "Enter" && handleJoin("heroEmail")}
      style={{ background: "transparent", border: "none", outline: "none", color: "var(--white)", fontFamily: "'DM Sans',sans-serif", fontSize: 14, flex: 1, minWidth: 0 }} />
    <button onClick={() => handleJoin("heroEmail")}
      style={{ background: "var(--green)", color: "#000", border: "none", padding: "12px 20px", borderRadius: 100, fontFamily: "'DM Sans',sans-serif", fontSize: 14, fontWeight: 600, cursor: "none", transition: "all 0.25s", whiteSpace: "nowrap", flexShrink: 0 }}
      onMouseEnter={e => { (e.target as HTMLElement).style.transform = "scale(1.04)"; (e.target as HTMLElement).style.boxShadow = "0 8px 30px rgba(0,232,122,0.4)"; }}
      onMouseLeave={e => { (e.target as HTMLElement).style.transform = ""; (e.target as HTMLElement).style.boxShadow = ""; }}
    >Get Early Access →</button>
  </div>
</div>
<p style={{ fontSize: 12, color: "var(--green)", marginTop: 16, animation: "fadeUp 0.7s 0.48s ease both", position: "relative", zIndex: 3, fontFamily: "'DM Mono',monospace", letterSpacing: "0.04em", textAlign: "center", padding: "0 16px" }}>{msg}</p>
<p style={{ fontSize: 12, color: "var(--muted)", marginTop: msg ? 4 : 16, animation: "fadeUp 0.7s 0.48s ease both", position: "relative", zIndex: 3, fontFamily: "'DM Mono',monospace", letterSpacing: "0.04em", textAlign: "center", padding: "0 16px" }}>// No spam. Just a ping when we drop. 🔔</p>
    </section>
  );
}