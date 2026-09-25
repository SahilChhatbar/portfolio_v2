import React from "react";

interface EmblemProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

export default function Emblem({
  size = 48,
  className = "",
  ...props
}: EmblemProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Outer Ornamental Circle */}
      <circle
        cx="50"
        cy="50"
        r="46"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
      <circle
        cx="50"
        cy="50"
        r="42"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2,2"
        fill="none"
      />
      <circle
        cx="50"
        cy="50"
        r="38"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Classic Serif "S" Monogram */}
      <text
        x="50"
        y="62"
        fontFamily="Cinzel, serif"
        fontSize="34"
        fontWeight="900"
        textAnchor="middle"
        fill="currentColor"
      >
        S
      </text>

      {/* Flanking Stars */}
      <polygon
        points="50,14 52,20 58,20 53,24 55,30 50,26 45,30 47,24 42,20 48,20"
        fill="currentColor"
      />
      <polygon
        points="50,72 52,78 58,78 53,82 55,88 50,84 45,88 47,82 42,78 48,78"
        fill="currentColor"
      />
    </svg>
  );
}
