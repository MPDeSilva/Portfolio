"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  const skills = [
    {
      category: "Programming & Development",
      items: [
        "React",
        "JavaScript",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Sass/Scss",
        "HTML",
        "CSS",
        "C#",
        "Silverlight",
        "XML",
        ".NET Framework",
        "Python",
        "C++",
        "Java",
        "Node.js",
        "Express",
        "React Native",
        "React Testing Library",
        "Playwright",
        "Jest",
        "Postman",
      ],
    },
    {
      category: "Data Management & Analysis",
      items: [
        "SQL (Oracle)",
        "MySQL",
        "MongoDB",
        "MongoDB Atlas",
        "SSMS",
        "SPSS",
        "Firebase",
      ],
    },
    {
      category: "Analytics & SEO",
      items: ["Google Analytics", "HotJar", "Segment", "Lighthouse", "SEMRush"],
    },
    {
      category: "Project Management & Collaboration",
      items: [
        "Jira",
        "Linear",
        "Notion",
        "Confluence",
        "GitHub",
        "GitLab",
        "TeamCity",
        "Vercel",
        "Netlify",
        "Cloudflare",
        "Google Apps",
        "MS 365",
        "Prismic",
        "WordPress",
        "Sitecore",
        "Intercom",
        "HubSpot",
        "Calendly",
        "Typeform",
        "Workable",
        "TeamTailor",
        "Zapier",
        "Trustpilot",
      ],
    },
    {
      category: "Design & Modelling",
      items: [
        "Figma",
        "Canva",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Framer Motion",
        "Google SketchUp",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="wrap section-pad">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-start mb-20"
        >
          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-light mb-8">
              I'm Milinda. A developer from London.
            </h1>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                With several years of experience in web development, I
                specialize in creating digital experiences that blend beautiful
                design with robust functionality. My journey in tech began with
                a curiosity for how things work on the web, which has evolved
                into a passion for crafting elegant solutions to complex
                problems.
              </p>
              
              <p>
                I believe in the power of clean code, thoughtful design, and
                user-centered development. Every project is an opportunity to
                learn something new and push the boundaries of what's possible
                on the web.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community. I'm always excited about new challenges
                and opportunities to create something meaningful.
              </p>
              
              <p>
                If we sound like a good match, please pop me an email to say hi.
              </p>
            </div>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block my-8 px-8 py-3 bg-black text-white text-sm tracking-wide hover:bg-gray-800 transition-colors duration-200"
            >
              Get in Touch
            </motion.a>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                or download my CVs, I have my Software/Web Developer CV and my
                Project Manager CV available also.
              </p>
            </div>

            <div className="flex md:flex-row flex-col md:space-x-4 md:space-y-0 space-y-4 items-start md:items-center mx-auto">
              <motion.a
                href="https://drive.google.com/file/d/1tXDpQ6WQcW10zKYawN7d5kD38cjDQ45e/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-4 py-3 border border-black bg-black text-white text-sm tracking-wide hover:bg-gray-800 transition-colors duration-200"
              >
                Software/Web Developer CV
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1xsQ2y4DcqrvY4twBF1liGbDoqTd3FAM4/view?usp=sharing"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-3 border border-black text-black text-center text-sm tracking-wide"
              >
                Project Manager CV
              </motion.a>
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/5] bg-gray-100 rounded-sm overflow-hidden"
          >
            <Image
              src="/images/profile/milinda.jpg"
              alt="Milinda Prasan De Silva"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-t border-gray-100 pt-20"
        >
          <h2 className="text-3xl font-light mb-12">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-4">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="text-gray-700">
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-gray-100 pt-20 mt-20"
        >
          <h2 className="text-3xl font-light mb-12">Experience</h2>
          
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid md:grid-cols-4 gap-6"
            >
              <div className="text-sm text-gray-500">03/2025 - 10/2025</div>
              <div className="md:col-span-3">
                <h3 className="text-lg font-medium mb-2">
                  Full Stack Software Developer
                </h3>
                <p className="text-gray-600 mb-2">Team Lewis</p>
                <ul className="text-gray-700 leading-relaxed">
                  <br></br>
                  <li>
                    <span className="font-bold">Client projects:</span>{" "}
                    Engineered and maintained responsive, accessible websites
                    and digital campaigns for enterprise clients including
                    Northern Data, Schneider Electric, Base Wellness, Colt Data
                    Centre and Ada Infrastructure, as well as for charitable
                    organisations supported through the TEAM LEWIS Foundation.
                  </li>
                  <br></br>
                  <li>
                    <span className="font-bold">CMS & deployment:</span> Managed
                    content and functionality across HubSpot, WordPress and
                    Sitecore; integrated Figma designs into production code and
                    deployed to cloud platforms like Cloudflare and Vercel.
                  </li>
                  <br></br>
                  <li>
                    <span className="font-bold">AI tools:</span> Co‑developed a
                    suite of internal AI applications, including Sidekick (a
                    multi‑model chat assistant), Sidekick Creative (image/video
                    generator) and a PowerPoint case‑study add‑in among other
                    micro‑tools, enabling colleagues to harness generative AI in
                    daily work.
                  </li>
                  <br></br>
                  <li>
                    <span className="font-bold">Documentation & training:</span>{" "}
                    Authored detailed documentation and created handover
                    materials; ran handover meetings for clients and internal
                    teams; designed technical interview tasks and
                    work‑experience programming exercises to support recruitment
                    and onboarding.
                  </li>
                  <br></br>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid md:grid-cols-4 gap-6"
            >
              <div className="text-sm text-gray-500">10/2023 - Present</div>
              <div className="md:col-span-3">
                <h3 className="text-lg font-medium mb-2">
                  Technical/Digital Project Consultant
                </h3>
                <p className="text-gray-600 mb-2">Freelancer/Self-Employed</p>
                <ul className="text-gray-700 leading-relaxed">
                  <br></br>
                  <li>
                    <span className="font-bold">
                      Digital Business Development:
                    </span>{" "}
                    Provided consultancy services helping clients develop and
                    deploy websites and digital marketing campaigns, enhancing
                    their online presence and supporting business growth
                    strategies.
                  </li>
                  <br></br>
                  <li>
                    <span className="font-bold">Technical Documentation:</span>{" "}
                    Authored detailed project specifications, scope documents,
                    and process workflows to ensure clear understanding among
                    stakeholders and facilitate smooth project execution.
                  </li>
                  <br></br>
                  <li>
                    <span className="font-bold">
                      Client Relationship Management:
                    </span>{" "}
                    Acted as a liaison between technical teams and business
                    clients to translate requirements and manage expectations,
                    supporting project scope and delivery timelines.
                  </li>
                  <br></br>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid md:grid-cols-4 gap-6"
            >
              <div className="text-sm text-gray-500">09/2021 - 09/2023</div>
              <div className="md:col-span-3">
                <h3 className="text-lg font-medium mb-2">
                  Junior Software Developer
                </h3>
                <p className="text-gray-600 mb-2">Ember</p>
                <ul className="text-gray-700 leading-relaxed">
                  <br></br>
                  <li>
                    <span className="font-bold">
                      Website Management & Enhancement:
                    </span>{" "}
                    Took the lead in managing and maintaining the company
                    website, from redesigning pages to bug fixes and
                    functionality additions, ensuring a seamless user
                    experience.
                  </li>
                  <br></br>
                  <li>
                    <span className="font-bold">Full-Stack Development:</span>{" "}
                    Utilised a range of modern technologies including Initial,
                    Next.js, React, and Typescript to develop and optimise the
                    front-end and back-end of the website. Additionally, using
                    React, Typescript, JavaScript, etc. for the development of
                    the new Ember Accounting and Tax App.
                  </li>
                  <br></br>
                  <li>
                    <span className="font-bold">
                      Design-to-Code Translation:
                    </span>{" "}
                    Expertly converted designs from Figma into clean, functional
                    code, maintaining design integrity and user experience.
                  </li>
                  <br></br>
                  <li>
                    <span className="font-bold">
                      Cross-Platform & Responsiveness:
                    </span>{" "}
                    Ensured that the website and the Ember app was fully
                    optimised for mobile devices and various platforms while
                    maintaining responsiveness across all screen sizes.
                  </li>
                  <br></br>
                  <li>
                    <span className="font-bold">Web Optimisation:</span>{" "}
                    Spearheaded efforts to optimise the company website for
                    performance, usability, and SEO, leading to enhanced user
                    engagement and increased web traffic.
                  </li>
                  <br></br>
                  <li>
                    <span className="font-bold">
                      Security & Tracking Enhancement:
                    </span>{" "}
                    Collaborated in implementing robust tracking and security
                    measures across the company website and the company app,
                    fortifying the sites and app’s integrity and data accuracy.
                  </li>
                  <br></br>
                  <li>
                    <span className="font-bold">Data-Driven Development:</span>{" "}
                    Conducted comprehensive analytics and A/B testing to
                    identify user preferences and behaviours, informing
                    development strategies and optimising user experience.
                  </li>
                  <br></br>
                  <li>
                    <span className="font-bold">
                      Application Development Contributor:
                    </span>{" "}
                    Actively involved in the development of a new Ember
                    Accounting and Tax App, including implementing testing
                    frameworks to ensure the app's functionality and
                    reliability, following accessibility and WCAG guidelines.
                  </li>
                  <br></br>
                  <li>
                    <span className="font-bold">Documentation Leadership:</span>{" "}
                    Authored comprehensive documentation for both the website
                    and key components of the Ember app, establishing a valuable
                    knowledge base that streamlined onboarding and facilitated
                    ongoing maintenance.
                  </li>
                  <br></br>
                  <li>
                    <span className="font-bold">
                      Content Management Innovation:
                    </span>{" "}
                    Pioneered the integration of Prismic, a Headless CMS
                    solution, to empower team members in effortlessly creating
                    and updating web pages, thereby boosting website agility and
                    collaborative productivity.
                  </li>
                  <br></br>
                  <li>
                    <span className="font-bold">
                      Cultural Stewardship & Event Management:
                    </span>{" "}
                    Orchestrated and managed company-wide events aimed at
                    bolstering company culture and integrating new team members,
                    contributing to a vibrant, cohesive work environment within
                    the Ember project team.
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid md:grid-cols-4 gap-6"
            >
              <div className="text-sm text-gray-500">09/2020 - 09/2021</div>
              <div className="md:col-span-3">
                <h3 className="text-lg font-medium mb-2">
                  Information Technology Specialist
                </h3>
                <p className="text-gray-600 mb-2">Lanistar Limited</p>
                <ul className="text-gray-700 leading-relaxed">
                  <br></br>
                  <li>
                    <span className="font-bold">Comprehensive IT Support:</span>{" "}
                    Orchestrated the setup, management, and maintenance of all
                    company hardware and software, while executing regular
                    security audits and updates.
                  </li>
                  <br></br>
                  <li>
                    <span className="font-bold">Network Infrastructure:</span>{" "}
                    Engineered and deployed an office-wide, high-speed network,
                    optimising connectivity and traffic load through specialist
                    hardware.
                  </li>
                  <br></br>
                  <li>
                    <span className="font-bold">
                      Cross-functional collaboration:
                    </span>{" "}
                    Partnered with various departments to streamline and
                    document work processes, contributing to the implementation
                    of quality control measures that heightened operational
                    efficiency and workflow cohesion.
                  </li>
                  <br></br>
                  <li>
                    <span className="font-bold">Regulatory Compliance:</span>{" "}
                    Ensured rigorous compliance with Data Protection Act (DPA)
                    and Payment Card Industry (PCI) standards through focused
                    oversight in legal and compliance matters, mitigating risks,
                    and fortifying data security protocols.
                  </li>
                  <br></br>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid md:grid-cols-4 gap-6"
            >
              <div className="text-sm text-gray-500">09/2020 - 09/2021</div>
              <div className="md:col-span-3">
                <h3 className="text-lg font-medium mb-2">Software Engineer</h3>
                <p className="text-gray-600 mb-2">Lucas Systems</p>
                <ul className="text-gray-700 leading-relaxed">
                  <br></br>
                  <li>
                    <span className="font-bold">Warehouse Optimisation:</span>{" "}
                    Participated in multiple projects focused on enhancing
                    client warehouse operations, leveraging a deep understanding
                    of Warehouse Management Systems to drive significant
                    improvements in storage efficiency and order processing.
                  </li>
                  <br></br>
                  <li>
                    <span className="font-bold">Technical Proficiency:</span>{" "}
                    Utilised a suite of programming languages and software
                    including C#, SQL, and Silverlight in the design,
                    implementation, testing, and ongoing support of Warehouse
                    Management and Task Execution software.
                  </li>
                  <br></br>
                  <li>
                    <span className="font-bold">System Foundation:</span>{" "}
                    Instrumental in building robust system foundations from the
                    ground up, setting the stage for scalable and sustainable
                    software solutions that meet evolving business requirements.
                  </li>
                  <br></br>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
