import profile2 from '../../assets/Urnisha_bg2.jpg';

const AboutPage = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <h1 className="text-4xl font-bold text-purple-700 mb-3">About me</h1>
                <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={profile2} />
                <div className="text-center lg:w-2/3 w-full">
                    <h5 className="text-xl text-purple-700">Hello! I'm</h5>
                    <h2 className="text-2xl font-bold text-purple-700 mb-3">Nahia Nowreen Urnisha</h2>
                    <p className="py-3 text-gray-700 leading-relaxed text-lg">
                        I recently completed my Bachelor’s degree in Computer Science and Engineering from Metropolitan University, where I cultivated a strong foundation in software development and web technologies.
                        <br /><br />
                        🎯 Throughout my academic journey, I developed a diverse skill set spanning multiple programming languages such as Python, C, and C++. My proficiency extends to web development with expertise in HTML, CSS, JavaScript, and the MERN stack. I have successfully completed numerous personal projects, highlighting my ability to manage the full spectrum of development tasks, from initial design to deployment, and demonstrating my capability to implement complex features such as Firebase JWT authentication and CRUD operations.
                        <br /><br />
                        🏆 Throughout my journey, I have been recognized for my achievements and contributions to the field. I was awarded the Black Belt in Complete Web Development from Programming Hero and received the Chairman’s Scholarship at Metropolitan University for academic excellence. My research on facial emotion recognition using deep learning was published in the International Journal of Research and Scientific Innovation, further validating my expertise and passion for innovative problem-solving.
                        <br /><br />
                        🌱 Beyond my technical skills, I am a firm believer in the power of collaboration and continuous learning. I am proficient in tools and platforms such as VSCode, GitHub, and ChatGPT, which enhance my productivity and streamline development processes. My strong communication skills, coupled with my technical expertise, make me a valuable asset in any collaborative environment.
                        <br /><br />
                        📌 I am eager to connect with like-minded professionals and explore opportunities to drive innovation together. Let's connect and see how we can create impactful solutions in the world of technology.
                        <br /><br />
                        📧 Feel free to reach out to me at <a href="mailto:urnisha09@gmail.com" className="text-purple-700 hover:underline">urnisha09@gmail.com</a>
                    </p>
                    <div className="flex justify-center mt-5">
                        <a href="https://drive.google.com/file/d/1CK7nj4f5Zw4h8zzEobGJdRAUZS0Us5fK/view?usp=sharing">
                            <button type="button" className="btn bg-gray-800 text-white hover:bg-gray-700 py-2 px-4 rounded">Download My Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
