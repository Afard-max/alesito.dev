export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/ruizdiazalexandertech/", icon: "linkedin", label: "LinkedIn profile" },
  { platform: "GitHub", url: "https://github.com/Afard-max", icon: "github", label: "GitHub profile" },
  { platform: "GitLab", url: "https://gitlab.com/Afard-max", icon: "gitlab", label: "GitLab profile" },
  { platform: "VSCO", url: "https://vsco.co/alexander-ruiz-diaz/gallery", icon: "vsco", label: "VSCO gallery" },
  { platform: "X", url: "https://x.com/alexit0_dev", icon: "x", label: "X profile" },
  { platform: "YouTube", url: "https://youtube.com/@alexito-developeando", icon: "youtube", label: "YouTube channel" },
];