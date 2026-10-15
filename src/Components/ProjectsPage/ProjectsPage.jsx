import { motion } from "framer-motion";
import weCare from "../../assets/Projects/WeCare.png";
import sparkSkill from "../../assets/Projects/sparkSkill.png";
import techTutorium from "../../assets/Projects/techTutorium.png";
import hungry from "../../assets/Projects/Hungry Monster.png";
import weather from "../../assets/Projects/Weather.png";
import eventPick from "../../assets/Projects/EventPick.png";
import exchangeSite from "../../assets/Projects/Exchange Site.png";
import hsCollection from "../../assets/Projects/HS Collection.png";
import wholesaleBagBD from "../../assets/Projects/Wholesale Bag BD.png";

const featuredProjects = [
  {
    title: "Wholesale Bag BD",
    tag: "Client Project · Freelance",
    role: "Full Stack Odoo Developer",
    period: "Dec 2025 – Present",
    image: wholesaleBagBD,
    summary:
      "Turned a standard Odoo ERP into a specialized B2B wholesale platform for a live bag-wholesale business, plus HR and payroll automation.",
    highlights: [
      "Built a B2B portal with buyer authentication, plus Minimum Order Quantity and real-time stock validation at cart and checkout.",
      "Integrated a ZKTeco F18 biometric attendance device with Odoo Online (SaaS) fully remotely, using a custom Python script and the XML-RPC API to work around the platform's custom-module restriction.",
      "Automated payroll with dynamic Python salary rules for overtime and late deductions, mapped to real-time accounting journal entries.",
      "Built a WhatsApp ordering and 'Get Quote' system that encodes SKU, variant and price, and made homepage and product specs editable by non-technical staff.",
    ],
    tech: ["Odoo", "Python", "XML / QWeb", "XML-RPC", "Odoo ORM", "JavaScript"],
    liveSite: "https://www.wholesalebagbd.com/",
    serverLink: "",
    sourceCode: "",
    privateNote: "Client-owned code · screenshots & walkthrough on request",
  },
  {
    title: "H&S Collection",
    tag: "Own Business · Live in Production",
    role: "Founder & Full-Stack Developer",
    period: "",
    image: hsCollection,
    summary:
      "A complete online store and admin system for my own fashion and jewellery business, used for real orders and customers.",
    highlights: [
      "26 storefront pages and 20 admin screens: product filters, cart, cash-on-delivery checkout, customer accounts, order tracking and a full English/Bangla language switch.",
      "Admin dashboard for online and manual (Messenger/WhatsApp/phone) orders, stock by purchase batch with FIFO costing, automatic profit calculation, cash-flow reports, and invoice and parcel-label printing.",
      "Marketing tools: Facebook caption generator, landing-page builder, referral-link tracking, Facebook Pixel and GA4 events, and SEO (sitemap, social previews, 301 redirects).",
      "Secured with JWT admin auth, hashed passwords, Helmet, CORS and rate limiting; media on Cloudinary, order emails via Nodemailer.",
    ],
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Zustand",
      "JWT",
      "Cloudinary",
    ],
    liveSite: "https://hs-demo.vercel.app/", 
    serverLink: "https://hs-demo-backend.onrender.com",
    sourceCode: "",
    privateNote: "Commercial project · admin access & code walkthrough on request",
  },
];

/* ---------------------------------------------------------------
   Other projects
---------------------------------------------------------------- */
const projects = [
  {
    title: "Exchange Site",
    description:
      "Engineered a secure full-stack MERN currency exchange platform featuring real-time rate calculation, volume-based pricing tiers, and a robust admin dashboard to manage orders, reserves, and dynamic site branding.",
    image: exchangeSite,
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    sourceCode: "https://github.com/urnisha19/Exchange-Site_MongoDB_Backend",
    liveSite: "https://exchange-site-mongo-db.vercel.app/",
  },
  {
    title: "EventPick",
    description:
      "Developed a MERN stack responsive event management web application where users can browse different events, register for events, and manage their personal bookings.",
    image: eventPick,
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    sourceCode: "https://github.com/urnisha19/Event-Pick",
    liveSite: "https://event-pick.vercel.app/",
  },
  {
    title: "We Care",
    description:
      "Developed a responsive MERN stack web app for mental health services. Users can explore, schedule appointments, and provide feedback. Admins manage services and appointments seamlessly.",
    image: weCare,
    tech: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
    sourceCode: "https://github.com/urnisha19/We-Care",
    liveSite: "https://we-care-seven.vercel.app/",
  },
  {
    title: "Spark Skill",
    description:
      "Developed a responsive MERN stack web app for providing dynamic IT courses. Users can explore courses, enroll, and provide feedback. Admins manage courses and enrollment seamlessly.",
    image: sparkSkill,
    tech: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
    sourceCode: "https://github.com/urnisha19/Spark-Skill-cilent",
    liveSite: "https://spark-skill-cilent.vercel.app",
  },
  {
    title: "TechTutorium",
    description:
      "Developed a dynamic web app using MERN stack showcasing React.js, Node.js, Express.js, MongoDB with CRUD operations and user authentication.",
    image: techTutorium,
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    sourceCode: "https://github.com/urnisha19/TechTutorium",
    liveSite: "https://tech-tutorium.vercel.app/",
  },
  {
    title: "Hungry Monster",
    description:
      "API-based front-end web page to search and find a large list of your desired meals.",
    image: hungry,
    tech: ["HTML", "CSS", "JavaScript", "REST API"],
    sourceCode: "https://github.com/urnisha19/Hungry-Monster",
    liveSite: "https://urnisha19.github.io/Hungry-Monster/index.html",
  },
  {
    title: "Weather App",
    description:
      "API-based web app to detect the current temperature of a searched location.",
    image: weather,
    tech: ["HTML", "CSS", "JavaScript", "REST API"],
    sourceCode: "https://github.com/urnisha19/Weather",
    liveSite: "https://urnisha19.github.io/Weather/index.html",
  },
];

/* ---------------------------------------------------------------
   Small shared pieces
---------------------------------------------------------------- */
const TechBadges = ({ tech, center = true }) => (
  <div className={`flex flex-wrap gap-2 ${center ? "justify-center" : ""}`}>
    {tech.map((t, i) => (
      <span
        key={i}
        className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full font-medium"
      >
        {t}
      </span>
    ))}
  </div>
);

const LinkButton = ({ href, label, variant = "primary", ariaLabel }) => {
  if (!href) return null;
  const styles =
    variant === "primary"
      ? "bg-purple-500 hover:bg-purple-700"
      : "bg-gray-600 hover:bg-gray-800";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn ${styles} text-white px-4 py-2 rounded-lg transition shadow-md`}
      aria-label={ariaLabel}
    >
      {label}
    </a>
  );
};

const SectionHeading = ({ children, sub }) => (
  <div className="mb-8">
    <h2 className="text-2xl md:text-3xl font-bold text-purple-700">
      {children}
    </h2>
    {sub && <p className="text-gray-600 mt-2 text-sm md:text-base">{sub}</p>}
  </div>
);

/* ---------------------------------------------------------------
   Featured card (wide, horizontal on desktop)
---------------------------------------------------------------- */
const FeaturedCard = ({ project, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    className="w-full p-4"
    aria-label={`${project.title} featured project`}
  >
    <div className="bg-white shadow-lg hover:shadow-xl transition rounded-lg overflow-hidden flex flex-col lg:flex-row border-t-4 border-purple-500 text-left">
      <div className="lg:w-5/12 bg-lavender">
        <img
          className="w-full h-56 lg:h-full object-cover object-top"
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
        />
      </div>

      <div className="lg:w-7/12 p-6 flex flex-col">
        <span className="self-start bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
          {project.tag}
        </span>

        <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
        <p className="text-purple-700 font-medium mt-1">
          {project.role}
          {project.period && (
            <span className="text-gray-500 font-normal"> · {project.period}</span>
          )}
        </p>

        <p className="text-gray-700 mt-3">{project.summary}</p>

        <ul className="mt-4 space-y-2 text-gray-700 text-sm md:text-base">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-purple-500 mt-1 shrink-0">▸</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5">
          <TechBadges tech={project.tech} center={false} />
        </div>

        <div className="flex flex-wrap items-center gap-3 mt-6">
          <LinkButton
            href={project.liveSite}
            label="Live Site"
            ariaLabel={`Live site for ${project.title}`}
          />
          <LinkButton
            href={project.serverLink}
            label="Server"
            variant="secondary"
            ariaLabel={`Server for ${project.title}`}
          />
          <LinkButton
            href={project.sourceCode}
            label="Source Code"
            variant="secondary"
            ariaLabel={`Source code for ${project.title}`}
          />
          {!project.sourceCode && project.privateNote && (
            <span className="text-xs md:text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-lg">
              🔒 {project.privateNote}
            </span>
          )}
        </div>
      </div>
    </div>
  </motion.article>
);

/* ---------------------------------------------------------------
   Page
---------------------------------------------------------------- */
const ProjectsPage = () => {
  return (
    <section className="projects py-12 mx-4 md:mx-16 text-center">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-3 text-purple-700"
        >
          My Projects
        </motion.h1>
        <hr className="mx-auto w-1/2 border-t-2 border-steelBlue" />
        <hr className="mx-auto w-1/3 border-t-2 border-steelBlue my-4" />

        {/* Featured work */}
        <div className="mt-10">
          <SectionHeading sub="Live, in-production systems used by real businesses and customers.">
            Featured Work
          </SectionHeading>
          <div className="flex flex-col">
            {featuredProjects.map((project, index) => (
              <FeaturedCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Other projects */}
        <div className="mt-16">
          <SectionHeading>Other Projects</SectionHeading>

          {/* Free Tier Warning Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-lavender text-purple-800 p-4 mx-auto max-w-3xl mb-8 rounded-lg shadow-sm text-sm md:text-base text-left border-l-4 border-purple-500"
          >
            <strong>⏳ Quick Note:</strong> The backend services for these
            full-stack applications are hosted on free tiers. They go into
            'sleep mode' after a period of inactivity. Please allow{" "}
            <strong>30-50 seconds</strong> for the data to load on your first
            interaction. Thank you for your patience!
          </motion.div>

          <div className="flex flex-wrap justify-center">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full sm:w-1/2 lg:w-1/3 p-4"
                aria-label={`${project.title} project`}
              >
                <div className="card bg-white hover:bg-lavender shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 rounded-lg overflow-hidden flex flex-col h-full">
                  <img
                    className="card-img-top w-full h-48 object-cover"
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                  />
                  <div className="card-body p-4 flex flex-col flex-grow text-center">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="card-text text-gray-700 mb-4 flex-grow">
                      {project.description}
                    </p>

                    <div className="mb-5">
                      <TechBadges tech={project.tech} />
                    </div>

                    <div className="flex justify-center space-x-4 mt-auto">
                      <LinkButton
                        href={project.liveSite}
                        label="Live Site"
                        ariaLabel={`Live site for ${project.title}`}
                      />
                      <LinkButton
                        href={project.sourceCode}
                        label="Source Code"
                        variant="secondary"
                        ariaLabel={`Source code for ${project.title}`}
                      />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
