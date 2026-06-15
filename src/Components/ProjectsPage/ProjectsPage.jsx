import { motion } from "framer-motion";
import weCare from "../../assets/Projects/WeCare.png";
import sparkSkill from "../../assets/Projects/sparkSkill.png";
import techTutorium from "../../assets/Projects/techTutorium.png";
import hungry from "../../assets/Projects/Hungry Monster.png";
import weather from "../../assets/Projects/Weather.png";
import eventPick from "../../assets/Projects/EventPick.png";
import exchangeSite from "../../assets/Projects/Exchange Site.png";

const ProjectsPage = () => {
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

        {/* Free Tier Warning Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-lavender text-purple-800 p-4 mx-auto max-w-3xl mb-8 rounded-lg shadow-sm text-sm md:text-base text-left border-l-4 border-purple-500"
        >
          <strong>⏳ Quick Note:</strong> The backend services for my
          full-stack applications are hosted on free tiers. They go into 'sleep
          mode' after a period of inactivity. Please allow{" "}
          <strong>30-50 seconds</strong> for the data to load on your first
          interaction. Thank you for your patience!
        </motion.div>

        <div className="flex flex-wrap justify-center">
          {projects.map((project, index) => (
            <motion.article
              key={index}
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

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap justify-center gap-2 mb-5">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center space-x-4 mt-auto">
                    <a
                      href={project.liveSite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn bg-purple-500 text-white hover:bg-purple-700 px-4 py-2 rounded-lg transition shadow-md"
                      aria-label={`Live site for ${project.title}`}
                    >
                      Live Site
                    </a>
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn bg-gray-600 text-white hover:bg-gray-800 px-4 py-2 rounded-lg transition shadow-md"
                      aria-label={`Source code for ${project.title}`}
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
