import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

export default function Projects() {
    // Initialize AOS animation library
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: false
        });
        Aos.refresh()
    }, []);

    // All projects data
    const allProjects = [
        {
            title: "Swaggy",
            description: "A full-featured food ordering platform with restaurant listings, cart functionality, and secure checkout.",
            tags: ["React.js",  "Firebase", "Tailwind","Stripe","TankStack Query","MongoDB","Node JS","Express JS"],
            link: "https://swaggy-ten.vercel.app/",
            github: "https://github.com/Nobleman78/Swaggy-Client",
            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        },
        {
            title: "Amazon Clone",
            description: "A complete e-commerce platform with product listings, cart functionality, and user authentication.",
            tags: ["React.js", "Firebase", "Context API", "Stripe", "Tailwind CSS"],
            link: "https://amazon-delta-puce.vercel.app/",
            github: "https://github.com/Nobleman78/My-Commerce",
            image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        },
        {
            title: "Spotify Explore",
            description: "A music discovery app that helps users explore new artists and tracks based on their preferences.",
            tags: ["React", "Tailwind", "Context API"],
            link: "https://spotify-explore-three.vercel.app/",
            github: "https://github.com/Nobleman78/Spotify-Explore",
            image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        },
    
    ];

    const [visibleProjects, setVisibleProjects] = useState(3);

  

    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                            Featured Projects
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl ">
                        Showcase of my best work with modern technologies and clean code
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allProjects.slice(0, visibleProjects).map((project, index) => (
                        <div 
                            key={index} 
                            className="group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-5">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span 
                                            key={i} 
                                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <a 
                                        href={project.link} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg text-sm font-medium transition-all duration-300 shadow hover:shadow-md"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l3-2z" clipRule="evenodd" />
                                        </svg>
                                        Live Demo
                                    </a>
                                    <a 
                                        href={project.github} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* {allProjects.length > 3 && (
                    <div className="text-center mt-12" data-aos="fade-up">
                        <button
                            onClick={toggleProjects}
                            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            {visibleProjects === 3 ? 'Show More Projects' : 'Show Less'}
                        </button>
                    </div>
                )} */}
            </div>
        </section>
    );
}