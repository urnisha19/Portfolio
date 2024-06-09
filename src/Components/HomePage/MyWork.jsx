import weCare from '../../assets/Projects/WeCare.png';
import sparkSkill from '../../assets/Projects/sparkSkill.png';
import techTutorium from '../../assets/Projects/techTutorium.png';
import hungry from '../../assets/Projects/Hungry Monster.png';
import penguin from '../../assets/Projects/Penguin Fashion.png';
import weather from '../../assets/Projects/Weather.png';
import flight from '../../assets/Projects/Flight Booking.png';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight } from "react-icons/fa";

const MyWork = () => {
    return (
        <div className="mx-16">
        <h2 className="text-2xl font-bold mb-6  text-center">My Works</h2>
            <div className="carousel carousel-center rounded-box bg-lavender p-5">
                <div className="carousel-item mr-4">
                    <img src={techTutorium} style={{ width: '250px', height: '280px' }} />
                </div>
                <div className="carousel-item mr-4">
                    <img src={weCare} style={{ width: '250px', height: '280px' }} />
                </div>
                <div className="carousel-item mr-3">
                    <img src={weather} style={{ width: '250px', height: '280px' }} />
                </div>
                <div className="carousel-item mr-3">
                    <img src={sparkSkill} style={{ width: '250px', height: '280px' }} />
                </div>
                <div className="carousel-item mr-3">
                    <img src={penguin} style={{ width: '250px', height: '280px' }} />
                </div>
                <div className="carousel-item mr-3">
                    <img src={flight} style={{ width: '250px', height: '280px' }} />
                </div>
                <div className="carousel-item mr-3">
                    <img src={hungry} style={{ width: '250px', height: '280px' }} />
                </div>
            </div>
            <Link to="/projects" className="btn my-5 flex items-center bg-lavender hover:text-purple-700">
                <p className="text-xl mr-2">See my projects</p>
                <FaArrowAltCircleRight />
            </Link>

        </div>
    );
};

export default MyWork;