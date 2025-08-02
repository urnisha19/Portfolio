import { faGithubSquare, faLinkedin, faMediumM } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profile from '../../assets/profile.jpg';

const TopBanner = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl font-bold mt-3 text-rebeccapurple">Nahia Nowreen Urnisha</h1>

        <img
          className="w-40 md:w-48 mx-auto my-4 rounded-lg shadow-lg object-cover"
          src={profile}
          alt="Nahia Nowreen Urnisha Profile"
        />

        <h4 className="text-rebeccapurple font-bold animate-pulse text-xl md:text-2xl">Web Developer</h4>

        <p className="mx-auto mt-4 font-medium text-lg max-w-3xl text-gray-700">
          I am a Web Developer dedicated to continuous learning and self-development. 
          I believe web development allows me to showcase my creativity by leveraging my skills and talents effectively.
        </p>

        <div className="mt-6">
          <a
            href="https://drive.google.com/file/d/1HyjiwbPxLCEm0V9hGUvn7VH_hBt_3dhK/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border-2 border-rebeccapurple text-lg font-semibold px-6 py-2 rounded-md hover:bg-rebeccapurple hover:text-white transition-colors duration-300">
              Resume
            </button>
          </a>
        </div>

        <p className="text-center mt-8 mb-4 font-semibold text-gray-600">Let's Connect</p>

        <div className="flex justify-center space-x-6 text-gray-600">
          <a
            href="https://www.linkedin.com/in/urnisha199/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-2xl transition-transform duration-500 hover:text-rebeccapurple hover:rotate-360"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/urnisha19"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-2xl transition-transform duration-500 hover:text-rebeccapurple hover:rotate-360"
          >
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
          <a
            href="https://medium.com/@urnisha09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium"
            className="text-2xl transition-transform duration-500 hover:text-rebeccapurple hover:rotate-360"
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
