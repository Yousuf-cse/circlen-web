export default function Nav() {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      padding: "18px 48px", display: "flex", alignItems: "center", justifyContent: "space-between",
      backdropFilter: "blur(24px) saturate(180%)", background: "rgba(5,5,5,0.7)",
      borderBottom: "1px solid var(--border)",
    }}>
      <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 20, letterSpacing: "-0.04em", color: "var(--white)", display: "flex", alignItems: "center", gap: 8 }}>
        <div className="nav-logo-dot" style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--green)", boxShadow: "0 0 12px var(--green)" }} />
        Circlen
      </div>
      <button
        onClick={() => document.getElementById("waitlistSection")?.scrollIntoView({ behavior: "smooth" })}
        style={{ background: "var(--green)", color: "#000", border: "none", padding: "10px 22px", borderRadius: 100, fontFamily: "'DM Sans',sans-serif", fontSize: 13, fontWeight: 600, cursor: "none", letterSpacing: "0.01em", transition: "all 0.25s", boxShadow: "0 0 20px rgba(0,232,122,0.3)" }}
        onMouseEnter={e => { (e.target as HTMLElement).style.transform = "scale(1.05)"; (e.target as HTMLElement).style.boxShadow = "0 0 40px rgba(0,232,122,0.6)"; }}
        onMouseLeave={e => { (e.target as HTMLElement).style.transform = ""; (e.target as HTMLElement).style.boxShadow = "0 0 20px rgba(0,232,122,0.3)"; }}
      >
        Join Waitlist
      </button>
    </nav>
  );
}