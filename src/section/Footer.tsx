export default function Footer() {
  return (
    <footer style={{ padding: "36px 48px", borderTop: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
        <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 16, color: "var(--white)", display: "flex", alignItems: "center", gap: 6 }}>
          <div className="footer-logo-dot" style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green)" }} />
          Circlen
        </div>
        <div style={{ fontSize: 12, color: "var(--muted)", fontFamily: "'DM Mono',monospace" }}>Built for students who are tired of being gaslit.</div>
        <div style={{ fontSize: 12, color: "var(--muted)", fontFamily: "'DM Mono',monospace" }}>© 2026 Circlen</div>
      </footer>
  )
}