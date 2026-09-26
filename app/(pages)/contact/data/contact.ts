import { ICONS } from "@/constants/icons";

export interface ContactChannel {
  platform: string;
  label: string;
  url: string;
  icon: string;
  handle: string;
}

export interface ContactTelemetry {
  address: string;
  timezone: string;
  responseTime: string;
  status: string;
}

export interface ContactData {
  meta: {
    pageNumber: number;
    totalPages: number;
    pageTitle: string;
    category: string;
    subtitle: string;
    prevHref: string;
    nextHref: string;
  };
  banner: {
    openWireTag: string;
    dispatchTag: string;
    headline: string;
    subtitle: string;
  };
  directoryTag: string;
  channels: ContactChannel[];
  editorialQuote: {
    headline: string;
    subheadline: string;
  };
  telemetryTag: string;
  telemetry: ContactTelemetry;
  cvBox: {
    title: string;
    badge: string;
    actionText: string;
    actionHref: string;
    description: string;
  };
}

export const CONTACT_DATA: ContactData = {
  meta: {
    pageNumber: 6,
    totalPages: 6,
    pageTitle: "CONTACT",
    category: "SECTION VI • GET IN TOUCH",
    subtitle:
      "Direct contact channels, availability details, and resume download.",
    prevHref: "/career",
    nextHref: "",
  },
  banner: {
    openWireTag: "GET IN TOUCH",
    dispatchTag: "CONTACT INFO",
    headline: "CONTACT SAHIL: GET IN TOUCH",
    subtitle:
      "Whether you have an engineering opening, a collaboration project, or a technical inquiry — feel free to reach out.",
  },
  directoryTag: "CONTACT CHANNELS",
  channels: [
    {
      platform: "Email",
      label: "Email",
      url: "mailto:sahilchhatbar7@gmail.com",
      icon: ICONS.email,
      handle: "sahilchhatbar7@gmail.com",
    },
    {
      platform: "Phone",
      label: "Phone Contact",
      url: "tel:+916351730488",
      icon: ICONS.phone,
      handle: "+91 6351730488",
    },
    {
      platform: "LinkedIn",
      label: "LinkedIn Profile",
      url: "https://www.linkedin.com/in/sahil-chhatbar-2b888523a/",
      icon: ICONS.linkedin,
      handle: "linkedin.com/in/sahil-chhatbar-2b888523a",
    },
    {
      platform: "GitHub",
      label: "GitHub Repositories",
      url: "https://github.com/SahilChhatbar",
      icon: ICONS.github,
      handle: "github.com/SahilChhatbar",
    },
  ],
  editorialQuote: {
    headline: "“LET'S BUILD SOMETHING GREAT.”",
    subheadline:
      "High standards, clear communication, and consistent delivery.",
  },
  telemetryTag: "AVAILABILITY & DETAILS",
  telemetry: {
    address: "Ahmedabad, Gujarat, India",
    timezone: "IST (UTC +5:30)",
    responseTime: "Within 24 hours",
    status: "OPEN TO EXPLORING FULL-TIME & FREELANCE OPPORTUNITIES",
  },
  cvBox: {
    title: "CURRICULUM VITAE",
    badge: "RESUME",
    actionText: "DOWNLOAD RESUME (PDF)",
    actionHref:
      "https://drive.google.com/file/d/1P1rGTNbBAnNkbK5RFlY99kFdfxA6JBTi/view?usp=sharing",
    description:
      "A comprehensive one-page engineering summary formatted for technical recruiters and engineering leaders.",
  },
};
