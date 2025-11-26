interface ProjectDetails {
  challenge: string;
  solution: string;
  features: string[];
  images: string[];
  video?: string; // Optional YouTube URL
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
    id: 1,
    slug: "northern-data",
    title: "Northern Data",
    category: "",
    image:
      "https://static.fabrik.io/b41/76da9a18fb86c3f9.jpg?lossless=1&w=3840&h=5120&fit=max&s=9b349636e5121409264e4e9098c96f35",
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
        "/images/team-lewis/TL-2.png",
        "/images/team-lewis/TL-3.png",
        "/images/team-lewis/TL-4.png",
      ],
    },
  },
  {
    id: 7,
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
    liveLink: "",
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
      images: [
        "",
      ],
    },
  },
  {
    id: 8,
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
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&q=80",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
      ],
    },
  },
  {
    id: 9,
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
    githubLink: "", // Add your repo link if applicable
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
    id: 10,
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
];

export const getProjectBySlug = (
  slug: string
): PortfolioProject | undefined => {
  return portfolioData.find((project) => project.slug === slug);
};

export const getNextProject = (currentSlug: string): PortfolioProject => {
  const currentIndex = portfolioData.findIndex((p) => p.slug === currentSlug);
  const nextIndex = (currentIndex + 1) % portfolioData.length;
  return portfolioData[nextIndex];
};

export const getPreviousProject = (currentSlug: string): PortfolioProject => {
  const currentIndex = portfolioData.findIndex((p) => p.slug === currentSlug);
  const prevIndex =
    currentIndex === 0 ? portfolioData.length - 1 : currentIndex - 1;
  return portfolioData[prevIndex];
};
