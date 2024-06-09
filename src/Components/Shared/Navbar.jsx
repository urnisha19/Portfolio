import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const Navbar = () => {
    return (
        <nav className="bg-lavender mb-5 py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/">
                    <img src={logo} alt="logo" className="h-10" />
                </Link>
                <div className="hidden md:flex space-x-8">
                    <Link to="/" className="navBar-link">Home</Link>
                    <Link to="/projects" className="navBar-link">Projects</Link>
                    <Link to="/about" className="navBar-link">About Me</Link>
                    <Link to="/contacts" className="navBar-link">Contact Me</Link>
                    <Link to="/blogs" className="navBar-link">Blogs</Link>
                </div>
                <button className="block md:hidden">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
            <div className="md:hidden">
                <Link to="/" className="block navBar-link">Home</Link>
                <Link to="/projects" className="block navBar-link">Projects</Link>
                <Link to="/about" className="block navBar-link">About Me</Link>
                <Link to="/contacts" className="block navBar-link">Contact Me</Link>
                <Link to="/blogs" className="block navBar-link">Blogs</Link>
            </div>
        </nav>
    );
};

export default Navbar;
