import React from "react";

interface NewspaperEmblemProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  className?: string;
}

export default function NewspaperEmblem({
  width = 120,
  height = 46,
  className = "",
  ...props
}: NewspaperEmblemProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 160 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 ${className}`}
      aria-hidden="true"
      {...props}
    >
      {/* Central Ornamental Shield & Sun */}
      <circle cx="80" cy="28" r="14" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <circle cx="80" cy="28" r="11" stroke="currentColor" strokeWidth="0.8" strokeDasharray="1.5 1.5" fill="none" />
      
      {/* Rising Sun Rays on Top of Shield */}
      <path d="M80 8V13M70 12L73.5 15.5M90 12L86.5 15.5M64 19L68.5 20.5M96 19L91.5 20.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      
      {/* Central Monogram / Emblem Motif */}
      <path d="M76 33L80 21L84 33M77.5 29H82.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      
      {/* Heraldic Left Wing / Mythical Creature */}
      <path
        d="M62 38C58 35 52 32 44 32C36 32 30 36 26 42C30 41 36 39 42 40C46 41 52 45 56 47C58 48 62 46 64 43Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M60 28C54 22 44 18 34 19C40 23 46 27 52 33C56 32 59 30 60 28Z"
        fill="currentColor"
        opacity="0.8"
      />
      <path
        d="M52 24C46 17 38 14 28 14C34 18 40 22 46 27Z"
        fill="currentColor"
        opacity="0.7"
      />
      
      {/* Heraldic Right Wing / Elephant Silhouette */}
      <path
        d="M98 38C102 35 108 32 116 32C124 32 130 36 134 42C130 41 124 39 118 40C114 41 108 45 104 47C102 48 98 46 96 43Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M100 28C106 22 116 18 126 19C120 23 114 27 108 33C104 32 101 30 100 28Z"
        fill="currentColor"
        opacity="0.8"
      />
      <path
        d="M108 24C114 17 122 14 132 14C126 18 120 22 114 27Z"
        fill="currentColor"
        opacity="0.7"
      />

      {/* Base Ribbon / Pedestal Scroll */}
      <path
        d="M20 50C40 48 60 49 80 49C100 49 120 48 140 50C136 53 124 54 80 54C36 54 24 53 20 50Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <line x1="30" y1="52" x2="130" y2="52" stroke="currentColor" strokeWidth="0.6" />
    </svg>
  );
}
