
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
    <section className="bg-white py-12 mx-10">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
        <div className="flex flex-wrap justify-center">
          {skills.map((skill, index) => (
            <div key={index} className="m-4">
              <span className="block w-20 h-20 p-5">
                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
              </span>
              <p className="mt-2 text-gray-700">{skill.name}</p>
            </div>
          ))}
        </div>
        <hr className="mt-6 w-1/2 mx-auto border-gray-300" />
      </div>
    </section>
  );
};

export default Skills;
