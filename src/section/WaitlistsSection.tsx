import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

export default function WaitlistSection() {
  const ref = useReveal();
  const [success, setSuccess] = useState(false);

  const handleJoin = () => {
    const el = document.getElementById("mainEmail") as HTMLInputElement;
    const email = el?.value.trim();
    if (!email || !email.includes("@")) { el.style.borderColor = "rgba(255,69,69,0.5)"; setTimeout(() => el.style.borderColor = "", 1000); return; }
    setSuccess(true);
  };

  const share = () => {
    if (navigator.share) navigator.share({ title: "Circlen", text: "Join Circlen — catch your friends lying about studying", url: window.location.href });
    else { navigator.clipboard.writeText(window.location.href); alert("Link copied!"); }
  };

  return (
    <section id="waitlistSection" ref={ref} style={{ padding: "100px 24px 80px", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: 600, height: 400, background: "radial-gradient(ellipse,rgba(0,232,122,0.08) 0%,transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none", animation: "breathe 6s ease-in-out infinite" }} />
      <p className="reveal" style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--green)", fontWeight: 500, marginBottom: 16, fontFamily: "'DM Mono',monospace" }}>Early Access</p>
      <h2 className="reveal" style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(28px,4vw,52px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em" }}>
        Ready to expose<br /><span style={{ color: "var(--green)" }}>your friends?</span>
      </h2>
      <p className="reveal" style={{ color: "var(--muted2)", fontSize: 15, marginTop: 14, fontWeight: 300 }}>Join the waitlist. Be first. Get early access when we drop.</p>

      {!success ? (
        <div className="reveal reveal-d1" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, marginTop: 44, position: "relative", zIndex: 2 }}>
          <input id="mainEmail" type="email" placeholder="your@email.com"
            onKeyDown={e => e.key === "Enter" && handleJoin()}
            style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 100, padding: "15px 26px", color: "var(--white)", fontFamily: "'DM Sans',sans-serif", fontSize: 15, width: "100%", maxWidth: 380, outline: "none", transition: "all 0.3s" }}
            onFocus={e => { (e.target as HTMLElement).style.borderColor = "var(--border-green)"; (e.target as HTMLElement).style.boxShadow = "0 0 30px rgba(0,232,122,0.1)"; }}
            onBlur={e => { (e.target as HTMLElement).style.borderColor = "var(--border)"; (e.target as HTMLElement).style.boxShadow = ""; }}
          />
          <button onClick={handleJoin}
            style={{ background: "var(--green)", color: "#000", border: "none", padding: "15px 38px", borderRadius: 100, fontFamily: "'Syne',sans-serif", fontSize: 15, fontWeight: 700, cursor: "none", transition: "all 0.25s", letterSpacing: "-0.02em" }}
            onMouseEnter={e => { (e.target as HTMLElement).style.transform = "scale(1.04)"; (e.target as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,232,122,0.4)"; }}
            onMouseLeave={e => { (e.target as HTMLElement).style.transform = ""; (e.target as HTMLElement).style.boxShadow = ""; }}
          >Secure My Spot →</button>
          <p style={{ fontSize: 12, color: "var(--muted)", marginTop: 6, fontFamily: "'DM Mono',monospace" }}>Join <span style={{ color: "var(--green)" }}>247</span> others already on the list</p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, animation: "fadeUp 0.5s ease", marginTop: 44 }}>
          <div style={{ fontSize: 44 }}>🎉</div>
          <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 22, fontWeight: 800 }}>You're on the list!</div>
          <div style={{ color: "var(--muted2)", fontSize: 14 }}>We'll hit you up when Circlen drops. Get your friends to join too 👇</div>
          <button onClick={share} style={{ background: "var(--green)", color: "#000", border: "none", padding: "15px 38px", borderRadius: 100, fontFamily: "'Syne',sans-serif", fontSize: 15, fontWeight: 700, cursor: "none", marginTop: 8 }}>
            Share with Friends →
          </button>
        </div>
      )}
    </section>
  );
}