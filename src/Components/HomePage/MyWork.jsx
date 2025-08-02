import weCare from '../../assets/Projects/WeCare.png';
import sparkSkill from '../../assets/Projects/sparkSkill.png';
import techTutorium from '../../assets/Projects/techTutorium.png';
import hungry from '../../assets/Projects/Hungry Monster.png';
import penguin from '../../assets/Projects/Penguin Fashion.png';
import weather from '../../assets/Projects/Weather.png';
import flight from '../../assets/Projects/Flight Booking.png';
import { Link } from 'react-router-dom';

const projects = [
  { img: techTutorium, alt: "TechTutorium Project" },
  { img: weCare, alt: "WeCare Project" },
  { img: weather, alt: "Weather App Project" },
  { img: sparkSkill, alt: "Spark Skill Project" },
  { img: penguin, alt: "Penguin Fashion Project" },
  { img: flight, alt: "Flight Booking Project" },
  { img: hungry, alt: "Hungry Monster Project" },
];

const MyWork = () => {
  return (
    <div className="mx-4 md:mx-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-rebeccapurple">My Works</h2>
      <div className="carousel carousel-center rounded-box bg-lavender p-5 space-x-4 overflow-x-auto scrollbar-hide">
        {projects.map(({ img, alt }, idx) => (
          <div
            key={idx}
            className="carousel-item flex-shrink-0 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
          >
            <img
              src={img}
              alt={alt}
              className="w-60 h-72 object-cover rounded-lg"
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </div>
      <Link
        to="/projects"
        className="btn my-8 mx-auto flex w-max items-center justify-center bg-lavender px-6 py-3 text-xl font-semibold text-purple-800 hover:text-purple-700 rounded-md transition"
      >
        Click here to see my projects
      </Link>
    </div>
  );
};

export default MyWork;
