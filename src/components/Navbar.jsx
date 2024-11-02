// import logo from "../assets/raviKumarLogo.webp"
// import logo from "../assets/adityaanandlogo.jpg"
// import logo from "../assets/adityaanandlogo2.png"
import logo from "../assets/adityaanandlogo-removebg-preview.png"
import {FaGithub, FaInstagram, FaLinkedin, FaTwitterSquare} from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
            <img src={logo} className="mx-0" width ={150} height = {100} alt = "Logo"/>
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/aditya-anand-20d02/"
            target="_blank"
            rel = "noopener noreferrer"
            aria-label = "Linkedin">
                <FaLinkedin />
            </a>
            <a href="https://www.linkedin.com/in/aditya-anand-20d02/"
            target="_blank"
            rel = "noopener noreferrer"
            aria-label = "Github">
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/aditya-anand-20d02/"
            target="_blank"
            rel = "noopener noreferrer"
            aria-label = "Instagram">
                <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/aditya-anand-20d02/"
            target="_blank"
            rel = "noopener noreferrer"
            aria-label = "Twitter">
                <FaTwitterSquare />
            </a>
        </div>
    </nav>
  )
}

export default Navbar
