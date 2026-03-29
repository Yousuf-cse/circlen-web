import { useEffect, useRef, useState, useCallback } from "react";
import { FRIENDS } from "@/mocks/friendcard.mock";
import { LIVE_STATUS } from "@/mocks/liveStatus.mock";
import FriendNode from "@/components/subComponents/FriendNode";

export default function OrbitalSection() {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);
  const [frameVisible, setFrameVisible] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);
  const [liveStatus, setLiveStatus] = useState("Just now");
  const siRef = useRef(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const calcPositions = useCallback(() => {
    if (!containerRef.current) return;
    const w = containerRef.current.offsetWidth;
    const h = containerRef.current.offsetHeight;
    const cx = w / 2,
      cy = h / 2;
    const radius = Math.min(w * 0.41, 160);
    const pos = FRIENDS.map((_, i) => {
      const angle = (i / FRIENDS.length) * 2 * Math.PI - Math.PI / 2;
      return {
        x: cx + radius * Math.cos(angle),
        y: cy + radius * Math.sin(angle),
      };
    });
    setPositions(pos);
  }, []);

  useEffect(() => {
    calcPositions();
    window.addEventListener("resize", calcPositions);
    return () => window.removeEventListener("resize", calcPositions);
  }, [calcPositions]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setFrameVisible(true);
      },
      { threshold: 0.15 },
    );
    if (frameRef.current) obs.observe(frameRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      siRef.current++;
      setLiveStatus(LIVE_STATUS[siRef.current % LIVE_STATUS.length]);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  const toggle = (id: string) =>
    setActiveCard((prev) => (prev === id ? null : id));

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        !(e.target as HTMLElement).closest(".friend-dot") &&
        !(e.target as HTMLElement).closest(".friend-card-popup")
      )
        setActiveCard(null);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const containerSize = isMobile ? "min(90vw, 320px)" : "min(90%, 420px)";

  return (
    <section
      style={{
        padding: "80px 24px 100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        overflowX: "hidden",
        maxWidth: "100vw",
      }}
    >
      <p
        className="reveal section-label"
        style={{
          fontSize: 11,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--green)",
          fontWeight: 500,
          marginBottom: 16,
          fontFamily: "'DM Mono',monospace",
        }}
      >
        App Preview
      </p>
      <h2
        className="reveal"
        style={{
          fontFamily: "'Syne',sans-serif",
          fontSize: "clamp(28px,4vw,52px)",
          fontWeight: 800,
          lineHeight: 1.2,
          letterSpacing: "-0.03em",
          marginBottom: 60,
          textAlign: "center",
          maxWidth: 600,
        }}
      >
        Your circle, <span style={{ color: "var(--green)" }}>at a Glance</span>
      </h2>

      {/* Browser Frame */}
      <div
        ref={frameRef}
        className="browser-frame reveal reveal-d1"
        style={{
          width: isMobile ? "100%" : "min(78%, 980px)",
          background: "var(--surface)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: isMobile ? 12 : 16,
          overflow: "hidden",
          boxShadow: frameVisible
            ? "0 0 0 1px rgba(255,255,255,0.04),0 40px 120px rgba(0,0,0,0.7),0 0 100px rgba(0,232,122,0.08)"
            : "0 0 0 1px rgba(255,255,255,0.04),0 40px 120px rgba(0,0,0,0.7),0 0 80px rgba(0,232,122,0.04)",
          position: "relative",
          opacity: frameVisible ? 1 : 0,
          transform: frameVisible
            ? "translateY(0) scale(1)"
            : "translateY(40px) scale(0.97)",
          transition:
            "opacity 0.9s ease,transform 0.9s cubic-bezier(0.16,1,0.3,1),box-shadow 0.9s ease",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: isMobile ? 12 : 16,
            background:
              "linear-gradient(135deg,rgba(0,232,122,0.03) 0%,transparent 50%)",
            pointerEvents: "none",
            zIndex: 5,
          }}
        />

        {/* Browser chrome — desktop only */}
        {!isMobile && (
          <div
            style={{
              background: "#111",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div style={{ display: "flex", gap: 6 }}>
              {[["#ff5f57"], ["#ffbd2e"], ["#28ca41"]].map(([bg], i) => (
                <div
                  key={i}
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    background: bg,
                  }}
                />
              ))}
            </div>
            <div
              style={{
                flex: 1,
                background: "#1a1a1a",
                borderRadius: 6,
                padding: "5px 12px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "'DM Mono',monospace",
                fontSize: 11,
                color: "var(--muted)",
                border: "1px solid rgba(255,255,255,0.04)",
              }}
            >
              <span style={{ color: "var(--green)", fontSize: 10 }}>🔒</span>
              <span style={{ color: "var(--muted2)" }}>
                app.circlen.io/orbit
              </span>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {["←", "→", "↺"].map((s) => (
                <div
                  key={s}
                  style={{
                    width: 28,
                    height: 22,
                    borderRadius: 4,
                    background: "#1a1a1a",
                    border: "1px solid rgba(255,255,255,0.05)",
                    color: "var(--muted)",
                    fontSize: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* App content */}
        <div
          style={{
            background: "#050505",
            minHeight: isMobile ? 440 : 560,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            padding: isMobile ? "16px 12px" : "32px 24px",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)",
              backgroundSize: "40px 40px",
              maskImage:
                "radial-gradient(ellipse 90% 90% at 50% 50%,black 20%,transparent 100%)",
            }}
          />

          {/* App topbar */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              padding: isMobile ? "12px 16px" : "16px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "rgba(5,5,5,0.8)",
              backdropFilter: "blur(12px)",
              borderBottom: "1px solid var(--border)",
              zIndex: 10,
            }}
          >
            <div
              style={{
                fontFamily: "'Syne',sans-serif",
                fontWeight: 800,
                fontSize: isMobile ? 14 : 16,
                letterSpacing: "-0.04em",
                color: "var(--white)",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--green)",
                }}
              />
              Circlen
            </div>

            {/* Tabs — desktop only */}
            {!isMobile && (
              <div
                style={{
                  display: "flex",
                  gap: 4,
                  background: "var(--surface2)",
                  borderRadius: 8,
                  padding: 3,
                }}
              >
                {["Orbital", "Feed", "Stats"].map((tab, i) => (
                  <div
                    key={tab}
                    style={{
                      fontSize: 11,
                      padding: "4px 12px",
                      borderRadius: 6,
                      color: i === 0 ? "var(--white)" : "var(--muted2)",
                      fontWeight: 500,
                      cursor: "none",
                      background: i === 0 ? "var(--surface3)" : "transparent",
                    }}
                  >
                    {tab}
                  </div>
                ))}
              </div>
            )}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: isMobile ? 10 : 11,
                fontFamily: "'DM Mono',monospace",
                color: "var(--green)",
              }}
            >
              <div
                className="badge-dot"
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "var(--green)",
                }}
              />
              {isMobile ? "4 active" : "Live · 4 active"}
            </div>
          </div>

          {/* Orbital */}
          <div
            ref={containerRef}
            style={{
              position: "relative",
              width: containerSize,
              height: containerSize,
              marginTop: isMobile ? 44 : 52,
            }}
          >
            <div className="orbital-ring3" />
            <div className="orbital-ring" />
            <div className="orbital-ring-dashes" />
            <div className="orbital-ring2" />
            <div
              style={{
                position: "absolute",
                inset: 40,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle,rgba(0,232,122,0.06) 0%,transparent 70%)",
                animation: "breathe-simple 5s ease-in-out infinite",
              }}
            />
            <div
              className="orbital-center"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: isMobile ? 48 : 58,
                height: isMobile ? 48 : 58,
                borderRadius: "50%",
                background: "#000",
                border: "2px solid var(--green)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow:
                  "0 0 30px rgba(0,232,122,0.4),inset 0 0 20px rgba(0,232,122,0.06)",
                zIndex: 10,
                fontFamily: "'Syne',sans-serif",
                fontWeight: 800,
                fontSize: isMobile ? 9 : 11,
                color: "var(--green)",
                letterSpacing: "0.08em",
                animation: "breathe-simple 4s ease-in-out infinite",
              }}
            >
              YOU
            </div>

            {positions.map((pos, i) => {
              if (!containerRef.current) return null;
              const h = containerRef.current.offsetHeight;
              const w = containerRef.current.offsetWidth;
              const cardWidth = 188;
              const flipUp = pos.y > h / 2;
              const spaceOnRight = w - pos.x;
              const spaceOnLeft = pos.x;
              const flipLeft = spaceOnRight < cardWidth / 2 + 10;
              const flipRight = spaceOnLeft < cardWidth / 2 + 10;
              return (
                <div
                  key={FRIENDS[i].id}
                  style={{ position: "absolute", left: pos.x, top: pos.y }}
                >
                  <FriendNode
                    friend={FRIENDS[i]}
                    onToggle={toggle}
                    isActive={activeCard === FRIENDS[i].id}
                    flipUp={flipUp}
                    flipLeft={flipLeft}
                    flipRight={flipRight}
                  />
                </div>
              );
            })}
          </div>

          {/* Stats bar */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: isMobile ? "10px 16px" : "12px 24px",
              background: "rgba(5,5,5,0.9)",
              backdropFilter: "blur(12px)",
              borderTop: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              zIndex: 10,
              flexWrap: "nowrap",
            }}
          >
            {/* Always show Active + Busted */}
            {[
              {
                dot: "var(--green)",
                shadow: "0 0 5px var(--green)",
                lbl: "Active",
                val: "3 / 5",
                valColor: "var(--green)",
              },
              {
                dot: "var(--red)",
                lbl: "Busted",
                val: "Rafi",
                valColor: "var(--red)",
              },
            ].map((s) => (
              <div
                key={s.lbl}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 10,
                  fontFamily: "'DM Mono',monospace",
                }}
              >
                <div
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: s.dot,
                    boxShadow: s.shadow,
                  }}
                />
                <span style={{ color: "var(--muted)" }}>{s.lbl}</span>
                <span style={{ color: s.valColor, fontWeight: 500 }}>
                  {s.val}
                </span>
              </div>
            ))}

            {/* Desktop only stats */}
            {!isMobile && (
              <>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 10,
                    fontFamily: "'DM Mono',monospace",
                  }}
                >
                  <div
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: "var(--muted)",
                    }}
                  />
                  <span style={{ color: "var(--muted)" }}>Top streak</span>
                  <span style={{ color: "var(--white)", fontWeight: 500 }}>
                    Zara · 21d 🔥
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 10,
                    fontFamily: "'DM Mono',monospace",
                  }}
                >
                  <span style={{ color: "var(--muted)" }}>Last update</span>
                  <span style={{ color: "var(--white)", fontWeight: 500 }}>
                    {liveStatus}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <p
        style={{
          fontSize: 11,
          color: "var(--muted)",
          marginTop: 18,
          fontFamily: "'DM Mono',monospace",
          letterSpacing: "0.04em",
          animation: "fadeUp 0.7s 0.8s ease both",
          position: "relative",
          zIndex: 3,
        }}
      >
        Click on any friend to inspect their session
      </p>
    </section>
  );
}
