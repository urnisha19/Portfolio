import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-lavender mb-5 py-4 shadow-md mx-2 relative z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" aria-label="Home" onClick={closeMenu}>
          <img src={logo} alt="Nahia Nowreen Urnisha Logo" className="h-10" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 font-semibold text-gray-700">
          <Link to="/" className="hover:text-rebeccapurple transition-colors duration-300">Home</Link>
          <Link to="/projects" className="hover:text-rebeccapurple transition-colors duration-300">Projects</Link>
          <Link to="/about" className="hover:text-rebeccapurple transition-colors duration-300">About Me</Link>
          <Link to="/blogs" className="hover:text-rebeccapurple transition-colors duration-300">Blogs</Link>
          <Link to="/contacts" className="hover:text-rebeccapurple transition-colors duration-300">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden text-gray-700 hover:text-rebeccapurple focus:outline-none focus:ring-2 focus:ring-rebeccapurple rounded"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Links */}
      <div className={`md:hidden absolute w-full bg-lavender shadow-md transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-60 py-4 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 space-y-3 font-semibold text-gray-700 text-center">
          <Link to="/" onClick={closeMenu} className="block hover:text-rebeccapurple transition-colors duration-300">Home</Link>
          <Link to="/projects" onClick={closeMenu} className="block hover:text-rebeccapurple transition-colors duration-300">Projects</Link>
          <Link to="/about" onClick={closeMenu} className="block hover:text-rebeccapurple transition-colors duration-300">About Me</Link>
          <Link to="/blogs" onClick={closeMenu} className="block hover:text-rebeccapurple transition-colors duration-300">Blogs</Link>
          <Link to="/contacts" onClick={closeMenu} className="block hover:text-rebeccapurple transition-colors duration-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;