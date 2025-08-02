const Skills = () => {
  const skills = [
    { name: "HTML5", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" },
    { name: "CSS3", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" },
    { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" },
    { name: "Node.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" },
    { name: "Express", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" },
    { name: "MongoDB", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" },
    { name: "Firebase", icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
    { name: "Git", icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
    { name: "TailwindCSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { name: "Bootstrap", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" },
    { name: "C", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" },
    { name: "C++", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" },
    { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
  ];

  return (
    <section className="bg-white py-12 mx-4 md:mx-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-8 text-rebeccapurple">Technical Skills</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-24 sm:w-28 md:w-32 transition-transform hover:scale-110"
              title={skill.name}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
                loading="lazy"
                draggable={false}
              />
              <p className="mt-3 text-gray-700 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
        <hr className="mt-10 w-1/2 mx-auto border-gray-300" />
      </div>
    </section>
  );
};

export default Skills;
