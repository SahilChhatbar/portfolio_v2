import { SocialLink } from "@/types";
import { ICONS } from "@/constants/icons";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "Email",
    label: "Email",
    url: "mailto:sahilchhatbar248@gmail.com",
    icon: ICONS.email,
    handle: "sahilchhatbar248@gmail.com"
  },
  {
    platform: "LinkedIn",
    label: "LinkedIn Profile",
    url: "https://www.linkedin.com/in/sahilchhatbar",
    icon: ICONS.linkedin,
    handle: "linkedin.com/in/sahilchhatbar"
  },
  {
    platform: "GitHub",
    label: "GitHub Repositories",
    url: "https://github.com/SahilChhatbar",
    icon: ICONS.github,
    handle: "github.com/SahilChhatbar"
  },
  {
    platform: "Résumé",
    label: "Curriculum Vitae",
    url: "/sahil-chhatbar-resume.pdf",
    icon: ICONS.resume,
    handle: "Download Resume (PDF)"
  }
];

export const CONTACT_INFO = {
  address: "Ahmedabad / Rajkot, Gujarat, India",
  timezone: "IST (UTC +5:30)",
  status: "OPEN TO NEW FULL-TIME & CONTRACT ROLES",
  responseTime: "Within 24 hours"
};
