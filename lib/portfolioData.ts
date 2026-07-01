interface ProjectDetails {
  challenge: string;
  solution: string;
  features: string[];
  images: string[];
  video?: string;
}

export interface PortfolioProject {
  id: number;
  slug: string;
  title: string;
  category: string;
  image: string;
  imageAlt?: string;
  description: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
  details: ProjectDetails;
}

export const portfolioData: PortfolioProject[] = [
  {
  id: 30,
  slug: "klam",
  title: "Klam",
  category: "",
  image: "/images/klam/klam.webp", // add a screenshot URL before publishing
  imageAlt: "Klam video-first dating app marketing website homepage",
  description:
    "Marketing website for Klam, a video-first dating app built for genuine connections. Safety-focused, fully accessible (WCAG 2.2 AA), and optimised for Core Web Vitals.",
  technologies: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
  ],
  liveLink: "https://klam-dating-website.vercel.app",
  githubLink: "",
  details: {
    video: "",
    challenge:
      "Build a high-performance, SEO-optimised marketing site for a pre-launch dating app that communicates trust and safety to potential users while meeting WCAG 2.2 AA accessibility standards.",
    solution:
      "Built a Next.js 15 App Router site with all marketing copy centralised in a single config file, self-hosted fonts via next/font, and server components by default - achieving strong Core Web Vitals scores, full accessibility compliance, and easy content updates without touching component code.",
    features: [
      "Video-first dating concept showcase with a step-by-step how-it-works flow",
      "Feature grid highlighting safety, verified profiles, and mutual-consent video calls",
      "WCAG 2.2 AA accessible components: keyboard-navigable FAQ accordion, skip-to-content link, and responsive mobile menu",
      "Centralised content config for zero-code marketing copy updates",
      "Dynamic sitemap.xml and robots.txt generation for SEO",
      "JSON-LD structured data: Organization, MobileApplication, and FAQPage schemas",
      "Core Web Vitals RUM instrumentation via web-vitals library",
      "PWA manifest with full favicon and Open Graph image asset pipeline",
    ],
    images: [
      "/images/klam/klam-1.png",
      "/images/klam/klam-2.png",
      "/images/klam/klam-3.png",
      "/images/klam/klam-4.png",
    ],
  },
},
  {
  id: 29,
  slug: "amplifly",
  title: "Amplifly",
  category: "Coming Soon",
  image: "/images/amplifly/amplifly.jpg",
  imageAlt: "Amplifly influencer intelligence dashboard showing trend radar, engagement scores, and creator network map",
  description:
    "AI-powered influencer intelligence and trend forecasting platform for marketing agencies to score creator authenticity, track cross-platform trends, map influencer networks, and generate weekly client briefs.",
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "TailwindCSS",
    "Node.js",
    "PostgreSQL",
    "Redis",
    "Neo4j",
    "Python",
    "NextAuth",
    "Prisma",
    "Recharts",
    "Docker",
  ],
  liveLink: "https://amplifly-waiting-list.vercel.app/",
  githubLink: "",
  details: {
    video: "",
    challenge:
      "Marketing agencies waste hours manually vetting influencers, chasing trends that are already saturated, and compiling client reports from scattered data - with no reliable way to detect fake engagement or map how creators are connected.",
    solution:
      "Built a full-stack platform that scores influencer authenticity using engagement pattern analysis, forecasts trend lifecycles across YouTube, Reddit, and Google Trends, visualises creator networks as a force-directed graph, and generates AI-powered weekly client briefs with one click.",
    features: [
      "Influencer scoring engine with Engagement Quality and Authenticity Risk scores out of 100",
      "Cross-platform trend radar classifying topics as Emerging, Rising, Saturated, or Declining",
      "Interactive network map showing creator clusters, audience overlap, and collaboration signals",
      "Seed and satellite creator bundle recommendations for maximum reach with minimal overlap",
      "AI-generated weekly client briefs with executive summary, action items, and outreach angles",
      "Data connectors for YouTube API, Reddit API, Google Trends, Pinterest API, and CSV import",
      "Data source capability matrix documenting what each connector can and cannot access",
      "Pluggable AI summary providers - Ollama for local free usage, GroqCloud, or OpenRouter",
      "Encrypted API key storage, audit logging, and multi-client workspace support",
    ],
    images: [
      "/images/amplifly/amplifly-1.png",
      "/images/amplifly/amplifly-2.png",
      "/images/amplifly/amplifly-3.png",
      "/images/amplifly/amplifly-4.png"
    ],
  },
},
  {
    id: 28,
    slug: "hiddenwave",
    title: "HiddenWave",
    category: "Coming Soon",
    image:
      "/images/hiddenwave/hiddenwave.jpg",
    imageAlt:
      "HiddenWave music discovery dashboard showing hidden gem artists matched to your Spotify taste",
    description:
      "Spotify-powered music discovery platform that analyses your listening habits to surface hidden gem artists, emerging talent, and underground music the mainstream algorithm misses.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Spotify Web API",
      "OAuth 2.0",
      "Node.js",
    ],
    liveLink: "",
    githubLink: "https://github.com/MPDeSilva/HiddenWave",
    details: {
      video: "",
      challenge:
        "Spotify's algorithm promotes popular, well-known artists while burying underground and emerging talent. Listeners who want to discover genuinely new music are stuck in recommendation loops of the same mainstream acts.",
      solution:
        "Built a taste-analysis engine that reads your Spotify listening data - top artists, tracks, genres, and play history - then searches for lesser-known artists in your favourite genres, scoring them by genre overlap, popularity, and follower count to surface music you'd never find on Discover Weekly.",
      features: [
        "Spotify OAuth login with automatic token refresh",
        "AI-style taste profile with generated listening identity summary",
        "Genre-based mood detection derived from your top genres",
        "Popularity bias and listening diversity scoring",
        "Top artists grid and top tracks list pulled from your Spotify data",
        "Search-based artist discovery across your top 8 genres",
        "Four discovery categories: Hidden Gems, Emerging Wave, Deep Match, Off Radar",
        "Generated artist bios based on genre, popularity tier, and follower data",
        "Follow artists and open in Spotify directly from the app",
        "Share your discovery stats with friends",
      ],
      images: [
        "/images/hiddenwave/hiddenwave-1.png",
        "/images/hiddenwave/hiddenwave-2.png",
        "/images/hiddenwave/hiddenwave-3.png",
      ],
    },
  },
  {
    id: 27,
    slug: "kindkondr",
    title: "KindKonDr",
    category: "Coming Soon",
    image:
      "https://neshealthcare.co.uk/wp-content/uploads/2018/02/Working-with-NES.jpg",
    imageAlt:
      "KindKonDr elderly patient care coordination dashboard for hospital teams",
    description:
      "Healthcare coordination platform prototype for UK hospitals to track elderly patients, assign social workers, and prevent vulnerable patients being lost in fragmented systems.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Firebase Auth",
      "Mapbox",
      "Google Maps API",
    ],
    liveLink: "https://kind-kon-dr.vercel.app/login",
    githubLink: "",
    details: {
      video: "",
      challenge:
        "Replace ad-hoc spreadsheets and disconnected tools used by NHS teams to track vulnerable elderly patients, where incomplete data and poor assignment visibility can cause delays in care.",
      solution:
        "Designed a role-based web app where doctors, social workers, and patients share a single source of truth for patient records, assignments, and history, with proximity-based worker matching and transparent status tracking.",
      features: [
        "Hospital workspaces for managing elderly patients",
        "Live dashboard table with status, assignments, and alerts",
        "Role-based views for doctors, social workers, and patients",
        "Patient profile pages with notes, documents, and history",
        "Location-based matching of social workers to patients",
        "Audit trail of assignments, gaps, and reassignments",
        "Secure authentication and access control for all roles",
      ],
      images: [
        "/images/kindkondr/kkd-1.png",
        "/images/kindkondr/kkd-2.png",
        "/images/kindkondr/kkd-3.png",
        "/images/kindkondr/kkd-4.png",
        "/images/kindkondr/kkd-5.png",
      ],
    },
  },
  {
    id: 26,
    slug: "travel-planner",
    title: "Travel Planner",
    category: "",
    image: "/images/travel-planner/travel-planner-main.webp",
    imageAlt: "Travel Planner app with map and trip timeline interface",
    description:
      "Fullstack travel planner web app where users create trips, add locations, and visualise journeys on an interactive map and 3D globe.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Neon PostgreSQL",
      "Google Maps",
      "TailwindCSS",
      "NextAuth",
    ],
    liveLink: "https://travel-planner-rosy.vercel.app/", 
    githubLink: "https://github.com/MPDeSilva/Travel-Planner",
    details: {
      video: "",
      challenge:
        "Design an end-to-end travel planner that persists user trips, locations, and itineraries while keeping the interface intuitive and visually rich.",
      solution:
        "Built authenticated trip dashboards backed by Neon PostgreSQL via Prisma, allowing users to create trips, attach locations, and visualise routes on embedded Google Maps and globe experiences.",
      features: [
        "User authentication and personal trip dashboards",
        "Create, edit, and delete trips with rich metadata",
        "Add locations to trips with map-based visualisation",
        "Interactive drag-and-drop itinerary ordering",
        "Map and 3D globe views for travel history",
        "Responsive layout optimised for desktop and mobile",
      ],
      images: [
        "/images/travel-planner/travel-1.png",
        "/images/travel-planner/travel-2.png",
        "/images/travel-planner/travel-3.png",
      ],
    },
  },
  {
    id: 25,
    slug: "mello-trello-clone",
    title: "Mello",
    category: "",
    image:
      "https://www.teamplate.io/wp-content/uploads/2024/12/shutterstock_2289836763-1.jpg",
    imageAlt: "Mello Trello-style project management board UI",
    description:
      "Fullstack Trello-style project management app with drag-and-drop boards, authentication, dashboards, and billing, built as a modern task workflow clone.",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Supabase",
      "TailwindCSS",
      "ShadCN UI",
      "Stripe",
      "Clerk",
    ],
    liveLink: "https://mello-navy.vercel.app/",
    githubLink: "https://github.com/MPDeSilva/Mello",
    details: {
      video: "",
      challenge:
        "Build a modern Trello-style board app with real authentication, drag-and-drop task management, and paid upgrade paths to showcase fullstack product skills.",
      solution:
        "Implemented an authenticated dashboard where users manage boards, lists, and tasks using Supabase for data, Clerk for auth, Stripe for billing, and drag-and-drop for an intuitive Kanban experience.",
      features: [
        "Authenticated user dashboard with boards overview",
        "Kanban boards with drag-and-drop columns and tasks",
        "Board and task creation, editing, and filtering",
        "Role-based access via auth provider",
        "Usage limits and upgrade flow with Stripe",
        "Responsive, modern UI with TailwindCSS and ShadCN UI",
      ],
      images: [
        "/images/mello/mello-1.png",
        "/images/mello/mello-2.png",
        "/images/mello/mello-3.png",
        "/images/mello/mello-4.png",
      ],
    },
  },
  {
    id: 24,
    slug: "northern-data",
    title: "Northern Data",
    category: "",
    image:
      "/images/northern-data/northern-main.jpeg",
    imageAlt: "Northern Data's Glass Hermit Campaign Showcase",
    description:
      "Led full rebuild of Northern Data Group’s main business site and web digital campaigns, elevating their digital presence and engagement.",
    technologies: [
      "HubSpot",
      "HUBL",
      "HTML",
      "JavaScript",
      "TailwindCSS",
      "CSS",
      "SASS",
      "Gulp",
      "Google Analytics",
    ],
    liveLink: "https://northerndata.de/",
    githubLink: "",
    details: {
      video: "https://www.youtube.com/watch?v=2rxhunVvlBk",
      challenge:
        "Modernizing, optimizing, and scaling a digital presence for advanced data solutions, while supporting rapid campaign launches.",
      solution:
        "Engineered and managed the site, landing pages, and digital web campaign assets (such as AI Accelerator program, Glass Hermit campaign), A/B tested, captured forms, and improved SEO/AIO. Managed analytics with HubSpot and Google.",
      features: [
        "Site & rebrand rebuild",
        "Animated multimedia content",
        "Campaign and landing pages",
        "Optimized SEO/AIO scores",
        "Integrated forms and automation",
        "Email marketing flows",
        "A/B testing and analytics",
        "HubSpot CMS & reporting",
      ],
      images: [
        "https://i0.wp.com/motionographer.com/wp-content/uploads/2024/12/Still_1-scaled.jpg?w=1700&quality=89&ssl=1",
        "/images/northern-data/nd-5.png",
        "https://i0.wp.com/motionographer.com/wp-content/uploads/2024/12/still_3_opt_2-scaled.jpg?w=1700&quality=89&ssl=1",
        "/images/northern-data/nd-4.png",
        "/images/northern-data/nd-2.png",
        "/images/northern-data/nd-7.png",
        "https://ascentialcdn.filespin.io/api/v1/conversion/72116f203165451eafe4df2036b6f429",
        "/images/northern-data/nd-1.png",
        "/images/northern-data/nd-6.png",
        "/images/northern-data/nd-3.png",
        "/images/northern-data/nd-8.png",
        "/images/northern-data/nd-9.png",
      ],
    },
  },
  {
    id: 23,
    slug: "ardent-data-centers",
    title: "Ardent Data Centers",
    category: "",
    image:
      "https://ardentdc.com/hs-fs/hubfs/ND_Modular_DC_Stills_04%20(1).jpg?name=ND_Modular_DC_Stills_04%20(1).jpg",
    imageAlt: "Ardent Data Centers' Data Server Machines",
    description:
      "Created and managed web platform for Ardent Data Centers, with enhanced CMS, forms, campaigns, and analytics.",
    technologies: [
      "HubSpot",
      "HUBL",
      "HTML",
      "JavaScript",
      "TailwindCSS",
      "CSS",
      "SASS",
      "Gulp",
      "Google Analytics",
    ],
    liveLink: "https://ardentdc.com/",
    githubLink: "",
    details: {
      video: "https://youtu.be/_jlv1uR-L_4",
      challenge:
        "Building a scalable, subsidiary-aligned website that supports group identity and effective campaign tracking.",
      solution:
        "Applied digital ecosystem from the parent site, engineered and managed the website, landing pages, and digital campaign content, streamlining form capture, optimizing SEO/AIO, and automating site updates. Integrated HubSpot and Google analytics for tracking and reporting, and continuously A/B tested features to improve engagement across campaigns and services",
      features: [
        "Responsive website with contemporary design",
        "Integration of automated lead capture forms",
        "SEO and AIO score enhancements",
        "A/B testing for user engagement",
        "HubSpot CMS content management and analytics tracking",
        "Rich multimedia including animations and videos",
        "Support for marketing campaign landing pages",
      ],
      images: [
        "https://ardentdc.com/hubfs/Data%20Center%20orange%20v2.webp",
        "/images/ardent-data-centers/adc-1.png",
        "https://cdn.digitalisationworld.com/uploads/images/b30b9481cce7cc3c4abff43ef558a582f3e07bb221ccf5b4.jpg",
        "/images/ardent-data-centers/adc-2.png",
        "/images/ardent-data-centers/adc-3.png",
        "/images/ardent-data-centers/adc-4.png",
        "https://ardentdc.com/hs-fs/hubfs/Northern_Data_Pittsburgh_VR_01_shot1.jpg?width=1200&height=677&name=Northern_Data_Pittsburgh_VR_01_shot1.jpg",
        "/images/ardent-data-centers/adc-5.png",

        "/images/ardent-data-centers/adc-6.png",
        "/images/ardent-data-centers/adc-7.png",
      ],
    },
  },
  {
    id: 22,
    slug: "taiga-cloud",
    title: "Taiga Cloud",
    category: "",
    image:
      "https://taigacloud.com/hs-fs/hubfs/knohxville_cinematic_shot_futuristic_team_leader_in_glowing_min_381c279b-259f-4db0-b683-f36ed6ed4126.jpg?width=2912&height=1632&name=knohxville_cinematic_shot_futuristic_team_leader_in_glowing_min_381c279b-259f-4db0-b683-f36ed6ed4126.jpg",
    imageAlt:
      "Taiga Cloud's Cinematic Team Leader walking alongside a mountain range",
    description:
      "Delivered site for next-gen cloud computing subsidiary, with campaign and lead capture flows.",
    technologies: [
      "HubSpot",
      "HUBL",
      "HTML",
      "JavaScript",
      "TailwindCSS",
      "CSS",
      "SASS",
      "Gulp",
      "Google Analytics",
    ],
    liveLink: "https://taigacloud.com/",
    githubLink: "",
    details: {
      video: "https://youtu.be/Xipeh8oRjlk",
      challenge:
        "Launching a new cloud platform with speed, brand consistency, and technical depth.",
      solution:
        "Built a brand-aligned site, developed and managed Taiga Cloud’s web experience, delivering high-performance site assets with animated content, robust form and lead capture, and ongoing SEO/AIO improvements. Integrated analytics, automated landing pages for cloud campaigns, and implemented technical enhancements to optimize customer journey and conversion tracking",
      features: [
        "Brand-consistent, scalable website design",
        "Automated campaign landing pages",
        "Lead capture forms with validation",
        "Search engine optimization and analytics",
        "Video content and animated visuals",
        "Technical improvements for fast, smooth UX",
        "Integration with marketing tools for campaign tracking",
      ],
      images: [
        "/images/taiga-cloud/tc-1.png",
        "/images/taiga-cloud/tc-2.png",
        "/images/taiga-cloud/tc-3.png",
        "/images/taiga-cloud/tc-4.png",
        "/images/taiga-cloud/tc-5.png",
        "https://taigacloud.com/hs-fs/hubfs/knohxville_cinematic_shot_futuristic_team_leader_in_glowing_min_381c279b-259f-4db0-b683-f36ed6ed4126.jpg?width=2912&height=1632&name=knohxville_cinematic_shot_futuristic_team_leader_in_glowing_min_381c279b-259f-4db0-b683-f36ed6ed4126.jpg",
        "/images/taiga-cloud/tc-6.png",
        "/images/taiga-cloud/tc-7.png",
      ],
    },
  },
  {
    id: 21,
    slug: "ada-infrastructure",
    title: "Ada Infrastructure",
    category: "",
    image:
      "https://mms-delivery.sitecorecloud.io/api/media/v2/delivery/a38699ce-481f-4313-810e-08db30610e88/1ebcb15345ca437ea95ca73d45ddaa86?transform=true&format=webp&width=3840",
    imageAlt: "Ada Infrastructure's Data Center Building Exterior",
    description:
      "Managed Ada Infrastructure’s website build and content, focused on scalability, SEO, and analytics.",
    technologies: [
      "NextJS",
      "Sitecore",
      "TailwindCSS",
      "JavaScript",
      "HTML",
      "CSS",
      "Analytics",
    ],
    liveLink: "https://adainfrastructure.com/en-US",
    githubLink: "",
    details: {
      video: "https://youtu.be/X9MSpxwrn_Q",
      challenge:
        "Rapidly deliver a feature-rich, robust site ready for frequent content updates and real-time analytics.",
      solution:
        "Implemented a scalable CMS (Sitecore with Next.js), integrated analytics dashboards, and set up robust content controls for agility and governance.",
      features: [
        "Fast, scalable site launch with continuous deployment",
        "Centralized, user-friendly CMS for easy content updates (Sitecore, Next.js)",
        "SEO performance monitoring and improvement",
        "Custom analytics dashboards for actionable insights",
        "Modular content components for flexible page layouts",
        "Admin tools for governance and access control",
        "Optimized for accessibility and cross-device compatibility",
      ],
      images: [
        "/images/ada-infrastructure/ada-1.png",
        "/images/ada-infrastructure/ada-2.png",
        "/images/ada-infrastructure/ada-3.png",
        "/images/ada-infrastructure/ada-4.png",
        "https://mms-delivery.sitecorecloud.io/api/media/v2/delivery/a38699ce-481f-4313-810e-08db30610e88/1ebcb15345ca437ea95ca73d45ddaa86?transform=true&format=webp&width=3840",
        "/images/ada-infrastructure/ada-5.png",
        "/images/ada-infrastructure/ada-6.png",
        "/images/ada-infrastructure/ada-7.png",
      ],
    },
  },
  {
    id: 20,
    slug: "colt-data-centers",
    title: "Colt Data Centres",
    category: "",
    image:
      "https://www.coltdatacentres.net/-/media/Images/image-text/image-text-frankfurt-3.jpg?h=1625&iar=0&w=2875&rev=5f6cef6eaa0a409b826de7a2100b8b7a&hash=9C1243678150A3137284092D276C3833",
    imageAlt: "Colt Data Centres' Frankfurt Data Center Exterior",
    description:
      "Continuous maintenance and enhancement of Colt’s international multi-region site and campaign pages.",
    technologies: ["Sitecore", "Next.js", "JavaScript", "TailwindCSS", "CSS"],
    liveLink: "https://www.coltdatacentres.net/en-GB",
    githubLink: "",
    details: {
      video: "https://youtu.be/yW-cEVlNkRU",
      challenge:
        "Maintaining and evolving a complex, scalable global website serving diverse regions and clients.",
      solution:
        "Rolled out multi-regional support features, campaign landing pages, and optimizations informed by analytics insights.",
      features: [
        "Global/regional support",
        "Campaign landing pages",
        "Performance and SEO audits",
      ],
      images: [
        "/images/colt/colt-1.png",
        "/images/colt/colt-2.png",
        "/images/colt/colt-3.png",
        "/images/colt/colt-4.png",
        "https://www.coltdatacentres.net/-/media/Images/image-text/image-text-frankfurt-3.jpg?h=1625&iar=0&w=2875&rev=5f6cef6eaa0a409b826de7a2100b8b7a&hash=9C1243678150A3137284092D276C3833",
        "/images/colt/colt-5.png",
        "/images/colt/colt-6.png",
        "/images/colt/colt-7.png",
      ],
    },
  },
  {
    id: 19,
    slug: "team-lewis",
    title: "Team Lewis",
    category: "",
    image:
      "https://www.teamlewis.com/cdn-cgi/image/width=1800,height=550,fit=crop,quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/sites/2/2025/05/WordPress-Blog-Banner-Larger-2025-04-28T203901.088.png",
    imageAlt: "Team Lewis' Agency Colour Flare graphic",
    description:
      "Revamped the Team Lewis agency site and co-developed Sidekick, a generative AI assistant for creative operations.",
    technologies: [
      "WordPress",
      "HTML",
      "JavaScript",
      "CSS",
      "Tailwind CSS",
      "NextJS",
      "Vercel AI SDK",
      "ChatGPT",
      "Claude",
      "Gemini",
      "DeepSeek",
    ],
    liveLink: "https://www.teamlewis.com/uk/",
    githubLink: "",
    details: {
      video: "https://youtu.be/4nROHbVbZjo",
      challenge:
        "Deliver a creative agency website and create tools to empower content/marketing teams.",
      solution:
        "Redesigned the website and launched Sidekick, a multimodal AI tool driving workflow and idea generation.",
      features: [
        "Agency website and CMS",
        "AI assistant (Sidekick)",
        "Creative tools integration",
        "Technical onboarding materials",
      ],
      images: [
        "/images/team-lewis/TL-1.png",
        "/images/team-lewis/sidekick-1.jpeg",
        "/images/team-lewis/TL-2.png",
        "/images/team-lewis/TL-3.png",
        "/images/team-lewis/sidekick-3.jpeg",
        "/images/team-lewis/TL-4.png",
      ],
    },
  },
  {
    id: 18,
    slug: "base-wellness",
    title: "Base Wellness",
    category: "",
    image:
      "https://www.basewellness.co.uk/wp-content/uploads/2025/06/PTs-Running.jpg",
    imageAlt: "Base Wellness' Personal Trainers Running Session",
    description:
      "End-to-end development of Base Wellness’s e-commerce site, supporting product launch & digital marketing.",
    technologies: [
      "WordPress",
      "WooCommerce",
      "Elementor",
      "JavaScript",
      "HTML",
      "CSS",
      "PHP",
    ],
    liveLink: "https://www.basewellness.co.uk/",
    githubLink: "",
    details: {
      video: "https://youtu.be/HifQsbC8RJ0",
      challenge:
        "Launching an appealing and robust e-commerce platform for health/wellness brands.",
      solution:
        "Led full e-commerce site build, integrated WooCommerce, and executed digital marketing and analytics.",
      features: [
        "Secure WooCommerce cart",
        "Content/SEO optimization",
        "HubSpot automation",
        "Campaign and analytics setup",
      ],
      images: [""],
    },
  },
  {
    id: 17,
    slug: "summit-learning",
    title: "Summit Learning",
    category: "",
    image:
      "https://www.teachers-uk.co.uk/wp-content/uploads/2020/11/shutterstock_1448047391-1080x627.jpg",
    description:
      "A modern, responsive website for Summit Learning, a UK tuition company delivering specialist education support for diverse backgrounds.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "CSS",
      "TailwindCSS",
    ],
    liveLink: "https://summit-learning-ashen.vercel.app/",
    githubLink: "https://github.com/MiliDS-Lewis/SummitLearning",
    details: {
      challenge:
        "Create a vibrant and professional website to showcase Summit Learning’s expertise, services, and unique UK-focused education approach.",
      solution:
        "Collaborated directly with the Founder to design and implement a site focused on clarity, usability, and conversion. Built an SEO-friendly, accessible platform highlighting tailored tutoring programs for students across various education backgrounds.",
      features: [
        "Customized landing pages for multiple education backgrounds",
        "Responsive and mobile-first design",
        "SEO optimized for UK education queries",
        "Accessible site structure for all users",
        "Contact and enquiry forms",
        "Modular, easy-to-update components",
        "Tutor profile and service showcase",
      ],
      images: [
        "/images/summit-learning/summit-1.png",
        "/images/summit-learning/summit-2.png",
        "/images/summit-learning/summit-3.png",
        "/images/summit-learning/summit-4.png",
        "/images/summit-learning/summit-5.png",
        "/images/summit-learning/summit-6.png",
      ],
    },
  },
  {
    id: 16,
    slug: "ember-website-app",
    title: "Ember",
    category: "",
    image:
      "https://ember-bank.cdn.prismic.io/ember-bank/08ce6218-a4fd-4552-9338-b7ef9f2680f7_IMG_features.svg",
    description:
      "Led the redesign and enhancement of Ember’s website and collaborated on the development of Ember’s cloud-based accounting app, improving usability, accessibility, and feature set for thousands of users.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Prismic",
      "Figma",
      "TailwindCSS",
    ],
    liveLink: "https://ember.co/",
    githubLink: "",
    details: {
      challenge:
        "Deliver a fully responsive website and application with advanced accounting features, high accessibility, and seamless content management.",
      solution:
        "Redesigned the website UI, optimized SEO and performance, reduced bugs, improved accessibility, and delivered robust new features to both web and app. Integrated Prismic CMS for agile updates and coordinated cross-functional feedback for continuous improvements.",
      features: [
        "Accessible, responsive web design",
        "30+ new features launched for users",
        "SEO optimization with Google Lighthouse (90+ scores)",
        "Integrated Prismic headless CMS for agility",
        "Robust user and security tracking",
        "A/B testing & data-driven iteration",
        "WCAG-compliant UI and app",
        "Cross-platform mobile optimization",
        "Comprehensive documentation and onboarding",
      ],
      images: [
        "/images/ember/ember-1.png",
        "/images/ember/ember-2.png",
        "/images/ember/ember-3.png",
        "/images/ember/ember-4.png",
        "/images/ember/ember-5.png",
        "/images/ember/ember-6.png",
        "/images/ember/ember-7.png",
        "/images/ember/ember-8.png",
      ],
    },
  },
  {
    id: 15,
    slug: "mili-personal-website",
    title: "Mili",
    category: "",
    image: "/images/mili/mili.jpg",
    description:
      "A living CV and developer portfolio showcasing my journey, projects, and core skills. Designed to make updates effortless and content engaging.",
    technologies: [
      "TypeScript",
      "JavaScript",
      "React",
      "TailwindCSS",
      "CSS",
      "Prismic",
      "Jest",
    ],
    liveLink: "https://milinda.dev",
    githubLink: "https://github.com/MPDeSilva/MiliWebsite",
    details: {
      challenge:
        "Build a modern, developer-focused personal website and CV that is easy to update and demonstrates advanced front-end and full stack experience.",
      solution:
        "Engineered a scalable React-based site with Prismic as a headless CMS, leveraging modern testing, responsive design, and built-in SEO analytics. The site serves as a central hub for my project portfolio, contact, and personal brand.",
      features: [
        "Dynamic content via Prismic CMS",
        "Responsive design with TailwindCSS",
        "Integrated CV and project portfolio",
        "SEO optimization and analytics ready",
        "Unit & integration testing with Jest",
        "Clean, modular React & TypeScript architecture",
        "Easy updates and extensibility",
        "Future-proofed for new tech additions",
      ],
      images: [
        "/images/mili/mili-1.png",
        "/images/mili/mili-2.png",
        "/images/mili/mili-3.png",
        "/images/mili/mili-4.png",
        "/images/mili/mili-5.png",
        "/images/mili/mili-6.png",
      ],
    },
  },
  {
    id: 14,
    slug: "thornacre-image-gallery",
    title: "Image Gallery",
    category: "",
    image:
      "/images/image-gallery/image-gallery.jpg",
    imageAlt: "Thornacre Albums responsive image gallery grid UI",
    description:
      "Interview task image gallery that consumes a remote albums API and presents a responsive, searchable grid with loaders, error handling, and accessibility baked in.",
    technologies: ["React", "TypeScript", "TailwindCSS", "React Query", "Vite"],
    liveLink: "",
    githubLink: "https://github.com/MPDeSilva/Thornacre-Task",
    details: {
      challenge:
        "Implement an albums-based image gallery that fetches from a public API, supports responsive layout, search, and robust loading/error states suitable for production frontends.",
      solution:
        "Built a responsive grid UI powered by React Query for fetching and caching albums, debounced search for performance, skeleton loaders for perceived speed, and deterministic created-on dates generated from album IDs.",
      features: [
        "Fetches albums from jsonplaceholder API",
        "Responsive Tailwind grid layout for album cards",
        "Real-time search with 350ms debounce",
        "Skeleton loading states matching card layout",
        "Error and empty-result messaging",
        "Stable generated created-on dates based on album ID",
        "Accessibility-focused structure and keyboard-friendly controls",
        "Local dev and Azure Static Web Apps-ready build",
      ],
      images: [
        "/images/thornacre/thornacre-1.png",
        "/images/thornacre/thornacre-2.png",
        "/images/thornacre/thornacre-3.png",
      ],
    },
  },
  {
    id: 13,
    slug: "biglight-react-landing",
    title: "George Retail",
    category: "",
    image:
      "https://www.buyandship.com.my/contents/uploads/2020/03/Shop-George-at-ASDA-and-Ship-to-Malaysia-1024x596.jpg",
    imageAlt: "BigLight modular React landing page layout",
    description:
      "Interview task recreating a George-style landing page using a data-driven modules-and-blocks architecture in React.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "SCSS Modules",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    liveLink: "",
    githubLink: "https://github.com/MPDeSilva/BigLight-Task2-React",
    details: {
      challenge:
        "Rebuild a marketing landing page using a flexible modules-and-blocks system that can be driven entirely from structured JSON content.",
      solution:
        "Structured the page as content-driven modules (navbar, hero, promo grid, offers, product grid) and reusable blocks, reading JSON from the DOM and mapping module types to React components for highly configurable layouts.",
      features: [
        "Modules architecture (Navbar, Hero, PromoGrid, OfferBanner, ProductGrid)",
        "Reusable UI blocks (NavItem, PromoCard, ProductCard)",
        "JSON-driven content loaded from a script tag",
        "Map-based module routing for flexible layouts",
        "Easy content editing by updating JSON only",
        "Hot-reload local development with Vite",
      ],
      images: [
        "/images/biglight/biglight-1.png",
        "/images/biglight/biglight-2.png",
        "/images/biglight/biglight-2.png",
        "/images/biglight/biglight-3.png",
      ],
    },
  },
  {
    id: 12,
    slug: "basic-node-express-webserver",
    title: "Basic Node + Express Web Server",
    category: "",
    image:
      "https://www.thewebkitchen.co.uk/wp-content/uploads/2011/12/what-is-a-web-server.jpg",
    imageAlt: "Simple Node and Express web server in terminal",
    description:
      "Foundational Node.js and Express web server demonstrating routing, middleware, and basic HTTP handling.",
    technologies: ["Node.js", "Express", "JavaScript"],
    liveLink: "",
    githubLink: "https://github.com/MPDeSilva/BasicNodeExpressWebServer",
    details: {
      challenge:
        "Create a minimal but clear Node.js and Express server to cement understanding of routing, middleware, and server setup.",
      solution:
        "Set up a lightweight Express server with clean route definitions, middleware, and environment-based configuration to serve as a base for future backend projects.",
      features: [
        "Express server setup with modular routes",
        "Basic GET endpoints and responses",
        "Environment-based configuration",
        "Entry point for future APIs and services",
      ],
      images: [],
    },
  },
  {
    id: 11,
    slug: "mongo-async-crud",
    title: "MongoAsyncCRUD",
    category: "",
    image:
      "/images/mongo/mongodb.svg",
    imageAlt: "MongoDB CRUD operations in a Node.js app",
    description:
      "Tutorial-based Node.js, Express, and MongoDB project implementing asynchronous CRUD operations against a database.",
    technologies: ["Node.js", "Express", "MongoDB", "Mongoose", "JavaScript"],
    liveLink: "",
    githubLink: "https://github.com/MPDeSilva/MongoAsyncCRUD",
    details: {
      challenge:
        "Build a full CRUD backend with Node, Express, and MongoDB that uses asynchronous patterns and clean separation of concerns.",
      solution:
        "Implemented RESTful create, read, update, and delete operations against MongoDB with async/await, structured routes, and data models.",
      features: [
        "Asynchronous CRUD endpoints using Express",
        "MongoDB integration with a schema-based model layer",
        "REST-style routes for entities",
        "Error handling and basic validation patterns",
      ],
      images: [],
    },
  },
  {
    id: 10,
    slug: "react-blog",
    title: "React Blog",
    category: "",
    image:
      "https://www.simplybusiness.co.uk/wp-content/uploads/sites/3/2024/05/how-to-start-a-blog.jpg",
    imageAlt: "React blog app posts list and detail view",
    description:
      "A simple blog application built with React to practice component-based UI, routing, and state management.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    liveLink: "",
    githubLink: "https://github.com/MPDeSilva/ReactBlog",
    details: {
      challenge:
        "Create a simple blog front-end to explore routing, reusable components, and client-side state.",
      solution:
        "Developed a React SPA with a posts list and detail views, demonstrating component composition and basic state handling.",
      features: [
        "Blog posts list and detail pages",
        "Reusable layout and card components",
        "Client-side routing",
        "Simple, readable React architecture",
      ],
      images: [
        "/images/react-blog/blog-1.png",
        "/images/react-blog/blog-2.png",
        "/images/react-blog/blog-3.png",
      ],
    },
  },
  {
    id: 9,
    slug: "colour-pixel",
    title: "Colour Pixel",
    category: "",
    image:
      "https://mymodernmet.com/wp/wp-content/uploads/2018/05/painting-ideas-thumbnail-jpg.jpg",
    imageAlt: "Colour Pixel app showing searched colour and hex code",
    description:
      "React-based colour finder app that lets users search colours, verify availability, and display the colour with its hex code.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    liveLink: "https://colourpixel.dev/",
    githubLink: "https://github.com/MPDeSilva/ColourPixel",
    details: {
      challenge:
        "Build a small but polished app to explore dynamic UI updates, validation, and simple data structures in React.",
      solution:
        "Implemented a search-driven interface that checks input colours against a code-defined dataset and renders the colour and its hex code with clear feedback.",
      features: [
        "Colour search with instant feedback",
        "Display of colour swatch and hex code",
        "Validation for unknown colours",
        "Responsive layout and simple visual design",
      ],
      images: [
        "/images/colour-pixel/colour-pixel-1.png",
        "/images/colour-pixel/colour-pixel-2.png",
        "/images/colour-pixel/colour-pixel-3.png",
      ],
    },
  },
  {
    id: 8,
    slug: "grocery-list-app",
    title: "Grocery List",
    category: "",
    image:
      "https://www.nicksofcalvert.com/wp-content/uploads/2023/08/shutterstock_748405867.jpg",
    imageAlt: "Grocery List app interface for managing shopping items",
    description:
      "React grocery list application that lets users add, check off, and remove items with persistence via local storage.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    liveLink: "https://milindagrocerylist.shop/",
    githubLink: "https://github.com/MPDeSilva/GroceryListApp",
    details: {
      challenge:
        "Create a practical app to manage grocery items while practising state management, event handling, and browser storage.",
      solution:
        "Developed a React UI where users maintain a checklist of items, with actions to add, toggle, and delete entries backed by local storage for persistence.",
      features: [
        "Add, check off, and delete grocery items",
        "Local storage to persist the list between sessions",
        "Simple, intuitive controls and layout",
        "Clean React state and event handling patterns",
      ],
      images: [
        "/images/grocery/grocery-1.png",
        "/images/grocery/grocery-2.png",
        "/images/grocery/grocery-3.png",
      ],
    },
  },
  {
    id: 7,
    slug: "simple-weather-app",
    title: "Simple Weather",
    category: "",
    image:
      "https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/wolfgang-hasselmann-br-gllg7bs-unsplash-2_ver_1.jpg",
    imageAlt: "Weather app UI showing city weather details",
    description:
      "React weather application using the OpenWeather API to display real-time conditions for cities worldwide.",
    technologies: ["React", "JavaScript", "OpenWeather API", "CSS"],
    liveLink: "https://milindaweather.dev/",
    githubLink: "https://github.com/MPDeSilva/SimpleWeatherApp",
    details: {
      challenge:
        "Learn to integrate third-party APIs into a React front-end and present real-time data in a clear UI.",
      solution:
        "Built a search-driven interface that calls the OpenWeather API and renders temperature, humidity, wind speed, and conditions in a responsive layout.",
      features: [
        "Search for any city to view weather",
        "Display temperature, humidity, wind, and conditions",
        "Responsive design for different devices",
        "Practical example of API integration in React",
      ],
      images: [
        "/images/weather/weather-1.png",
        "/images/weather/weather-2.png",
        "/images/weather/weather-3.png",
      ],
    },
  },
  {
    id: 6,
    slug: "rate-my-accommodation",
    title: "Rate My Accommodation",
    category: "",
    image:
      "https://media.www.kent.ac.uk/se/24768/KentUni3188-1920x1280_1920w.jpg",
    imageAlt: "RateMyAccommodation student housing reviews interface",
    description:
      "Concept and early-stage build of a platform for reviewing UK university accommodations, later sold and handed over to a client for further development.",
    technologies: ["TypeScript", "JavaScript", "CSS", "HTML"],
    liveLink: "https://rate-my-accommodation-gyia4wc3d-mpdesilva.vercel.app/",
    githubLink: "https://github.com/MPDeSilva/RateMyAccommodation",
    details: {
      challenge:
        "Give students a dedicated place to rate and review university accommodations so others can make informed housing decisions, beyond generic review sites.",
      solution:
        "Designed and prototyped a web app with typed front-end code and structured layouts, validating the concept enough for a client to acquire and continue development.",
      features: [
        "Concept for student accommodation reviews and ratings.",
        "Typed front-end using TypeScript for safer iteration.",
        "Structured layouts styled with CSS.",
        "Experience in scoping, pitching, and selling a project concept to a client.",
      ],
      images: [],
    },
  },
  {
    id: 5,
    slug: "youtube-clone",
    title: "YouTube Homepage Clone",
    category: "",
    image:
      "https://admin.ositcom.com/media/blog/blog-posts/youtube-makes-it-easier-for-teens-to-find-mental-health-support.jpg",
    imageAlt: "YouTube homepage clone layout",
    description:
      "A front-end clone of the YouTube homepage built as part of an HTML/CSS course, focusing on layout, responsiveness, and UI components.",
    technologies: ["HTML", "CSS"],
    liveLink: "https://milindayoutube.dev/youtube.html",
    githubLink: "https://github.com/MPDeSilva/YouTubeClone",
    details: {
      challenge:
        "Recreate a complex, real-world homepage to deepen understanding of semantic HTML and modern CSS layout techniques.",
      solution:
        "Built a static but responsive clone of the YouTube homepage with a structured grid, navigation bar, sidebar, and video cards styled using Flexbox, Grid, and media queries.",
      features: [
        "Semantic HTML5 layout for a video platform homepage.",
        "CSS Grid and Flexbox for complex responsive layouts.",
        "Navigation bar, sidebar, and video thumbnail components.",
        "Responsive design with media queries for different screen sizes.",
      ],
      images: [],
    },
  },
  {
    id: 4,
    slug: "asteroid-game",
    title: "Asteroid Game – Classic Atari-Inspired Game",
    category: "",
    image:
      "https://assets-prd.ignimgs.com/2022/04/16/asteroids-1650127824496.jpg",
    imageAlt: "Asteroid-style JavaScript browser game",
    description:
      "Browser-based version of the classic Atari-style asteroid game built as a university project using JavaScript, HTML, and CSS.",
    technologies: ["JavaScript", "HTML", "CSS"],
    liveLink: "https://asteroid-game-5njur92ao-mpdesilva.vercel.app/",
    githubLink: "https://github.com/MPDeSilva/AsteroidGame",
    details: {
      challenge:
        "Implement an arcade-style game in the browser, handling game loops, collisions, and user input while working within university time constraints.",
      solution:
        "Developed a playable asteroids experience with core movement and interaction logic, using plain JavaScript for the game loop and DOM/CSS for visuals.",
      features: [
        "Classic asteroid-style gameplay logic in JavaScript.",
        "Keyboard input handling for movement and actions.",
        "DOM- and CSS-based visual presentation.",
        "Documented learnings around scope, timeboxing, and iteration.",
      ],
      images: [],
    },
  },
  {
    id: 3,
    slug: "giki-frontend-task",
    title: "Giki Frontend Challenge",
    category: "",
    image:
      "https://giki.earth/wp-content/uploads/2024/02/Homepage-images-500x500-1.png",
    imageAlt: "Giki frontend challenge React marketing layout",
    description:
      "Frontend interview task for Giki built with React, TypeScript, TailwindCSS, and tests, deployed via Vercel.",
    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "React Testing Library",
      "Jest",
      "Figma",
    ],
    liveLink: "https://giki-front-end-challenge.vercel.app/",
    githubLink: "https://github.com/MPDeSilva/GikiFrontEndChallenge",
    details: {
      challenge:
        "Implement a pixel-accurate marketing page from a Figma asset while incorporating modern tooling, testing, and performance best practices.",
      solution:
        "Delivered a responsive React implementation styled with TailwindCSS, added unit tests with React Testing Library/Jest, and verified SEO/performance with Lighthouse before deploying on Vercel.",
      features: [
        "Figma-based responsive layout implementation.",
        "Type-safe React components with TypeScript.",
        "Styling via TailwindCSS utility classes.",
        "Unit tests with React Testing Library and Jest.",
        "Lighthouse-checked performance and SEO.",
        "Deployed with Vercel for production-like review.",
      ],
      images: [],
    },
  },
  {
    id: 2,
    slug: "ember-interview-landing",
    title: "Ember Website Interview Challenge",
    category: "",
    image:
      "https://images.prismic.io/ember-bank/e1ba5988-3347-41e0-a108-956735d0678a_1200x627+B+Homepage.png?auto=compress,format",
    imageAlt: "Ember interview landing page recreation",
    description:
      "Timed interview challenge recreating an Ember marketing page in React, focusing on layout, branding, and speed under time pressure.",
    technologies: ["React", "JavaScript", "CSS", "Node.js"],
    liveLink: "",
    githubLink: "https://github.com/MPDeSilva/EmberWebsite",
    details: {
      challenge:
        "Rebuild a provided marketing design in a short timed window, demonstrating front-end skills and ability to work under constraints.",
      solution:
        "Implemented most of the target page structure and styling with React, achieving a visually similar layout within the time limit and recording a walkthrough video of the result.",
      features: [
        "Rapid layout and styling from design screenshots.",
        "React component structure suitable for extension.",
        "Interview-style time-boxed delivery.",
        "Video walkthrough demonstrating the implemented UI.",
      ],
      images: [],
    },
  },
  {
    id: 1,
    slug: "lucas-systems",
    title: "Lucas Systems",
    category: "",
    image:
      "https://bevinfogroup.com/wp-content/uploads/2025/12/lucas-systems.jpg",
    imageAlt:
      "Lucas Systems warehouse optimization and voice-directed picking interface",
    description:
      "Software Engineer working on warehouse optimisation and task execution software for large distribution centres.",
    technologies: [
      "C",
      "SQL",
      "Silverlight",
      "Warehouse Management Systems",
      "Task Execution Software",
      "Technical Consulting",
    ],
    liveLink: "",
    githubLink: "",
    details: {
      video: "",
      challenge:
        "Improve storage efficiency and order processing for warehouse and distribution centre clients using robust, scalable software systems.",
      solution:
        "Contributed as a Software Engineer to the design, implementation, testing, and support of warehouse management and task execution software, building strong system foundations that could scale with evolving business requirements.",
      features: [
        "Participated in multiple warehouse optimisation projects to improve storage and order processing performance.",
        "Worked with C, SQL, and Silverlight across design, implementation, and testing of core product features.",
        "Supported and maintained warehouse management and task execution applications in production environments.",
        "Helped build robust system foundations to support long-term scalability and reliability.",
      ],
      images: [],
    },
  },
];

export const portfolioDataDesc: PortfolioProject[] = [...portfolioData].sort(
  (a, b) => b.id - a.id
);

export const getProjectBySlug = (
  slug: string
): PortfolioProject | undefined => {
  return portfolioDataDesc.find((project) => project.slug === slug);
};

export const getNextProject = (currentSlug: string): PortfolioProject => {
  const currentIndex = portfolioDataDesc.findIndex((p) => p.slug === currentSlug);

  if (currentIndex === -1) {
    return portfolioDataDesc[0];
  }

  const nextIndex = (currentIndex + 1) % portfolioDataDesc.length;
  return portfolioDataDesc[nextIndex];
};

export const getPreviousProject = (currentSlug: string): PortfolioProject => {
  const currentIndex = portfolioDataDesc.findIndex((p) => p.slug === currentSlug);

  if (currentIndex === -1) {
    return portfolioDataDesc[portfolioDataDesc.length - 1];
  }

  const prevIndex =
    currentIndex === 0 ? portfolioDataDesc.length - 1 : currentIndex - 1;
  return portfolioDataDesc[prevIndex];
};
