import { faGithubSquare, faLinkedin, faMediumM } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="text-center text-gray-600 mt-16 pb-6">
      <hr className="mx-auto w-1/2 mt-4 border-gray-300" />
      
      <p className="text-sm mt-4">
        © Designed & Built by{' '}
        <a
          href="https://www.linkedin.com/in/urnisha199/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-rebeccapurple hover:text-purple-500 transition-colors duration-300 font-semibold"
        >
          Nahia Nowreen Urnisha
        </a>
      </p>
      
      <section className="py-8">
        <p className="text-sm mb-3 font-semibold">Connect With Me</p>
        <div className="flex justify-center space-x-6 text-gray-500">
          <a
            href="https://www.linkedin.com/in/urnisha199/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-rebeccapurple text-2xl transition-transform duration-500 transform hover:rotate-360"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/urnisha19"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-600 hover:text-rebeccapurple text-2xl transition-transform duration-500 transform hover:rotate-360"
          >
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
          <a
            href="https://medium.com/@urnisha09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium"
            className="text-gray-600 hover:text-rebeccapurple text-2xl transition-transform duration-500 transform hover:rotate-360"
          >
            <FontAwesomeIcon icon={faMediumM} />
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
