import profile2 from '../../assets/profile.jpg';

const AboutPage = () => {
  return (
    <section className="text-gray-600 body-font bg-white py-12 mx-4 md:mx-16">
      <div className="container mx-auto flex flex-col items-center justify-center mb-12">
        <h1 className="text-4xl font-bold text-purple-700 mb-10">About Me</h1>
        <img
          className="w-48 md:w-64 lg:w-64 mb-3 object-cover object-center rounded-lg shadow-lg"
          alt="Nahia Nowreen Urnisha"
          src={profile2}
          loading="lazy"
        />
      </div>

      <div className="container mx-auto px-5 text-center max-w-4xl space-y-12">
        {/* Education Section */}
        <section
          className="card bg-white hover:bg-lavender shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 rounded-lg overflow-hidden p-6"
          aria-labelledby="education-heading"
        >
          <h2 id="education-heading" className="text-2xl font-bold text-purple-700 mb-4">
            Education
          </h2>
          <p className="leading-relaxed text-gray-700 text-lg">
            I recently completed my Bachelor’s degree in Computer Science and Engineering from Metropolitan University, where I cultivated a strong foundation in software development and web technologies.
          </p>
        </section>

        {/* Skills Section */}
        <section
          className="card bg-white hover:bg-lavender shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 rounded-lg overflow-hidden p-6"
          aria-labelledby="skills-heading"
        >
          <h2 id="skills-heading" className="text-2xl font-bold text-purple-700 mb-4">
            Skills
          </h2>
          <p className="leading-relaxed text-gray-700 text-lg">
            🎯 Throughout my academic journey, I developed a diverse skill set spanning multiple programming languages such as Python, C, and C++. My proficiency extends to web development with expertise in HTML, CSS, JavaScript, and the MERN stack. I have successfully completed numerous personal projects, highlighting my ability to manage the full spectrum of development tasks, from initial design to deployment, and demonstrating my capability to implement complex features such as Firebase JWT authentication and CRUD operations.
          </p>
        </section>

        {/* Achievements Section */}
        <section
          className="card bg-white hover:bg-lavender shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 rounded-lg overflow-hidden p-6"
          aria-labelledby="achievements-heading"
        >
          <h2 id="achievements-heading" className="text-2xl font-bold text-purple-700 mb-4">
            Achievements
          </h2>
          <p className="leading-relaxed text-gray-700 text-lg">
            🏆 Throughout my journey, I have been recognized for my achievements and contributions to the field. I was awarded the Black Belt in Complete Web Development from Programming Hero and received the Chairman’s Scholarship at Metropolitan University for academic excellence. My research on facial emotion recognition using deep learning was published in the International Journal of Research and Scientific Innovation, further validating my expertise and passion for innovative problem-solving.
          </p>
        </section>

        {/* Technical Tools Section */}
        <section
          className="card bg-white hover:bg-lavender shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 rounded-lg overflow-hidden p-6"
          aria-labelledby="tools-heading"
        >
          <h2 id="tools-heading" className="text-2xl font-bold text-purple-700 mb-4">
            Technical Tools
          </h2>
          <p className="leading-relaxed text-gray-700 text-lg">
            🌱 Beyond my technical skills, I am a firm believer in the power of collaboration and continuous learning. I am proficient in tools and platforms such as VSCode, GitHub, and ChatGPT, which enhance my productivity and streamline development processes. My strong communication skills, coupled with my technical expertise, make me a valuable asset in any collaborative environment.
          </p>
        </section>

        {/* Contact Section */}
        <section
          className="card bg-white hover:bg-lavender shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 rounded-lg overflow-hidden p-6"
          aria-labelledby="contact-heading"
        >
          <h2 id="contact-heading" className="text-2xl font-bold text-purple-700 mb-4">
            Contact
          </h2>
          <p className="leading-relaxed text-gray-700 text-lg">
            📌 I am eager to connect with like-minded professionals and explore opportunities to drive innovation together. Let's connect and see how we can create impactful solutions in the world of technology.
            <br />
            <br />
            📧 Feel free to reach out to me at{' '}
            <a href="mailto:urnisha09@gmail.com" className="text-purple-700 hover:underline">
              urnisha09@gmail.com
            </a>
          </p>
          <div className="flex justify-center mt-8">
            <a
              href="https://drive.google.com/file/d/1HyjiwbPxLCEm0V9hGUvn7VH_hBt_3dhK/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="bg-gray-800 text-white hover:bg-gray-700 py-2 px-6 rounded-lg text-lg transition"
              >
                Download My Resume
              </button>
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutPage;
