import profile2 from '../../assets/Urnisha_bg2.jpg';

const AboutPage = () => {
    return (
        <section className="text-gray-600 body-font bg-white py-12 mx-16">
            <div className="container mx-auto flex flex-col items-center justify-center mb-12">
                <h1 className="text-4xl font-bold text-purple-700 mb-10">About Me</h1>
                <img className="w-48 md:w-64 lg:w-64 mb-10 object-cover object-center rounded-lg shadow-lg" alt="profile" src={profile2} />
                {/* <h2 className="text-3xl font-bold text-purple-700 mb-3">Nahia Nowreen Urnisha</h2> */}
            </div>

            <div className="container mx-auto px-5 text-center">
                {/* Education Section */}
                <div className="mb-12">
                    <div className="card bg-white hover:bg-lavender shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 rounded-lg overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-purple-700 mb-4">Education</h3>
                            <p className="leading-relaxed text-gray-700 text-lg">
                                I recently completed my Bachelor’s degree in Computer Science and Engineering from Metropolitan University, where I cultivated a strong foundation in software development and web technologies.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mb-12">
                    <div className="card bg-white hover:bg-lavender shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 rounded-lg overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-purple-700 mb-4">Skills</h3>
                            <p className="leading-relaxed text-gray-700 text-lg">
                                🎯 Throughout my academic journey, I developed a diverse skill set spanning multiple programming languages such as Python, C, and C++. My proficiency extends to web development with expertise in HTML, CSS, JavaScript, and the MERN stack. I have successfully completed numerous personal projects, highlighting my ability to manage the full spectrum of development tasks, from initial design to deployment, and demonstrating my capability to implement complex features such as Firebase JWT authentication and CRUD operations.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Achievements Section */}
                <div className="mb-12">
                    <div className="card bg-white hover:bg-lavender shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 rounded-lg overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-purple-700 mb-4">Achievements</h3>
                            <p className="leading-relaxed text-gray-700 text-lg">
                                🏆 Throughout my journey, I have been recognized for my achievements and contributions to the field. I was awarded the Black Belt in Complete Web Development from Programming Hero and received the Chairman’s Scholarship at Metropolitan University for academic excellence. My research on facial emotion recognition using deep learning was published in the International Journal of Research and Scientific Innovation, further validating my expertise and passion for innovative problem-solving.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Technical Tools Section */}
                <div className="mb-12">
                    <div className="card bg-white hover:bg-lavender shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 rounded-lg overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-purple-700 mb-4">Technical Tools</h3>
                            <p className="leading-relaxed text-gray-700 text-lg">
                                🌱 Beyond my technical skills, I am a firm believer in the power of collaboration and continuous learning. I am proficient in tools and platforms such as VSCode, GitHub, and ChatGPT, which enhance my productivity and streamline development processes. My strong communication skills, coupled with my technical expertise, make me a valuable asset in any collaborative environment.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="mb-12">
                    <div className="card bg-white hover:bg-lavender shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 rounded-lg overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-purple-700 mb-4">Contact</h3>
                            <p className="leading-relaxed text-gray-700 text-lg">
                                📌 I am eager to connect with like-minded professionals and explore opportunities to drive innovation together. Let's connect and see how we can create impactful solutions in the world of technology.
                                <br /><br />
                                📧 Feel free to reach out to me at <a href="mailto:urnisha09@gmail.com" className="text-purple-700 hover:underline">urnisha09@gmail.com</a>
                            </p>
                            <div className="flex justify-center mt-8">
                                <a href="https://drive.google.com/file/d/15cTr-O9J17pB738llkNnnoYwuwbesI50/view?usp=sharing" target='_blank' rel="noopener noreferrer">
                                    <button type="button" className="bg-gray-800 text-white hover:bg-gray-700 py-2 px-6 rounded-lg text-lg">Download My Resume</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
