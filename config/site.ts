export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Ghanaian Diaspora Union In Europe (GDUE)",
  description:
    "Fostering unity, cultural pride, economic empowerment, and social cohesion among Ghanaians in the diaspora.",
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
      label: "Impact",
      href: "/impact",
    },
    {
      label: "Donate",
      href: "/donate",
    },

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
  keywords:
    "Ghanaian diaspora, Ghanaians in Europe, GDUE, Ghana Diaspora Union in Europe, diaspora community, Ghanaian community, European Ghanaian, Ghanaian diaspora organization, Ghanaian diaspora support, diaspora advocacy, diaspora advocacy and representation, community support for Ghanaians, Ghanaian cultural events, diaspora networking, Ghanaian diaspora education, diaspora entrepreneurship, Ghanaian diaspora economic empowerment, Ghanaian diaspora UK, Ghanaian diaspora Germany, Ghanaian diaspora France, Ghanaian diaspora Netherlands, Ghanaian diaspora Italy, Ghanaian diaspora Spain, support for Ghanaians in diaspora, empower Ghanaian diaspora, connect with Ghanaian diaspora, celebrate Ghanaian culture, strengthen Ghanaian community, Ghanaian diaspora resources, diaspora well-being, Ghana Embassy, Ghana Help, Ghana Embassy in Spain",
};


export const europeanCountries = [
  { label: "Albania", value: "albania", description: "A country in Southeast Europe on the Adriatic and Ionian Sea within the Mediterranean Sea" },
  { label: "Andorra", value: "andorra", description: "A small, landlocked country in the Pyrenees mountains" },
  { label: "Armenia", value: "armenia", description: "A country located in the South Caucasus region of Eurasia" },
  { label: "Austria", value: "austria", description: "A landlocked East Alpine country in the southern part of Central Europe" },
  { label: "Azerbaijan", value: "azerbaijan", description: "A country in the South Caucasus region of Eurasia at the crossroads of Eastern Europe and Western Asia" },
  { label: "Belarus", value: "belarus", description: "A landlocked country in Eastern Europe" },
  { label: "Belgium", value: "belgium", description: "A country in Western Europe" },
  { label: "Bosnia and Herzegovina", value: "bosnia_and_herzegovina", description: "A country on the Balkan Peninsula in southeastern Europe" },
  { label: "Bulgaria", value: "bulgaria", description: "A country in Southeast Europe" },
  { label: "Croatia", value: "croatia", description: "A country at the crossroads of Central and Southeast Europe" },
  { label: "Cyprus", value: "cyprus", description: "An island country in the Eastern Mediterranean" },
  { label: "Czech Republic", value: "czech_republic", description: "A landlocked country in Central Europe" },
  { label: "Denmark", value: "denmark", description: "A Nordic country in Northern Europe" },
  { label: "Estonia", value: "estonia", description: "A country in Northern Europe" },
  { label: "Finland", value: "finland", description: "A Nordic country in Northern Europe" },
  { label: "France", value: "france", description: "A country in Western Europe" },
  { label: "Georgia", value: "georgia", description: "A country located at the intersection of Eastern Europe and Western Asia" },
  { label: "Germany", value: "germany", description: "A country in Central Europe" },
  { label: "Greece", value: "greece", description: "A country in Southeast Europe" },
  { label: "Hungary", value: "hungary", description: "A landlocked country in Central Europe" },
  { label: "Iceland", value: "iceland", description: "A Nordic island country in the North Atlantic" },
  { label: "Ireland", value: "ireland", description: "An island in the North Atlantic" },
  { label: "Italy", value: "italy", description: "A country in Southern Europe" },
  { label: "Kazakhstan", value: "kazakhstan", description: "A transcontinental country mainly located in Central Asia" },
  { label: "Kosovo", value: "kosovo", description: "A partially recognized state in Southeast Europe" },
  { label: "Latvia", value: "latvia", description: "A country in the Baltic region of Northern Europe" },
  { label: "Liechtenstein", value: "liechtenstein", description: "A German-speaking, 25km-long principality between Austria and Switzerland" },
  { label: "Lithuania", value: "lithuania", description: "A country in the Baltic region of Europe" },
  { label: "Luxembourg", value: "luxembourg", description: "A small European country, surrounded by Belgium, France, and Germany" },
  { label: "Malta", value: "malta", description: "An archipelago in the central Mediterranean" },
  { label: "Moldova", value: "moldova", description: "A landlocked country in Eastern Europe" },
  { label: "Monaco", value: "monaco", description: "A tiny independent city-state on France’s Mediterranean coastline" },
  { label: "Montenegro", value: "montenegro", description: "A country in Southeast Europe on the Adriatic Sea" },
  { label: "Netherlands", value: "netherlands", description: "A country in Western Europe" },
  { label: "North Macedonia", value: "north_macedonia", description: "A country in Southeast Europe" },
  { label: "Norway", value: "norway", description: "A Nordic country in Northern Europe" },
  { label: "Poland", value: "poland", description: "A country located in Central Europe" },
  { label: "Portugal", value: "portugal", description: "A country located on the Iberian Peninsula, in southwestern Europe" },
  { label: "Romania", value: "romania", description: "A country located at the crossroads of Central, Eastern, and Southeastern Europe" },
  { label: "Russia", value: "russia", description: "A transcontinental country spanning Eastern Europe and Northern Asia" },
  { label: "San Marino", value: "san_marino", description: "A mountainous microstate surrounded by north-central Italy" },
  { label: "Serbia", value: "serbia", description: "A country in Southeast Europe, situated at the crossroads of the Pannonian Plain and the Balkans" },
  { label: "Slovakia", value: "slovakia", description: "A landlocked country in Central Europe" },
  { label: "Slovenia", value: "slovenia", description: "A country in Central Europe" },
  { label: "Spain", value: "spain", description: "A country on Europe’s Iberian Peninsula" },
  { label: "Sweden", value: "sweden", description: "A Nordic country in Northern Europe" },
  { label: "Switzerland", value: "switzerland", description: "A mountainous Central European country" },
  { label: "Turkey", value: "turkey", description: "A transcontinental country located mainly on the Anatolian Peninsula in Western Asia, with a smaller portion on the Balkan Peninsula in Southeastern Europe" },
  { label: "Ukraine", value: "ukraine", description: "A country in Eastern Europe" },
  { label: "United Kingdom", value: "united_kingdom", description: "A country in Europe, made up of England, Scotland, Wales, and Northern Ireland" },
  { label: "Vatican City", value: "vatican_city", description: "An independent city-state enclaved within Rome, Italy" },
];
