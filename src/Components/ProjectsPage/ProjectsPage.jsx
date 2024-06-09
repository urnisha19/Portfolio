import weCare from '../../assets/Projects/WeCare.png';
import sparkSkill from '../../assets/Projects/sparkSkill.png';
import techTutorium from '../../assets/Projects/techTutorium.png';
import hungry from '../../assets/Projects/Hungry Monster.png';
import penguin from '../../assets/Projects/Penguin Fashion.png';
import weather from '../../assets/Projects/Weather.png';
import flight from '../../assets/Projects/Flight Booking.png';

const ProjectsPage = () => {
    const projects = [
        {
            title: 'We Care',
            description: 'Developed a responsive MERN stack web app for mental health services. Users can explore, schedule appointments, and provide feedback. Admins manage services and appointments seamlessly.',
            image: weCare,
            sourceCode: 'https://github.com/urnisha19/We-Care',
            liveSite: 'https://we-care-seven.vercel.app/'
        },
        {
            title: 'Spark Skill',
            description: 'Developed a responsive MERN stack web app for providing dynamic IT courses. Users can explore courses, enroll in courses, and provide feedback. Admins manage courses and enrollment seamlessly.',
            image: sparkSkill,
            sourceCode: 'https://github.com/urnisha19/Spark-Skill-cilent',
            liveSite: 'https://spark-skill-cilent.vercel.app'
        },
        {
            title: 'TechTutorium',
            description: 'Developed a dynamic web application utilizing the MERN stack, showcasing proficiency in React.js, Node.js, Express.js, and MongoDB, implementing robust CRUD operations and user authentication features.',
            image: techTutorium,
            sourceCode: 'https://github.com/urnisha19/TechTutorium',
            liveSite: 'https://tech-tutorium.vercel.app/'
        },
        {
            title: 'Hungry Monster',
            description: 'An API-based front-end web page to search and find a large list of your desired meals.',
            image: hungry,
            sourceCode: 'https://github.com/urnisha19/Hungry-Monster',
            liveSite: 'https://urnisha19.github.io/Hungry-Monster/index.html'
        },
        {
            title: 'Weather App',
            description: 'An Api based web app for detecting current temperature of a searched place.',
            image: weather,
            sourceCode: 'https://github.com/urnisha19/Weather',
            liveSite: 'https://urnisha19.github.io/Weather/index.html'
        },
        {
            title: 'Penguin Fashion',
            description: 'An e-commerce web page design with HTML, CSS for fashion accessories.',
            image: penguin,
            sourceCode: 'https://github.com/urnisha19/Penguin-Fashion/',
            liveSite: 'https://urnisha19.github.io/Penguin-Fashion/index.html'
        },
        {
            title: 'Flight Booking',
            description: 'A front-end web page design integrating Javascript with HTML, CSS for booking flights with details.',
            image: flight,
            sourceCode: 'https://github.com/urnisha19/Flight-Booking/',
            liveSite: 'https://urnisha19.github.io/Flight-Booking/index.html'
        }
    ];

    return (
        <div>
            <section className="projects py-12 mx-16">
                <div className="container mx-auto">
                    <h1 className="text-center text-4xl font-bold mb-3 text-purple-700">My Works</h1>
                    <hr className="mx-auto w-1/2 border-t-2 border-steelBlue" />
                    <hr className="mx-auto w-1/3 border-t-2 border-steelBlue my-4" />
                    <div className="flex flex-wrap justify-center">
                        {projects.map((project, index) => (
                            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                                <div className="card bg-white hover:bg-lavender shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 rounded-lg overflow-hidden">
                                    <img className="card-img-top w-full h-48 object-cover" src={project.image} alt={project.title} />
                                    <div className="card-body p-4">
                                        <h5 className="card-title text-xl font-semibold mb-2">{project.title}</h5>
                                        <p className="card-text text-gray-700 mb-4">{project.description}</p>
                                        <div className="flex justify-between">
                                            <a href={project.sourceCode} className="btn bg-gray-800 text-white hover:bg-gray-700 px-4 py-2 rounded-lg">Source Code</a>
                                            <a href={project.liveSite} className="btn bg-gray-800 text-white hover:bg-gray-700 px-4 py-2 rounded-lg">Live Site</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectsPage;
