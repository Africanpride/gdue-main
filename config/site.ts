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
      label: "Impact",
      href: "/impact",
    },
    {
      label: "Donate",
      href: "/donate",
    },
    {
      label: "Contact Us",
      href: "/contact",
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

export const allCountries = [
  // European countries (already provided)
  {
    label: "Albania",
    value: "albania",
    description:
      "A country in Southeast Europe on the Adriatic and Ionian Sea within the Mediterranean Sea",
    flag: "https://flagcdn.com/al.svg",
  },
  {
    label: "Andorra",
    value: "andorra",
    description: "A small, landlocked country in the Pyrenees mountains",
    flag: "https://flagcdn.com/ad.svg",
  },
  {
    label: "Armenia",
    value: "armenia",
    description: "A country located in the South Caucasus region of Eurasia",
    flag: "https://flagcdn.com/am.svg",
  },
  {
    label: "Austria",
    value: "austria",
    description:
      "A landlocked East Alpine country in the southern part of Central Europe",
    flag: "https://flagcdn.com/at.svg",
  },
  {
    label: "Azerbaijan",
    value: "azerbaijan",
    description:
      "A country in the South Caucasus region of Eurasia at the crossroads of Eastern Europe and Western Asia",
    flag: "https://flagcdn.com/az.svg",
  },
  {
    label: "Belarus",
    value: "belarus",
    description: "A landlocked country in Eastern Europe",
    flag: "https://flagcdn.com/by.svg",
  },
  {
    label: "Belgium",
    value: "belgium",
    description: "A country in Western Europe",
    flag: "https://flagcdn.com/be.svg",
  },
  {
    label: "Bosnia and Herzegovina",
    value: "bosnia_and_herzegovina",
    description: "A country on the Balkan Peninsula in southeastern Europe",
    flag: "https://flagcdn.com/ba.svg",
  },
  {
    label: "Bulgaria",
    value: "bulgaria",
    description: "A country in Southeast Europe",
    flag: "https://flagcdn.com/bg.svg",
  },
  {
    label: "Croatia",
    value: "croatia",
    description: "A country at the crossroads of Central and Southeast Europe",
    flag: "https://flagcdn.com/hr.svg",
  },
  {
    label: "Cyprus",
    value: "cyprus",
    description: "An island country in the Eastern Mediterranean",
    flag: "https://flagcdn.com/cy.svg",
  },
  {
    label: "Czech Republic",
    value: "czech_republic",
    description: "A landlocked country in Central Europe",
    flag: "https://flagcdn.com/cz.svg",
  },
  {
    label: "Denmark",
    value: "denmark",
    description: "A Nordic country in Northern Europe",
    flag: "https://flagcdn.com/dk.svg",
  },
  {
    label: "Estonia",
    value: "estonia",
    description: "A country in Northern Europe",
    flag: "https://flagcdn.com/ee.svg",
  },
  {
    label: "Finland",
    value: "finland",
    description: "A Nordic country in Northern Europe",
    flag: "https://flagcdn.com/fi.svg",
  },
  {
    label: "France",
    value: "france",
    description: "A country in Western Europe",
    flag: "https://flagcdn.com/fr.svg",
  },
  {
    label: "Georgia",
    value: "georgia",
    description:
      "A country located at the intersection of Eastern Europe and Western Asia",
    flag: "https://flagcdn.com/ge.svg",
  },
  {
    label: "Germany",
    value: "germany",
    description: "A country in Central Europe",
    flag: "https://flagcdn.com/de.svg",
  },
  {
    label: "Greece",
    value: "greece",
    description: "A country in Southeast Europe",
    flag: "https://flagcdn.com/gr.svg",
  },
  {
    label: "Hungary",
    value: "hungary",
    description: "A landlocked country in Central Europe",
    flag: "https://flagcdn.com/hu.svg",
  },
  {
    label: "Iceland",
    value: "iceland",
    description: "A Nordic island country in the North Atlantic",
    flag: "https://flagcdn.com/is.svg",
  },
  {
    label: "Ireland",
    value: "ireland",
    description: "An island in the North Atlantic",
    flag: "https://flagcdn.com/ie.svg",
  },
  {
    label: "Italy",
    value: "italy",
    description: "A country in Southern Europe",
    flag: "https://flagcdn.com/it.svg",
  },
  {
    label: "Kosovo",
    value: "kosovo",
    description: "A partially recognized state in Southeast Europe",
    flag: "https://flagcdn.com/xk.svg",
  },
  {
    label: "Latvia",
    value: "latvia",
    description: "A country in the Baltic region of Northern Europe",
    flag: "https://flagcdn.com/lv.svg",
  },
  {
    label: "Liechtenstein",
    value: "liechtenstein",
    description:
      "A German-speaking, 25km-long principality between Austria and Switzerland",
    flag: "https://flagcdn.com/li.svg",
  },
  {
    label: "Lithuania",
    value: "lithuania",
    description: "A country in the Baltic region of Europe",
    flag: "https://flagcdn.com/lt.svg",
  },
  {
    label: "Luxembourg",
    value: "luxembourg",
    description:
      "A small European country, surrounded by Belgium, France, and Germany",
    flag: "https://flagcdn.com/lu.svg",
  },
  {
    label: "Malta",
    value: "malta",
    description: "An archipelago in the central Mediterranean",
    flag: "https://flagcdn.com/mt.svg",
  },
  {
    label: "Moldova",
    value: "moldova",
    description: "A landlocked country in Eastern Europe",
    flag: "https://flagcdn.com/md.svg",
  },
  {
    label: "Monaco",
    value: "monaco",
    description:
      "A tiny independent city-state on France’s Mediterranean coastline",
    flag: "https://flagcdn.com/mc.svg",
  },
  {
    label: "Montenegro",
    value: "montenegro",
    description: "A country in Southeast Europe on the Adriatic Sea",
    flag: "https://flagcdn.com/me.svg",
  },
  {
    label: "Netherlands",
    value: "netherlands",
    description: "A country in Western Europe",
    flag: "https://flagcdn.com/nl.svg",
  },
  {
    label: "North Macedonia",
    value: "north_macedonia",
    description: "A country in Southeast Europe",
    flag: "https://flagcdn.com/mk.svg",
  },
  {
    label: "Norway",
    value: "norway",
    description: "A Nordic country in Northern Europe",
    flag: "https://flagcdn.com/no.svg",
  },
  {
    label: "Poland",
    value: "poland",
    description: "A country located in Central Europe",
    flag: "https://flagcdn.com/pl.svg",
  },
  {
    label: "Portugal",
    value: "portugal",
    description:
      "A country located on the Iberian Peninsula, in southwestern Europe",
    flag: "https://flagcdn.com/pt.svg",
  },
  {
    label: "Romania",
    value: "romania",
    description:
      "A country located at the crossroads of Central, Eastern, and Southeastern Europe",
    flag: "https://flagcdn.com/ro.svg",
  },
  {
    label: "Russia",
    value: "russia",
    description:
      "A transcontinental country spanning Eastern Europe and Northern Asia",
    flag: "https://flagcdn.com/ru.svg",
  },
  {
    label: "San Marino",
    value: "san_marino",
    description: "A mountainous microstate surrounded by north-central Italy",
    flag: "https://flagcdn.com/sm.svg",
  },
  {
    label: "Serbia",
    value: "serbia",
    description:
      "A country in Southeast Europe, situated at the crossroads of the Pannonian Plain and the Balkans",
    flag: "https://flagcdn.com/rs.svg",
  },
  {
    label: "Slovakia",
    value: "slovakia",
    description: "A landlocked country in Central Europe",
    flag: "https://flagcdn.com/sk.svg",
  },
  {
    label: "Slovenia",
    value: "slovenia",
    description: "A country in Central Europe",
    flag: "https://flagcdn.com/si.svg",
  },
  {
    label: "Spain",
    value: "spain",
    description: "A country on Europe’s Iberian Peninsula",
    flag: "https://flagcdn.com/es.svg",
  },
  {
    label: "Sweden",
    value: "sweden",
    description: "A Nordic country in Northern Europe",
    flag: "https://flagcdn.com/se.svg",
  },
  {
    label: "Switzerland",
    value: "switzerland",
    description: "A mountainous Central European country",
    flag: "https://flagcdn.com/ch.svg",
  },
  {
    label: "Turkey",
    value: "turkey",
    description:
      "A transcontinental country located mainly on the Anatolian Peninsula in Western Asia, with a smaller portion on the Balkan Peninsula in Southeastern Europe",
    flag: "https://flagcdn.com/tr.svg",
  },
  {
    label: "Ukraine",
    value: "ukraine",
    description: "A country in Eastern Europe",
    flag: "https://flagcdn.com/ua.svg",
  },
  {
    label: "United Kingdom",
    value: "united_kingdom",
    description:
      "A country in Europe, made up of England, Scotland, Wales, and Northern Ireland",
    flag: "https://flagcdn.com/gb.svg",
  },
  {
    label: "Vatican City",
    value: "vatican_city",
    description: "An independent city-state enclaved within Rome, Italy",
    flag: "https://flagcdn.com/va.svg",
  },

  // African countries
  {
    label: "Algeria",
    value: "algeria",
    description:
      "A North African country with a Mediterranean coastline and a Saharan desert interior",
    flag: "https://flagcdn.com/dz.svg",
  },
  {
    label: "Angola",
    value: "angola",
    description:
      "A Southern African nation with a varied terrain encompassing tropical Atlantic beaches, a labyrinthine system of rivers, and Sub-Saharan desert that extends across the border into Namibia",
    flag: "https://flagcdn.com/ao.svg",
  },
  {
    label: "Benin",
    value: "benin",
    description: "A country in West Africa, birthplace of the Vodun religion",
    flag: "https://flagcdn.com/bj.svg",
  },
  {
    label: "Botswana",
    value: "botswana",
    description:
      "A landlocked country in Southern Africa known for its diverse wildlife and national parks",
    flag: "https://flagcdn.com/bw.svg",
  },
  {
    label: "Burkina Faso",
    value: "burkina_faso",
    description: "A landlocked country in West Africa",
    flag: "https://flagcdn.com/bf.svg",
  },
  {
    label: "Burundi",
    value: "burundi",
    description:
      "A landlocked country in the African Great Lakes region of East Africa",
    flag: "https://flagcdn.com/bi.svg",
  },
  {
    label: "Cabo Verde",
    value: "cabo_verde",
    description: "An island country in the central Atlantic Ocean",
    flag: "https://flagcdn.com/cv.svg",
  },
  {
    label: "Cameroon",
    value: "cameroon",
    description: "A Central African country with varied terrain and wildlife",
    flag: "https://flagcdn.com/cm.svg",
  },
  {
    label: "Central African Republic",
    value: "central_african_republic",
    description: "A landlocked country in Central Africa",
    flag: "https://flagcdn.com/cf.svg",
  },
  {
    label: "Chad",
    value: "chad",
    description: "A landlocked country in North-Central Africa",
    flag: "https://flagcdn.com/td.svg",
  },
  {
    label: "Comoros",
    value: "comoros",
    description: "An archipelago island nation in the Indian Ocean",
    flag: "https://flagcdn.com/km.svg",
  },
  {
    label: "Democratic Republic of the Congo",
    value: "democratic_republic_of_the_congo",
    description: "A country located in Central Africa",
    flag: "https://flagcdn.com/cd.svg",
  },
  {
    label: "Djibouti",
    value: "djibouti",
    description: "A country located in the Horn of Africa",
    flag: "https://flagcdn.com/dj.svg",
  },
  {
    label: "Egypt",
    value: "egypt",
    description:
      "A transcontinental country spanning North Africa and the Middle East",
    flag: "https://flagcdn.com/eg.svg",
  },
  {
    label: "Equatorial Guinea",
    value: "equatorial_guinea",
    description:
      "A Central African country comprising the Rio Muni mainland and five volcanic offshore islands",
    flag: "https://flagcdn.com/gq.svg",
  },
  {
    label: "Eritrea",
    value: "eritrea",
    description: "A country in the Horn of Africa, located on the Red Sea",
    flag: "https://flagcdn.com/er.svg",
  },
  {
    label: "Eswatini",
    value: "eswatini",
    description: "A small, landlocked monarchy in Southern Africa",
    flag: "https://flagcdn.com/sz.svg",
  },
  {
    label: "Ethiopia",
    value: "ethiopia",
    description: "A landlocked country in the Horn of Africa",
    flag: "https://flagcdn.com/et.svg",
  },
  {
    label: "Gabon",
    value: "gabon",
    description: "A country on the west coast of Central Africa",
    flag: "https://flagcdn.com/ga.svg",
  },
  {
    label: "Gambia",
    value: "gambia",
    description: "A small West African country, surrounded by Senegal",
    flag: "https://flagcdn.com/gm.svg",
  },
  {
    label: "Ghana",
    value: "ghana",
    description: "A country in West Africa",
    flag: "https://flagcdn.com/gh.svg",
  },
  {
    label: "Guinea",
    value: "guinea",
    description:
      "A country in West Africa, known for its Mount Nimba Strict Nature Reserve",
    flag: "https://flagcdn.com/gn.svg",
  },
  {
    label: "Guinea-Bissau",
    value: "guinea_bissau",
    description: "A tropical country on West Africa’s Atlantic coast",
    flag: "https://flagcdn.com/gw.svg",
  },
  {
    label: "Ivory Coast",
    value: "ivory_coast",
    description:
      "A West African country with beach resorts, rainforests, and a French-colonial legacy",
    flag: "https://flagcdn.com/ci.svg",
  },
  {
    label: "Kenya",
    value: "kenya",
    description: "A country in East Africa with coastline on the Indian Ocean",
    flag: "https://flagcdn.com/ke.svg",
  },
  {
    label: "Lesotho",
    value: "lesotho",
    description:
      "A high-altitude, landlocked kingdom encircled by South Africa",
    flag: "https://flagcdn.com/ls.svg",
  },
  {
    label: "Liberia",
    value: "liberia",
    description: "A country in West Africa",
    flag: "https://flagcdn.com/lr.svg",
  },
  {
    label: "Libya",
    value: "libya",
    description: "A country in the Maghreb region in North Africa",
    flag: "https://flagcdn.com/ly.svg",
  },
  {
    label: "Madagascar",
    value: "madagascar",
    description:
      "An island country in the Indian Ocean, off the coast of Southeast Africa",
    flag: "https://flagcdn.com/mg.svg",
  },
  {
    label: "Malawi",
    value: "malawi",
    description: "A landlocked country in Southeastern Africa",
    flag: "https://flagcdn.com/mw.svg",
  },
  {
    label: "Mali",
    value: "mali",
    description: "A landlocked country in West Africa",
    flag: "https://flagcdn.com/ml.svg",
  },
  {
    label: "Mauritania",
    value: "mauritania",
    description: "A country in Northwest Africa",
    flag: "https://flagcdn.com/mr.svg",
  },
  {
    label: "Mauritius",
    value: "mauritius",
    description: "An island nation in the Indian Ocean",
    flag: "https://flagcdn.com/mu.svg",
  },
  {
    label: "Morocco",
    value: "morocco",
    description:
      "A North African country bordering the Atlantic Ocean and Mediterranean Sea",
    flag: "https://flagcdn.com/ma.svg",
  },
  {
    label: "Mozambique",
    value: "mozambique",
    description: "A Southern African nation with a long Indian Ocean coastline",
    flag: "https://flagcdn.com/mz.svg",
  },
  {
    label: "Namibia",
    value: "namibia",
    description: "A country in Southern Africa",
    flag: "https://flagcdn.com/na.svg",
  },
  {
    label: "Niger",
    value: "niger",
    description: "A landlocked country in West Africa",
    flag: "https://flagcdn.com/ne.svg",
  },
  {
    label: "Nigeria",
    value: "nigeria",
    description:
      "A country in West Africa, known for its diverse cultures and languages",
    flag: "https://flagcdn.com/ng.svg",
  },
  {
    label: "Republic of the Congo",
    value: "republic_of_the_congo",
    description: "A country in Central Africa",
    flag: "https://flagcdn.com/cg.svg",
  },
  {
    label: "Rwanda",
    value: "rwanda",
    description:
      "A landlocked East African country with a green, mountainous landscape",
    flag: "https://flagcdn.com/rw.svg",
  },
  {
    label: "São Tomé and Príncipe",
    value: "sao_tome_and_principe",
    description:
      "An island nation in the Gulf of Guinea, off the coast of Central Africa",
    flag: "https://flagcdn.com/st.svg",
  },
  {
    label: "Senegal",
    value: "senegal",
    description:
      "A country on Africa’s west coast with a rich French colonial heritage",
    flag: "https://flagcdn.com/sn.svg",
  },
  {
    label: "Seychelles",
    value: "seychelles",
    description:
      "An archipelago of 115 islands in the Indian Ocean, off East Africa",
    flag: "https://flagcdn.com/sc.svg",
  },
  {
    label: "Sierra Leone",
    value: "sierra_leone",
    description: "A West African country, on the Atlantic Ocean",
    flag: "https://flagcdn.com/sl.svg",
  },
  {
    label: "Somalia",
    value: "somalia",
    description: "A country located in the Horn of Africa",
    flag: "https://flagcdn.com/so.svg",
  },
  {
    label: "South Africa",
    value: "south_africa",
    description: "The southernmost country in Africa",
    flag: "https://flagcdn.com/za.svg",
  },
  {
    label: "South Sudan",
    value: "south_sudan",
    description: "A landlocked country in East-Central Africa",
    flag: "https://flagcdn.com/ss.svg",
  },
  {
    label: "Sudan",
    value: "sudan",
    description: "A country in Northeast Africa",
    flag: "https://flagcdn.com/sd.svg",
  },
  {
    label: "Tanzania",
    value: "tanzania",
    description: "An East African country known for its vast wilderness areas",
    flag: "https://flagcdn.com/tz.svg",
  },
  {
    label: "Togo",
    value: "togo",
    description: "A West African country with a palm-lined Atlantic coastline",
    flag: "https://flagcdn.com/tg.svg",
  },
  {
    label: "Tunisia",
    value: "tunisia",
    description:
      "A North African country bordering the Mediterranean Sea and the Sahara Desert",
    flag: "https://flagcdn.com/tn.svg",
  },
  {
    label: "Uganda",
    value: "uganda",
    description: "A landlocked country in East Africa",
    flag: "https://flagcdn.com/ug.svg",
  },
  {
    label: "Zambia",
    value: "zambia",
    description: "A landlocked country in Southern Africa",
    flag: "https://flagcdn.com/zm.svg",
  },
  {
    label: "Zimbabwe",
    value: "zimbabwe",
    description: "A landlocked country in Southern Africa",
    flag: "https://flagcdn.com/zw.svg",
  },

  // Asian countries
  {
    label: "Afghanistan",
    value: "afghanistan",
    description:
      "A landlocked country at the crossroads of Central and South Asia",
    flag: "https://flagcdn.com/af.svg",
  },
  {
    label: "Bahrain",
    value: "bahrain",
    description: "An island country in the Persian Gulf",
    flag: "https://flagcdn.com/bh.svg",
  },
  {
    label: "Bangladesh",
    value: "bangladesh",
    description:
      "A South Asian country marked by lush greenery and many waterways",
    flag: "https://flagcdn.com/bd.svg",
  },
  {
    label: "Bhutan",
    value: "bhutan",
    description: "A landlocked country in the Eastern Himalayas",
    flag: "https://flagcdn.com/bt.svg",
  },
  {
    label: "Brunei",
    value: "brunei",
    description:
      "A tiny nation on the island of Borneo, in two distinct sections surrounded by Malaysia and the South China Sea",
    flag: "https://flagcdn.com/bn.svg",
  },
  {
    label: "Cambodia",
    value: "cambodia",
    description:
      "A Southeast Asian nation whose landscape spans low-lying plains, the Mekong Delta, mountains, and Gulf of Thailand coastline",
    flag: "https://flagcdn.com/kh.svg",
  },
  {
    label: "China",
    value: "china",
    description:
      "A populous East Asian country with vast and diverse geography",
    flag: "https://flagcdn.com/cn.svg",
  },
  {
    label: "India",
    value: "india",
    description:
      "A South Asian country with diverse landscapes and cultural heritage",
    flag: "https://flagcdn.com/in.svg",
  },
  {
    label: "Indonesia",
    value: "indonesia",
    description:
      "A Southeast Asian country made up of thousands of volcanic islands",
    flag: "https://flagcdn.com/id.svg",
  },
  {
    label: "Iran",
    value: "iran",
    description: "A country in Western Asia",
    flag: "https://flagcdn.com/ir.svg",
  },
  {
    label: "Iraq",
    value: "iraq",
    description: "A country in Western Asia",
    flag: "https://flagcdn.com/iq.svg",
  },
  {
    label: "Israel",
    value: "israel",
    description: "A Middle Eastern country on the Mediterranean Sea",
    flag: "https://flagcdn.com/il.svg",
  },
  {
    label: "Japan",
    value: "japan",
    description: "An island nation in East Asia",
    flag: "https://flagcdn.com/jp.svg",
  },
  {
    label: "Jordan",
    value: "jordan",
    description:
      "A country in Western Asia, on the East Bank of the Jordan River",
    flag: "https://flagcdn.com/jo.svg",
  },
  {
    label: "Kazakhstan",
    value: "kazakhstan",
    description: "A transcontinental country mainly located in Central Asia",
    flag: "https://flagcdn.com/kz.svg",
  },
  {
    label: "Kuwait",
    value: "kuwait",
    description:
      "A country in Western Asia, situated in the northern edge of Eastern Arabia at the tip of the Persian Gulf",
    flag: "https://flagcdn.com/kw.svg",
  },
  {
    label: "Kyrgyzstan",
    value: "kyrgyzstan",
    description: "A landlocked country in Central Asia",
    flag: "https://flagcdn.com/kg.svg",
  },
  {
    label: "Laos",
    value: "laos",
    description:
      "A Southeast Asian country traversed by the Mekong River and known for its mountainous terrain",
    flag: "https://flagcdn.com/la.svg",
  },
  {
    label: "Lebanon",
    value: "lebanon",
    description: "A country in Western Asia, on the Mediterranean Sea",
    flag: "https://flagcdn.com/lb.svg",
  },
  {
    label: "Malaysia",
    value: "malaysia",
    description:
      "A Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo",
    flag: "https://flagcdn.com/my.svg",
  },
  {
    label: "Maldives",
    value: "maldives",
    description: "A tropical paradise in the Indian Ocean",
    flag: "https://flagcdn.com/mv.svg",
  },
  {
    label: "Mongolia",
    value: "mongolia",
    description: "A landlocked country in East Asia and Central Asia",
    flag: "https://flagcdn.com/mn.svg",
  },
  {
    label: "Myanmar",
    value: "myanmar",
    description: "A country in Southeast Asia",
    flag: "https://flagcdn.com/mm.svg",
  },
  {
    label: "Nepal",
    value: "nepal",
    description: "A landlocked country in South Asia, home to Mount Everest",
    flag: "https://flagcdn.com/np.svg",
  },
  {
    label: "North Korea",
    value: "north_korea",
    description:
      "A country in East Asia, constituting the northern part of the Korean Peninsula",
    flag: "https://flagcdn.com/kp.svg",
  },
  {
    label: "Oman",
    value: "oman",
    description:
      "A country on the southeastern coast of the Arabian Peninsula in Western Asia",
    flag: "https://flagcdn.com/om.svg",
  },
  {
    label: "Pakistan",
    value: "pakistan",
    description: "A country in South Asia",
    flag: "https://flagcdn.com/pk.svg",
  },
  {
    label: "Palestine",
    value: "palestine",
    description: "A de jure sovereign state in Western Asia",
    flag: "https://flagcdn.com/ps.svg",
  },
  {
    label: "Philippines",
    value: "philippines",
    description: "An archipelagic country in Southeast Asia",
    flag: "https://flagcdn.com/ph.svg",
  },
  {
    label: "Qatar",
    value: "qatar",
    description:
      "A peninsular Arab country whose terrain comprises arid desert and a long Persian (Arab) Gulf shoreline of beaches and dunes",
    flag: "https://flagcdn.com/qa.svg",
  },
  {
    label: "Saudi Arabia",
    value: "saudi_arabia",
    description:
      "A desert country encompassing most of the Arabian Peninsula, with Red Sea and Persian (Arabian) Gulf coastlines",
    flag: "https://flagcdn.com/sa.svg",
  },
  {
    label: "Singapore",
    value: "singapore",
    description: "A global financial hub in Southeast Asia",
    flag: "https://flagcdn.com/sg.svg",
  },
  {
    label: "South Korea",
    value: "south_korea",
    description:
      "A country in East Asia, constituting the southern part of the Korean Peninsula",
    flag: "https://flagcdn.com/kr.svg",
  },
  {
    label: "Sri Lanka",
    value: "sri_lanka",
    description: "An island country in South Asia, located in the Indian Ocean",
    flag: "https://flagcdn.com/lk.svg",
  },
  {
    label: "Syria",
    value: "syria",
    description: "A country in Western Asia",
    flag: "https://flagcdn.com/sy.svg",
  },
  {
    label: "Taiwan",
    value: "taiwan",
    description:
      "An island in East Asia, at the junction of the East and South China Seas",
    flag: "https://flagcdn.com/tw.svg",
  },
  {
    label: "Tajikistan",
    value: "tajikistan",
    description: "A mountainous, landlocked country in Central Asia",
    flag: "https://flagcdn.com/tj.svg",
  },
  {
    label: "Thailand",
    value: "thailand",
    description:
      "A Southeast Asian country known for its tropical beaches, opulent royal palaces, ancient ruins, and ornate temples",
    flag: "https://flagcdn.com/th.svg",
  },
  {
    label: "Timor-Leste",
    value: "timor_leste",
    description: "A Southeast Asian nation occupying half the island of Timor",
    flag: "https://flagcdn.com/tl.svg",
  },
  {
    label: "Turkmenistan",
    value: "turkmenistan",
    description: "A country in Central Asia",
    flag: "https://flagcdn.com/tm.svg",
  },
  {
    label: "United Arab Emirates",
    value: "united_arab_emirates",
    description: "A country in Western Asia",
    flag: "https://flagcdn.com/ae.svg",
  },
  {
    label: "Uzbekistan",
    value: "uzbekistan",
    description: "A Central Asian nation and former Soviet republic",
    flag: "https://flagcdn.com/uz.svg",
  },
  {
    label: "Vietnam",
    value: "vietnam",
    description:
      "A Southeast Asian country known for its beaches, rivers, Buddhist pagodas, and bustling cities",
    flag: "https://flagcdn.com/vn.svg",
  },
  {
    label: "Yemen",
    value: "yemen",
    description:
      "A country at the southern end of the Arabian Peninsula in Western Asia",
    flag: "https://flagcdn.com/ye.svg",
  },

  // Oceanian countries
  {
    label: "Australia",
    value: "australia",
    description:
      "A country and continent surrounded by the Indian and Pacific oceans",
    flag: "https://flagcdn.com/au.svg",
  },
  {
    label: "Fiji",
    value: "fiji",
    description: "An archipelago of more than 300 islands in the South Pacific",
    flag: "https://flagcdn.com/fj.svg",
  },
  {
    label: "Kiribati",
    value: "kiribati",
    description: "An island nation in the central Pacific Ocean",
    flag: "https://flagcdn.com/ki.svg",
  },
  {
    label: "Marshall Islands",
    value: "marshall_islands",
    description: "An island country near the equator in the Pacific Ocean",
    flag: "https://flagcdn.com/mh.svg",
  },
  {
    label: "Micronesia",
    value: "micronesia",
    description:
      "A subregion of Oceania, composed of thousands of small islands in the western Pacific Ocean",
    flag: "https://flagcdn.com/fm.svg",
  },
  {
    label: "Nauru",
    value: "nauru",
    description: "A tiny island country in Micronesia",
    flag: "https://flagcdn.com/nr.svg",
  },
  {
    label: "New Zealand",
    value: "new_zealand",
    description: "A country in the southwestern Pacific Ocean",
    flag: "https://flagcdn.com/nz.svg",
  },
  {
    label: "Palau",
    value: "palau",
    description:
      "An archipelago of over 500 islands, part of the Micronesia region in the western Pacific Ocean",
    flag: "https://flagcdn.com/pw.svg",
  },
  {
    label: "Papua New Guinea",
    value: "papua_new_guinea",
    description:
      "A country in Oceania, occupying the eastern half of the island of New Guinea",
    flag: "https://flagcdn.com/pg.svg",
  },
  {
    label: "Samoa",
    value: "samoa",
    description: "A country in the central South Pacific",
    flag: "https://flagcdn.com/ws.svg",
  },
  {
    label: "Solomon Islands",
    value: "solomon_islands",
    description: "A nation of hundreds of islands in the South Pacific",
    flag: "https://flagcdn.com/sb.svg",
  },
  {
    label: "Tonga",
    value: "tonga",
    description: "A Polynesian kingdom of more than 170 South Pacific islands",
    flag: "https://flagcdn.com/to.svg",
  },
  {
    label: "Tuvalu",
    value: "tuvalu",
    description: "A tiny island nation in the South Pacific",
    flag: "https://flagcdn.com/tv.svg",
  },
  {
    label: "Vanuatu",
    value: "vanuatu",
    description: "A South Pacific Ocean nation made up of roughly 80 islands",
    flag: "https://flagcdn.com/vu.svg",
  },

  // North American countries
  {
    label: "Antigua and Barbuda",
    value: "antigua_and_barbuda",
    description:
      "An independent Commonwealth country comprising its two namesake islands and several smaller ones",
    flag: "https://flagcdn.com/ag.svg",
  },
  {
    label: "Bahamas",
    value: "bahamas",
    description: "A Caribbean country with more than 700 islands and cays",
    flag: "https://flagcdn.com/bs.svg",
  },
  {
    label: "Barbados",
    value: "barbados",
    description:
      "An eastern Caribbean island and an independent British Commonwealth nation",
    flag: "https://flagcdn.com/bb.svg",
  },
  {
    label: "Belize",
    value: "belize",
    description:
      "A nation on the eastern coast of Central America, with Caribbean Sea shorelines to the east and dense jungle to the west",
    flag: "https://flagcdn.com/bz.svg",
  },
  {
    label: "Canada",
    value: "canada",
    description:
      "A North American country stretching from the U.S. in the south to the Arctic Circle in the north",
    flag: "https://flagcdn.com/ca.svg",
  },
  {
    label: "Costa Rica",
    value: "costa_rica",
    description:
      "A rugged, rainforested Central American country with coastlines on the Caribbean and Pacific",
    flag: "https://flagcdn.com/cr.svg",
  },
  {
    label: "Cuba",
    value: "cuba",
    description: "The largest island in the Caribbean",
    flag: "https://flagcdn.com/cu.svg",
  },
  {
    label: "Dominica",
    value: "dominica",
    description:
      "A mountainous Caribbean island nation with natural hot springs and tropical rainforests",
    flag: "https://flagcdn.com/dm.svg",
  },
  {
    label: "Dominican Republic",
    value: "dominican_republic",
    description:
      "A Caribbean nation that shares the island of Hispaniola with Haiti",
    flag: "https://flagcdn.com/do.svg",
  },
  {
    label: "El Salvador",
    value: "el_salvador",
    description:
      "A Central American country known for its Pacific Ocean beaches",
    flag: "https://flagcdn.com/sv.svg",
  },
  {
    label: "Grenada",
    value: "grenada",
    description:
      "A Caribbean country comprising a main island and smaller surrounding islands",
    flag: "https://flagcdn.com/gd.svg",
  },
  {
    label: "Guatemala",
    value: "guatemala",
    description:
      "A Central American country south of Mexico, with volcanoes, rainforests, and ancient Mayan sites",
    flag: "https://flagcdn.com/gt.svg",
  },
  {
    label: "Haiti",
    value: "haiti",
    description:
      "A Caribbean country that shares the island of Hispaniola with the Dominican Republic to its east",
    flag: "https://flagcdn.com/ht.svg",
  },
  {
    label: "Honduras",
    value: "honduras",
    description:
      "A Central American country with Caribbean Sea coastlines to the north and the Pacific Ocean to the south",
    flag: "https://flagcdn.com/hn.svg",
  },
  {
    label: "Jamaica",
    value: "jamaica",
    description:
      "A Caribbean island nation, with a lush topography of mountains, rainforests, and reef-lined beaches",
    flag: "https://flagcdn.com/jm.svg",
  },
  {
    label: "Mexico",
    value: "mexico",
    description: "A country in the southern portion of North America",
    flag: "https://flagcdn.com/mx.svg",
  },
  {
    label: "Nicaragua",
    value: "nicaragua",
    description:
      "A Central American nation known for its dramatic terrain of lakes, volcanoes, and beaches",
    flag: "https://flagcdn.com/ni.svg",
  },
  {
    label: "Panama",
    value: "panama",
    description: "A country on the isthmus linking Central and South America",
    flag: "https://flagcdn.com/pa.svg",
  },
  {
    label: "Saint Kitts and Nevis",
    value: "saint_kitts_and_nevis",
    description:
      "A dual-island nation situated between the Atlantic Ocean and Caribbean Sea",
    flag: "https://flagcdn.com/kn.svg",
  },
  {
    label: "Saint Lucia",
    value: "saint_lucia",
    description:
      "An Eastern Caribbean island nation with a pair of dramatically tapered mountains, the Pitons",
    flag: "https://flagcdn.com/lc.svg",
  },
  {
    label: "Saint Vincent and the Grenadines",
    value: "saint_vincent_and_the_grenadines",
    description:
      "A southern Caribbean nation comprising a main island, Saint Vincent, and a chain of smaller islands",
    flag: "https://flagcdn.com/vc.svg",
  },
  {
    label: "Trinidad and Tobago",
    value: "trinidad_and_tobago",
    description:
      "A dual-island Caribbean nation near Venezuela, with distinctive Creole traditions and cuisines",
    flag: "https://flagcdn.com/tt.svg",
  },
  {
    label: "United States",
    value: "united_states",
    description:
      "A country of 50 states covering a vast swath of North America",
    flag: "https://flagcdn.com/us.svg",
  },

  // South American countries
  {
    label: "Argentina",
    value: "argentina",
    description: "A country in the southern half of South America",
    flag: "https://flagcdn.com/ar.svg",
  },
  {
    label: "Bolivia",
    value: "bolivia",
    description: "A landlocked country in central South America",
    flag: "https://flagcdn.com/bo.svg",
  },
  {
    label: "Brazil",
    value: "brazil",
    description: "The largest country in both South America and Latin America",
    flag: "https://flagcdn.com/br.svg",
  },
  {
    label: "Chile",
    value: "chile",
    description:
      "A long, narrow country stretching along South America's western edge",
    flag: "https://flagcdn.com/cl.svg",
  },
  {
    label: "Colombia",
    value: "colombia",
    description: "A country at the northern tip of South America",
    flag: "https://flagcdn.com/co.svg",
  },
  {
    label: "Ecuador",
    value: "ecuador",
    description:
      "A country straddling the equator on South America's west coast",
    flag: "https://flagcdn.com/ec.svg",
  },
  {
    label: "Guyana",
    value: "guyana",
    description: "A country on South America's North Atlantic coast",
    flag: "https://flagcdn.com/gy.svg",
  },
  {
    label: "Paraguay",
    value: "paraguay",
    description: "A landlocked country between Argentina, Brazil, and Bolivia",
    flag: "https://flagcdn.com/py.svg",
  },
  {
    label: "Peru",
    value: "peru",
    description: "A country in western South America",
    flag: "https://flagcdn.com/pe.svg",
  },
  {
    label: "Suriname",
    value: "suriname",
    description: "A small country on the northeastern coast of South America",
    flag: "https://flagcdn.com/sr.svg",
  },
  {
    label: "Uruguay",
    value: "uruguay",
    description:
      "A South American country known for its verdant interior and beach-lined coast",
    flag: "https://flagcdn.com/uy.svg",
  },
  {
    label: "Venezuela",
    value: "venezuela",
    description: "A country on the northern coast of South America",
    flag: "https://flagcdn.com/ve.svg",
  },
];

export const europeanCountries = [
  {
    label: "Albania",
    value: "albania",
    description:
      "A country in Southeast Europe on the Adriatic and Ionian Sea within the Mediterranean Sea",
    flag: "https://flagcdn.com/al.svg",
  },
  {
    label: "Andorra",
    value: "andorra",
    description: "A small, landlocked country in the Pyrenees mountains",
    flag: "https://flagcdn.com/ad.svg",
  },
  {
    label: "Armenia",
    value: "armenia",
    description: "A country located in the South Caucasus region of Eurasia",
    flag: "https://flagcdn.com/am.svg",
  },
  {
    label: "Austria",
    value: "austria",
    description:
      "A landlocked East Alpine country in the southern part of Central Europe",
    flag: "https://flagcdn.com/at.svg",
  },
  {
    label: "Azerbaijan",
    value: "azerbaijan",
    description:
      "A country in the South Caucasus region of Eurasia at the crossroads of Eastern Europe and Western Asia",
    flag: "https://flagcdn.com/az.svg",
  },
  {
    label: "Belarus",
    value: "belarus",
    description: "A landlocked country in Eastern Europe",
    flag: "https://flagcdn.com/by.svg",
  },
  {
    label: "Belgium",
    value: "belgium",
    description: "A country in Western Europe",
    flag: "https://flagcdn.com/be.svg",
  },
  {
    label: "Bosnia and Herzegovina",
    value: "bosnia_and_herzegovina",
    description: "A country on the Balkan Peninsula in southeastern Europe",
    flag: "https://flagcdn.com/ba.svg",
  },
  {
    label: "Bulgaria",
    value: "bulgaria",
    description: "A country in Southeast Europe",
    flag: "https://flagcdn.com/bg.svg",
  },
  {
    label: "Croatia",
    value: "croatia",
    description: "A country at the crossroads of Central and Southeast Europe",
    flag: "https://flagcdn.com/hr.svg",
  },
  {
    label: "Cyprus",
    value: "cyprus",
    description: "An island country in the Eastern Mediterranean",
    flag: "https://flagcdn.com/cy.svg",
  },
  {
    label: "Czech Republic",
    value: "czech_republic",
    description: "A landlocked country in Central Europe",
    flag: "https://flagcdn.com/cz.svg",
  },
  {
    label: "Denmark",
    value: "denmark",
    description: "A Nordic country in Northern Europe",
    flag: "https://flagcdn.com/dk.svg",
  },
  {
    label: "Estonia",
    value: "estonia",
    description: "A country in Northern Europe",
    flag: "https://flagcdn.com/ee.svg",
  },
  {
    label: "Finland",
    value: "finland",
    description: "A Nordic country in Northern Europe",
    flag: "https://flagcdn.com/fi.svg",
  },
  {
    label: "France",
    value: "france",
    description: "A country in Western Europe",
    flag: "https://flagcdn.com/fr.svg",
  },
  {
    label: "Georgia",
    value: "georgia",
    description:
      "A country located at the intersection of Eastern Europe and Western Asia",
    flag: "https://flagcdn.com/ge.svg",
  },
  {
    label: "Germany",
    value: "germany",
    description: "A country in Central Europe",
    flag: "https://flagcdn.com/de.svg",
  },
  {
    label: "Greece",
    value: "greece",
    description: "A country in Southeast Europe",
    flag: "https://flagcdn.com/gr.svg",
  },
  {
    label: "Hungary",
    value: "hungary",
    description: "A landlocked country in Central Europe",
    flag: "https://flagcdn.com/hu.svg",
  },
  {
    label: "Iceland",
    value: "iceland",
    description: "A Nordic island country in the North Atlantic",
    flag: "https://flagcdn.com/is.svg",
  },
  {
    label: "Ireland",
    value: "ireland",
    description: "An island in the North Atlantic",
    flag: "https://flagcdn.com/ie.svg",
  },
  {
    label: "Italy",
    value: "italy",
    description: "A country in Southern Europe",
    flag: "https://flagcdn.com/it.svg",
  },
  {
    label: "Kosovo",
    value: "kosovo",
    description: "A partially recognized state in Southeast Europe",
    flag: "https://flagcdn.com/xk.svg",
  },
  {
    label: "Latvia",
    value: "latvia",
    description: "A country in the Baltic region of Northern Europe",
    flag: "https://flagcdn.com/lv.svg",
  },
  {
    label: "Liechtenstein",
    value: "liechtenstein",
    description:
      "A German-speaking, 25km-long principality between Austria and Switzerland",
    flag: "https://flagcdn.com/li.svg",
  },
  {
    label: "Lithuania",
    value: "lithuania",
    description: "A country in the Baltic region of Europe",
    flag: "https://flagcdn.com/lt.svg",
  },
  {
    label: "Luxembourg",
    value: "luxembourg",
    description:
      "A small European country, surrounded by Belgium, France, and Germany",
    flag: "https://flagcdn.com/lu.svg",
  },
  {
    label: "Malta",
    value: "malta",
    description: "An archipelago in the central Mediterranean",
    flag: "https://flagcdn.com/mt.svg",
  },
  {
    label: "Moldova",
    value: "moldova",
    description: "A landlocked country in Eastern Europe",
    flag: "https://flagcdn.com/md.svg",
  },
  {
    label: "Monaco",
    value: "monaco",
    description:
      "A tiny independent city-state on France’s Mediterranean coastline",
    flag: "https://flagcdn.com/mc.svg",
  },
  {
    label: "Montenegro",
    value: "montenegro",
    description: "A country in Southeast Europe on the Adriatic Sea",
    flag: "https://flagcdn.com/me.svg",
  },
  {
    label: "Netherlands",
    value: "netherlands",
    description: "A country in Western Europe",
    flag: "https://flagcdn.com/nl.svg",
  },
  {
    label: "North Macedonia",
    value: "north_macedonia",
    description: "A country in Southeast Europe",
    flag: "https://flagcdn.com/mk.svg",
  },
  {
    label: "Norway",
    value: "norway",
    description: "A Nordic country in Northern Europe",
    flag: "https://flagcdn.com/no.svg",
  },
  {
    label: "Poland",
    value: "poland",
    description: "A country located in Central Europe",
    flag: "https://flagcdn.com/pl.svg",
  },
  {
    label: "Portugal",
    value: "portugal",
    description:
      "A country located on the Iberian Peninsula, in southwestern Europe",
    flag: "https://flagcdn.com/pt.svg",
  },
  {
    label: "Romania",
    value: "romania",
    description:
      "A country located at the crossroads of Central, Eastern, and Southeastern Europe",
    flag: "https://flagcdn.com/ro.svg",
  },
  {
    label: "Russia",
    value: "russia",
    description:
      "A transcontinental country spanning Eastern Europe and Northern Asia",
    flag: "https://flagcdn.com/ru.svg",
  },
  {
    label: "San Marino",
    value: "san_marino",
    description: "A mountainous microstate surrounded by north-central Italy",
    flag: "https://flagcdn.com/sm.svg",
  },
  {
    label: "Serbia",
    value: "serbia",
    description:
      "A country in Southeast Europe, situated at the crossroads of the Pannonian Plain and the Balkans",
    flag: "https://flagcdn.com/rs.svg",
  },
  {
    label: "Slovakia",
    value: "slovakia",
    description: "A landlocked country in Central Europe",
    flag: "https://flagcdn.com/sk.svg",
  },
  {
    label: "Slovenia",
    value: "slovenia",
    description: "A country in Central Europe",
    flag: "https://flagcdn.com/si.svg",
  },
  {
    label: "Spain",
    value: "spain",
    description: "A country on Europe’s Iberian Peninsula",
    flag: "https://flagcdn.com/es.svg",
  },
  {
    label: "Sweden",
    value: "sweden",
    description: "A Nordic country in Northern Europe",
    flag: "https://flagcdn.com/se.svg",
  },
  {
    label: "Switzerland",
    value: "switzerland",
    description: "A mountainous Central European country",
    flag: "https://flagcdn.com/ch.svg",
  },
  {
    label: "Turkey",
    value: "turkey",
    description:
      "A transcontinental country located mainly on the Anatolian Peninsula in Western Asia, with a smaller portion on the Balkan Peninsula in Southeastern Europe",
    flag: "https://flagcdn.com/tr.svg",
  },
  {
    label: "Ukraine",
    value: "ukraine",
    description: "A country in Eastern Europe",
    flag: "https://flagcdn.com/ua.svg",
  },
  {
    label: "United Kingdom",
    value: "united_kingdom",
    description:
      "A country in Europe, made up of England, Scotland, Wales, and Northern Ireland",
    flag: "https://flagcdn.com/gb.svg",
  },
  {
    label: "Vatican City",
    value: "vatican_city",
    description: "An independent city-state enclaved within Rome, Italy",
    flag: "https://flagcdn.com/va.svg",
  },
];
