import { faGithubSquare, faLinkedin, faMediumM } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className="text-center text-gray-500 pb-3 mt-16">
      <hr className="mx-auto w-1/2 mt-4" />
      <p className="text-sm">
        @Designed & Built by{' '}
        <a
          href="https://www.linkedin.com/in/urnisha199/"
          className="text-purple-700 hover:text-purple-500 transition-colors duration-300"
        >
          Nahia Nowreen Urnisha
        </a>
      </p>
      <section className="text-center py-8">
      <p className="text-sm">Connect With Me</p>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/urnisha199/" className="text-slategray hover:text-purple-700 mx-2 text-2xl transition-transform duration-500 transform hover:rotate-360">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/urnisha19" className="text-slategray hover:text-purple-700 mx-2 text-2xl transition-transform duration-500 transform hover:rotate-360">
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
          <a href="https://medium.com/@urnisha09" className="text-slategray hover:text-purple-700 mx-2 text-2xl transition-transform duration-500 transform hover:rotate-360">
            <FontAwesomeIcon icon={faMediumM} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Footer;
