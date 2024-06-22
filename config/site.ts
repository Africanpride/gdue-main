export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Ghanaian Diaspora Union   in Europe (GDUE)",
  description: "Fostering unity, cultural pride, economic empowerment, and social cohesion among Ghanaians in the diaspora.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Events",
      href: "/events",
    },

    {
      label: "Businesses",
      href: "/businesses",
    },
    {
      label: "News",
      href: "/news",
    },

    {
      label: "Contact Us",
      href: "/contact",
    },
    {
      label: "Donate",
      href: "/donate",
    }
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    twitter: "https://twitter.com/your-organization",
    facebook: "https://facebook.com/your-organization",
    instagram: "https://instagram.com/your-organization",
    linkedin: "https://linkedin.com/company/your-organization",
    docs: "/docs",
    membership: "/membership",
  },
};
