import { TICKER_ITEMS } from "@/mocks/tickerItems.mock";

export default function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div style={{ overflow: "hidden", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "12px 0", background: "var(--surface)", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: 80, background: "linear-gradient(90deg,var(--surface),transparent)", zIndex: 10 }} />
      <div style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: 80, background: "linear-gradient(-90deg,var(--surface),transparent)", zIndex: 10 }} />
      <div className="ticker">
        {items.map((item, i) => (
          <div key={i} style={{ fontSize: 12, color: "var(--muted2)", fontWeight: 400, display: "flex", alignItems: "center", gap: 10, flexShrink: 0, fontFamily: "'DM Mono',monospace", letterSpacing: "0.04em" }}>
            {item} <span style={{ color: "var(--green)" }}>·</span>
          </div>
        ))}
      </div>
    </div>
  );
}