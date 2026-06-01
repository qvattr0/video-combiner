// Adapted from React Bits — Gradient Text (https://reactbits.dev).
// Lightweight CSS-only animated gradient text (no extra dependencies).
export default function GradientText({
  children,
  className = "",
  colors = ["#6366f1", "#38bdf8", "#a78bfa", "#38bdf8", "#6366f1"],
  animationSpeed = 9,
  as: Tag = "span",
}) {
  const style = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    backgroundSize: "300% 100%",
    animationDuration: `${animationSpeed}s`,
  };
  return (
    <Tag className={`gradient-text ${className}`} style={style}>
      {children}
    </Tag>
  );
}
