import { IoMail } from "react-icons/io5";
import logo from "../assets/adityaanandlogo-removebg-preview.png";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-0" width={150} height={100} alt="Logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="mailto:adityaanand20122002@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Mail"
          className="transition-transform duration-200 hover:scale-110 hover:text-blue-500"
        >
          <IoMail />
        </a>
        <a
          href="https://www.linkedin.com/in/aditya-anand-20d02/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
          className="transition-transform duration-200 hover:scale-110 hover:text-blue-700"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/aadianand"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          className="transition-transform duration-200 hover:scale-110 hover:text-gray-800"
        >
          <FaGithub />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="transition-transform duration-200 hover:scale-110 hover:text-pink-500"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="transition-transform duration-200 hover:scale-110 hover:text-blue-600"
        >
          <FaTwitterSquare />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
