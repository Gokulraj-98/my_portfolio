import React from "react";
import employeeMSImage from "../assets/employee-ms.png";
import bookMSImage from "../assets/admin-dashboard.png";
import tourImage from "../assets/tour.png";
import landingPage from "../assets/landingPage.png";
import socialCards from "../assets/socialCards.png";
import cart from "../assets/cart.png";
const projects = [
  {
    id: 1,
    name: "Book Tours",
    technologies: "MERN Stack",
    image: tourImage,
    github: "https://github.com/Gokulraj-98/wildtours-frontend",
    uiLink: "https://clever-cobbler-2c65f0.netlify.app"
  },
  {
    id: 2,
    name: "Dashboard",
    technologies: "MERN Stack",
    image: bookMSImage,
    github: "https://github.com/Gokulraj-98/sb-admin-page",
    uiLink: "https://charming-salmiakki-9b21ce.netlify.app/",
  },

  {
    id: 3,
    name: "Employee MS",
    technologies: "MERN Stack",
    image: employeeMSImage,
    github: "https://github.com/Gokulraj-98/axios-crud",
    uiLink: "https://joyful-starship-fe7fef.netlify.app",
  },
  {
    id: 4,
    name: "Landing Page",
    technologies: "Bootsrap HTML&CSS",
    image: landingPage,
    github: "https://github.com/Gokulraj-98/landingpage",
    uiLink: "https://incredible-donut-a6052e.netlify.app/"
  },
  {
    id: 5,
    name: "Social Cards",
    technologies: "Bootsrap HTML&CSS",
    image: socialCards,
    github: "https://github.com/Gokulraj-98/social_card",
    uiLink: "https://amazing-beignet-ea9952.netlify.app/"
  },
  {
    id: 6,
    name: "Shop Cart",
    technologies: "MERN Stack",
    image: cart,
    github: "https://github.com/Gokulraj-98/shoppingcart",
    uiLink: "https://fantastic-bunny-5a400f.netlify.app/"
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800  p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank"
                rel="noopener noreferrer">GitHub</a>
              <a href={project.uiLink} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank"
                rel="noopener noreferrer">Demo</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
