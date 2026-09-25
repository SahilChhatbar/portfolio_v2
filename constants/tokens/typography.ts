export const FONT_SIZES = {
  micro: "8px",       // 3xs - ultra micro metadata/labels
  captionSm: "9px",   // 2xs - secondary timestamps & edition badges
  badge: "10px",      // xs-compact - section eyebrow chips & tag labels
  fine: "11px",       // fine - datelines, pills & subtitles
  nav: "13px",        // nav - navigation bar links
} as const;

export const TYPOGRAPHY = {
  micro: "text-3xs",
  captionSm: "text-2xs",
  badge: "text-xs-compact",
  fine: "text-fine",
  nav: "text-nav",
} as const;
