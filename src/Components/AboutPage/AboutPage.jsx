import { motion } from 'framer-motion';
import profile2 from '../../assets/profile.jpg';

const AboutPage = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="text-gray-600 body-font bg-white py-12 mx-4 md:mx-16">
      <div className="container mx-auto flex flex-col items-center justify-center mb-12">
        <h1 className="text-4xl font-bold text-purple-700 mb-10">About Me</h1>
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-48 md:w-64 lg:w-64 mb-3 object-cover object-center rounded-lg shadow-lg"
          alt="Nahia Nowreen Urnisha"
          src={profile2}
          loading="eager"
        />
      </div>

      <div className="container mx-auto px-5 text-center max-w-4xl space-y-12">

        {/* Professional Experience & Skills Section */}
        <motion.section
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="card bg-white hover:bg-lavender shadow-lg transition transform hover:-translate-y-2 rounded-lg overflow-hidden p-6"
        >
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            Professional Experience & Skills
          </h2>
          <p className="leading-relaxed text-gray-700 text-lg">
            🎯 As a Computer Science graduate and Full-Stack Web Developer, I have
            hands-on experience building secure, scalable applications using the MERN
            stack. Recently, I worked professionally to engineer a custom B2B
            e-commerce portal using Odoo ERP, seamlessly bridging complex business
            logic with user-centric interfaces. I am passionate about staying at the
            forefront of technology and am always eager to utilize my technical
            expertise to drive impactful projects.
          </p>
        </motion.section>

        {/* Education Section */}
        <motion.section
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="card bg-white hover:bg-lavender shadow-lg transition transform hover:-translate-y-2 rounded-lg overflow-hidden p-6"
        >
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Education</h2>
          <p className="leading-relaxed text-gray-700 text-lg">
            🎓 I hold a Bachelor's degree in Computer Science and Engineering from
            Metropolitan University. My academic journey provided me with a strong
            foundation in core programming concepts and software architecture, which
            formed the foundation for my journey into modern full-stack web
            development.
          </p>
        </motion.section>

        {/* Achievements Section */}
        <motion.section
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="card bg-white hover:bg-lavender shadow-lg transition transform hover:-translate-y-2 rounded-lg overflow-hidden p-6"
        >
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Achievements</h2>
          <p className="leading-relaxed text-gray-700 text-lg">
            🏆 I was awarded the Black Belt in Complete Web Development from
            Programming Hero and received the Chairman's Scholarship for academic
            excellence. Additionally, my research on facial emotion recognition using
            deep learning was published in the International Journal of Research and
            Scientific Innovation.
          </p>
        </motion.section>

        {/* Workflow & Tools Section */}
        <motion.section
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="card bg-white hover:bg-lavender shadow-lg transition transform hover:-translate-y-2 rounded-lg overflow-hidden p-6"
        >
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            Workflow & Tools
          </h2>
          <p className="leading-relaxed text-gray-700 text-lg">
            🌱 I believe in writing clean, maintainable code and optimizing
            workflows. I am highly proficient in modern development tools including
            Git/GitHub, Postman, Vercel, and various AI-assisted development tools
            to accelerate problem-solving and deliver high-quality products
            efficiently.
          </p>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="card bg-white hover:bg-lavender shadow-lg transition transform hover:-translate-y-2 rounded-lg overflow-hidden p-6"
        >
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Contact</h2>
          <p className="leading-relaxed text-gray-700 text-lg">
            📌 I am always eager to connect with like-minded professionals and
            explore opportunities to drive innovation together. Let's build something
            amazing!
            <br />
            <br />
            📧 Feel free to reach out to me at{' '}
            <a
              href="mailto:urnisha09@gmail.com"
              className="text-purple-700 hover:underline font-semibold"
            >
              urnisha09@gmail.com
            </a>
          </p>
          <div className="flex justify-center mt-8">
            <a
              href="https://drive.google.com/uc?export=download&id=1HyjiwbPxLCEm0V9hGUvn7VH_hBt_3dhK"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="bg-gray-800 text-white hover:bg-gray-700 py-2 px-6 rounded-lg text-lg transition shadow-md"
              >
                Download My Resume
              </button>
            </a>
          </div>
        </motion.section>

      </div>
    </section>
  );
};

export default AboutPage;
