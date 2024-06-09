import { faGithubSquare, faLinkedin, faMediumM } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profile from '../../assets/Urnisha_bg2.jpg';

const TopBanner = () => {
    return (
        <section className="bg-white py-12">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold mt-3">Nahia Nowreen Urnisha</h1>
                <img className="w-1/4 mx-auto my-4" src={profile} alt="Profile" />
                <h4 className="text-purple-700 font-bold animate-pulse">Web Developer</h4>
                <p className="mx-auto mt-4 font-medium text-lg w-3/4">
                    I am a Web Developer and sticking up learning and developing myself every day. 
                    I believe web development is the field where I can show my creativity by best use of my merit and skills.
                </p>
                <div className="mt-6">
                    <a href="https://drive.google.com/file/d/1f5Naq7-m4IzwdYUkV9H8Ipyoslxp9ji3/view?usp=sharing">
                        <button className="border-2 border-purple-700 text-lg font-semibold px-4 py-2 hover:bg-purple-700 hover:text-white transition-colors duration-300">
                            Resume
                        </button>
                    </a>
                </div>
                <div>
                    <p className='text-center m-3'>Let's Connect</p>
                </div>
                <div className="mt-6 space-x-4">
                    <a href="https://www.linkedin.com/in/urnisha199/">
                        <FontAwesomeIcon icon={faLinkedin} className="text-gray-500 text-2xl transition-transform duration-500 hover:text-purple-700 hover:rotate-360" />
                    </a>
                    <a href="https://github.com/urnisha19">
                        <FontAwesomeIcon icon={faGithubSquare} className="text-gray-500 text-2xl transition-transform duration-500 hover:text-purple-700 hover:rotate-360" />
                    </a>
                    <a href="https://medium.com/@urnisha09">
                        <FontAwesomeIcon icon={faMediumM} className="text-gray-500 text-2xl transition-transform duration-500 hover:text-purple-700 hover:rotate-360" />
                    </a>
                </div>
                <hr className="mt-6 w-1/2 mx-auto border-gray-300" />
            </div>
        </section>
    );
};

export default TopBanner;
