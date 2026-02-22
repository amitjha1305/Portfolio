import React from "react";

interface RippleProps {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
}

export const Ripple: React.FC<RippleProps> = ({
  mainCircleSize = 100,
  mainCircleOpacity = 0.22,
  numCircles = 5,
}) => {
  return (
    <div className="pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]">
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70;
        const opacity = Math.max(mainCircleOpacity - i * 0.03, 0.05);
        const delay = `${i * 0.12}s`;
        const color =
          i % 3 === 0
            ? "hsl(var(--primary) / 0.6)"
            : i % 3 === 1
            ? "hsl(var(--accent) / 0.5)"
            : "hsl(var(--foreground) / 0.4)";

        return (
          <div
            key={i}
            className="absolute rounded-full border animate-ripple"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              opacity,
              animationDelay: delay,
              borderWidth: "1.2px",
              borderColor: color,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        );
      })}
    </div>
  );
};
