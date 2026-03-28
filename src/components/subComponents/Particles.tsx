export default function Particles() {
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
      {Array.from({ length: 14 }).map((_, i) => {
        const size = Math.random() * 3 + 1;
        return (
          <div key={i} className="particle" style={{
            width: size, height: size,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 15 + 10}s`,
            animationDelay: `${Math.random() * 10}s`,
          }} />
        );
      })}
    </div>
  );
}