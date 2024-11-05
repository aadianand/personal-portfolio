// import project1 from "../assets/projects/project-1.webp";
import project1 from "../assets/projects/project1.png";
// import project2 from "../assets/projects/project-2.webp";
import project2 from "../assets/projects/project2.png";
// import project3 from "../assets/projects/project-3.webp";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a MERN Stack Developer with a passion for building scalable web applications. I have honed my skills in front-end technologies like React, HTML , CSS , Tailwind CSS and JavaScript , as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 August",
    role: "React.JS Crash Course: The Complete Course for Beginners",
    company: "Udemy",
    description: `This React JS certification course teaches you to build responsive, user-friendly web apps using React fundamentals, JSX, components, and lifecycle methods. Ideal for all levels, it combines hands-on projects and quizzes for a practical learning experience in front-end development.`,
    technologies: [],
    link: "https://www.udemy.com/certificate/UC-75358788-cbd2-424e-8e25-8b336c8ace85/"
  },
  {
    year: "2024 August",
    role: "CSS And JavaScript Complete Course For Beginners",
    company: "Udemy",
    description: `This course covers CSS and JavaScript fundamentals for beginners, including CSS styling, 2D/3D transformations, and animations, as well as JavaScript basics like variables, functions, and control statements. With hands-on practice, it provides a solid foundation for web design and development.`,
    technologies: [],
    link: "https://www.udemy.com/certificate/UC-7ab763da-e6aa-459d-98d1-52c2d818d418/"
  },
  {
    year: "2024 August",
    role: " TailwindCSS from A to Z",
    company: "udemy",
    description: `This course offers a hands-on introduction to Tailwind CSS, a utility-first framework for building responsive, professional web designs. Learners will master Tailwind’s basics, including grids, flexbox, animations, and custom components, to create clean, modern layouts quickly. Ideal for beginners with HTML and CSS basics, the course empowers students to design visually appealing, customizable websites efficiently.`,
    technologies: [],
    link: "https://www.udemy.com/certificate/UC-e7dc30a8-3598-4204-9b38-d14650314d5e/"
  },
  {
    year: "2024 August",
    role: "Foundations of Web Development",
    company: "Udemy",
    description: `This beginner course covers web development essentials, including CSS, Bootstrap, JavaScript, and React. Students will learn to style websites, create responsive layouts, and build interactive features. The course provides hands-on experience with components and props in React, equipping learners with the skills to develop modern web applications.`,
    technologies: [],
    link: "https://www.udemy.com/certificate/UC-c79e7b00-4648-44ec-a861-9d105b35e770/"
  },
  {
    year: "2024 August",
    role: "The Git & GitHub Bootcamp: The Complete-Practical Guide",
    company: "Udemy",
    description: `This course provides a comprehensive introduction to Git and GitHub, focusing on key features like commits, branching, and collaboration. Students will learn to manage version control and contribute to open-source projects effectively. Perfect for beginners and aspiring developers, it equips learners with essential skills for modern software development.`,
    technologies: [],
    link: "https://www.udemy.com/certificate/UC-75de89b1-9d77-446f-aa74-5c49ecb71c49/"
  },
];

export const PROJECTS = [
  {
    title: "Real Time Chat Application",
    image: project1,
    description:
      "I developed a real-time chat application with React.js and Firebase Firestore, featuring secure user authentication via Firebase. The app includes an emoji picker, image sharing, and auto-scrolling for an enhanced user experience. I utilized Zustand for managing user data and chat history and implemented a responsive UI with real-time notifications using React Toastify.",
    technologies: ["HTML", "Tailwind CSS", "React", "Firebase", "Zustand"],
    link: "https://react-firebase-chat-aadi.vercel.app/"
  },
  {
    title: "Food Ordering App",
    image: project2,
    description:
      "I developed a responsive food delivery app using React JS, utilizing Context API for efficient state management. The app features a dynamic Food Display component with add-to-cart functionality and category filtering, along with cart functionality for reviewing items before checkout. It includes user-friendly login and signup pages, a delivery information page for streamlined ordering, and applies responsive design principles for accessibility across devices.",
    technologies: ["HTML", "Tailwind CSS", "React", "Context API"],
    link: "https://zwiggy-two.vercel.app/"
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "I developed a responsive portfolio site using React.js, styled with Tailwind CSS for a modern design that adapts to various screen sizes. I integrated Framer Motion for smooth animations and transitions, enhancing user engagement. Key sections include a Navbar, Hero Section, Technologies Section, Projects Section, and Certifications Section to effectively showcase my skills and qualifications.",
    technologies: ["HTML", "CSS", "React", "Framer Motion"],
    link: ""
  },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  //   link: ""
  // },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
