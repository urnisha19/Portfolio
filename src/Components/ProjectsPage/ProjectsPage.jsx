import weCare from "../../assets/Projects/WeCare.png";
import sparkSkill from "../../assets/Projects/sparkSkill.png";
import techTutorium from "../../assets/Projects/techTutorium.png";
import hungry from "../../assets/Projects/Hungry Monster.png";
import penguin from "../../assets/Projects/Penguin Fashion.png";
import weather from "../../assets/Projects/Weather.png";
import flight from "../../assets/Projects/Flight Booking.png";
import eventPick from "../../assets/Projects/EventPick.png";

const ProjectsPage = () => {
  const projects = [
    {
      title: "EventPick",
      description:
        "Developed a MERN stack responsive event management web application where users can browse different events, register for events, and manage their personal bookings.",
      image: eventPick,
      sourceCode: "https://github.com/urnisha19/Event-Pick",
      liveSite: "https://event-pick.vercel.app/",
    },
    {
      title: "We Care",
      description:
        "Developed a responsive MERN stack web app for mental health services. Users can explore, schedule appointments, and provide feedback. Admins manage services and appointments seamlessly.",
      image: weCare,
      sourceCode: "https://github.com/urnisha19/We-Care",
      liveSite: "https://we-care-seven.vercel.app/",
    },
    {
      title: "Spark Skill",
      description:
        "Developed a responsive MERN stack web app for providing dynamic IT courses. Users can explore courses, enroll, and provide feedback. Admins manage courses and enrollment seamlessly.",
      image: sparkSkill,
      sourceCode: "https://github.com/urnisha19/Spark-Skill-cilent",
      liveSite: "https://spark-skill-cilent.vercel.app",
    },
    {
      title: "TechTutorium",
      description:
        "Developed a dynamic web app using MERN stack showcasing React.js, Node.js, Express.js, MongoDB with CRUD operations and user authentication.",
      image: techTutorium,
      sourceCode: "https://github.com/urnisha19/TechTutorium",
      liveSite: "https://tech-tutorium.vercel.app/",
    },
    {
      title: "Hungry Monster",
      description:
        "API-based front-end web page to search and find a large list of your desired meals.",
      image: hungry,
      sourceCode: "https://github.com/urnisha19/Hungry-Monster",
      liveSite: "https://urnisha19.github.io/Hungry-Monster/index.html",
    },
    {
      title: "Weather App",
      description:
        "API-based web app to detect the current temperature of a searched location.",
      image: weather,
      sourceCode: "https://github.com/urnisha19/Weather",
      liveSite: "https://urnisha19.github.io/Weather/index.html",
    },
    {
      title: "Penguin Fashion",
      description:
        "E-commerce web page design with HTML and CSS for fashion accessories.",
      image: penguin,
      sourceCode: "https://github.com/urnisha19/Penguin-Fashion/",
      liveSite: "https://urnisha19.github.io/Penguin-Fashion/index.html",
    },
    {
      title: "Flight Booking",
      description:
        "Front-end web page design integrating JavaScript with HTML and CSS for booking flights with details.",
      image: flight,
      sourceCode: "https://github.com/urnisha19/Flight-Booking/",
      liveSite: "https://urnisha19.github.io/Flight-Booking/index.html",
    },
  ];

  return (
    <section className="projects py-12 mx-4 md:mx-16 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-3 text-purple-700">My Works</h1>
        <hr className="mx-auto w-1/2 border-t-2 border-steelBlue" />
        <hr className="mx-auto w-1/3 border-t-2 border-steelBlue my-4" />
        <div className="flex flex-wrap justify-center">
          {projects.map((project, index) => (
            <article
              key={index}
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
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="card-text text-gray-700 mb-6 flex-grow">{project.description}</p>
                  <div className="flex justify-center space-x-4 mt-auto">
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn bg-purple-500 text-white hover:bg-gray-700 px-4 py-2 rounded-lg transition"
                      aria-label={`Source code for ${project.title}`}
                    >
                      Source Code
                    </a>
                    <a
                      href={project.liveSite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn bg-purple-500 text-white hover:bg-gray-700 px-4 py-2 rounded-lg transition"
                      aria-label={`Live site for ${project.title}`}
                    >
                      Live Site
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
