import type FriendCard from "@/types/friendCard";

export default function FriendNode({ friend, onToggle, isActive }: { friend: FriendCard; onToggle: (id: string) => void; isActive: boolean }) {
  const statusColor = friend.status === "study" ? "var(--green)" : friend.status === "distract" ? "var(--red)" : "var(--muted)";
  const statusShadow = friend.status === "study" ? "0 0 6px var(--green)" : friend.status === "distract" ? "0 0 6px var(--red)" : "none";

  return (
    <div style={{ position: "absolute", top: "50%", left: "50%" }}>
      <div
        className={`friend-dot${friend.busted ? " friend-dot-busted" : ""}`}
        onClick={() => onToggle(friend.id)}
        style={{
          width: 44, height: 44, borderRadius: "50%",
          background: "var(--surface2)", border: `1.5px solid ${friend.busted ? "var(--red)" : "rgba(255,255,255,0.1)"}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 18, cursor: "none", transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
          position: "relative", transform: "translate(-50%,-50%)",
        }}
        onMouseEnter={e => { if (!friend.busted) { (e.currentTarget as HTMLElement).style.borderColor = "var(--green)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(0,232,122,0.4)"; } (e.currentTarget as HTMLElement).style.transform = "translate(-50%,-50%) scale(1.18)"; }}
        onMouseLeave={e => { if (!friend.busted) { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLElement).style.boxShadow = ""; } (e.currentTarget as HTMLElement).style.transform = "translate(-50%,-50%)"; }}
      >
        {friend.emoji}
        <div className={friend.status === "distract" ? "s-distract" : ""} style={{ position: "absolute", bottom: -2, right: -2, width: 11, height: 11, borderRadius: "50%", background: statusColor, boxShadow: statusShadow, border: "2px solid var(--bg)" }} />
      </div>
      <div style={{ position: "absolute", top: 50, left: "50%", transform: "translateX(-50%)", fontSize: 10, color: "var(--muted2)", whiteSpace: "nowrap", fontWeight: 500, letterSpacing: "0.06em", fontFamily: "'DM Mono',monospace" }}>{friend.name}</div>

      {/* Card */}
      <div style={{
        position: "absolute", width: 188,
        background: "rgba(14,14,14,0.97)", border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 12, padding: 14, backdropFilter: "blur(20px)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.6),0 0 30px rgba(0,232,122,0.06)",
        fontSize: 11, opacity: isActive ? 1 : 0, pointerEvents: isActive ? "auto" : "none",
        transform: isActive ? "scale(1) translateY(0)" : "scale(0.88) translateY(8px)",
        transition: "all 0.22s cubic-bezier(0.34,1.56,0.64,1)",
        zIndex: 50, top: 56, left: "50%", marginLeft: -94,
      }}>
        <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 13, marginBottom: 10, display: "flex", alignItems: "center", gap: 6 }}>
          {friend.emoji} {friend.name}
          <span style={{
            fontSize: 9, padding: "2px 7px", borderRadius: 100, fontWeight: 500,
            fontFamily: "'DM Mono',monospace", letterSpacing: "0.04em",
            color: friend.badge.type === "green" ? "var(--green)" : friend.badge.type === "red" ? "var(--red)" : "var(--muted2)",
            background: friend.badge.type === "green" ? "var(--green-dim)" : friend.badge.type === "red" ? "var(--red-dim)" : "rgba(255,255,255,0.04)",
            border: `1px solid ${friend.badge.type === "green" ? "var(--border-green)" : friend.badge.type === "red" ? "rgba(255,69,69,0.2)" : "var(--border)"}`,
          }}>{friend.badge.label}</span>
        </div>
        {friend.rows?.map(r => (
          <div key={r.lbl} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 7, fontSize: 11 }}>
            <span style={{ color: "var(--muted)" }}>{r.lbl}</span>
            <span style={{ color: "var(--white)", fontWeight: 500 }}>{r.val}</span>
          </div>
        ))}
        {friend.bar !== undefined && (
          <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 100, height: 3, marginTop: 10, overflow: "hidden" }}>
            <div style={{ height: "100%", borderRadius: 100, width: `${friend.bar}%`, background: "linear-gradient(90deg,var(--green),#00ffaa)", boxShadow: "0 0 6px rgba(0,232,122,0.5)" }} />
          </div>
        )}
        {friend.alert && (
          <div style={{
            marginTop: 10, padding: "8px 10px", borderRadius: 8, fontSize: 10, lineHeight: 1.5, fontFamily: "'DM Mono',monospace",
            color: friend.alert.type === "red" ? "var(--red)" : "var(--muted2)",
            background: friend.alert.type === "red" ? "var(--red-dim)" : "rgba(255,255,255,0.03)",
            border: `1px solid ${friend.alert.type === "red" ? "rgba(255,69,69,0.15)" : "var(--border)"}`,
          }}>{friend.alert.text}</div>
        )}
      </div>
    </div>
  );
}