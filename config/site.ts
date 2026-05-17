export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
    linkedin: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Afzal Labs",
  description: "Building Agentic Web Systems",
  url: "https://example.com",
  ogImage: "https://example.com/og.jpg",
  links: {
    twitter: "https://twitter.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
};
