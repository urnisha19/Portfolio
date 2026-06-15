import {
  faGithubSquare,
  faLinkedin,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import profile from "../../assets/profile.jpg";

const TopBanner = () => {
  return (
    <section className="bg-white py-12 overflow-hidden">
      <div className="container mx-auto text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mt-3 text-rebeccapurple"
        >
          Nahia Nowreen Urnisha
        </motion.h1>

        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          // 🟢 হোভার ইফেক্ট অ্যাড করা হয়েছে (hover:scale-105)
          className="w-40 md:w-48 mx-auto my-4 rounded-lg shadow-lg object-cover transition-transform duration-300 hover:scale-105"
          src={profile}
          alt="Nahia Nowreen Urnisha Profile"
        />

        <motion.h4
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-rebeccapurple font-bold text-xl md:text-2xl"
        >
          Full-Stack Web Developer
        </motion.h4>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          // 🟢 leading-relaxed অ্যাড করা হয়েছে সুন্দর রিডেবিলিটির জন্য
          className="mx-auto mt-4 font-medium text-lg max-w-3xl text-gray-700 leading-relaxed"
        >
          A passionate Full-Stack Web Developer, specializing in building
          secure, scalable applications using the MERN stack and developing
          custom B2B portals with Odoo ERP.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6"
        >
          <a
            href="https://drive.google.com/file/d/1HyjiwbPxLCEm0V9hGUvn7VH_hBt_3dhK/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* 🟢 হোভার শ্যাডো (hover:shadow-lg) অ্যাড করা হয়েছে */}
            <button className="border-2 border-rebeccapurple text-lg font-semibold px-6 py-2 rounded-md hover:bg-rebeccapurple hover:text-white hover:shadow-lg transition-all duration-300">
              Resume
            </button>
          </a>
        </motion.div>

        <p className="text-center mt-8 mb-4 font-semibold text-gray-600">
          Let's Connect
        </p>

        <div className="flex justify-center space-x-6 text-gray-600">
          <a
            href="https://www.linkedin.com/in/urnisha199/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl transition-transform duration-500 hover:text-rebeccapurple hover:rotate-[360deg]"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/urnisha19"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl transition-transform duration-500 hover:text-rebeccapurple hover:rotate-[360deg]"
          >
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
          <a
            href="https://medium.com/@urnisha09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl transition-transform duration-500 hover:text-rebeccapurple hover:rotate-[360deg]"
          >
            <FontAwesomeIcon icon={faMediumM} />
          </a>
        </div>
        <hr className="mt-8 w-1/2 mx-auto border-gray-300" />
      </div>
    </section>
  );
};

export default TopBanner;