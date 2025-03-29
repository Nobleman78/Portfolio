export default function Skills() {
    const skills = [
        { 
            name: 'React', 
            level: 80, 
            icon: <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="React" className="w-6 h-6" />
        },
        { 
            name: 'JavaScript', 
            level: 80, 
            icon: <img src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" alt="JavaScript" className="w-6 h-6" />
        },
        { 
            name: 'Tailwind CSS', 
            level: 90, 
            icon: <img src="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" alt="Tailwind CSS" className="w-6 h-6" />
        },
      
        { 
            name: 'HTML', 
            level: 95, 
            icon: <img src="https://cdn.worldvectorlogo.com/logos/html-1.svg" alt="HTML" className="w-6 h-6" />
        },
        { 
            name: 'CSS', 
            level: 90, 
            icon: <img src="https://cdn.worldvectorlogo.com/logos/css-3.svg" alt="CSS" className="w-6 h-6" />
        },
        { 
            name: 'Bootstrap', 
            level: 80, 
            icon: <img src="https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg" alt="Bootstrap" className="w-6 h-6" />
        },
        { 
            name: 'Git', 
            level: 70, 
            icon: <img src="https://cdn.worldvectorlogo.com/logos/git-icon.svg" alt="Git" className="w-6 h-6" />
        },
    ]

    return (
        <section id="skills" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                            My Skills
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                        Technologies I've mastered through projects and experience
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="group" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 flex items-center justify-center">
                                        {skill.icon}
                                    </div>
                                    <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                                        {skill.name}
                                    </span>
                                </div>
                                <span className="text-blue-600 dark:text-blue-400 font-bold">
                                    {skill.level}%
                                </span>
                            </div>
                            
                            {/* Blue progress bar for expertise level */}
                            <div className="relative w-full h-3 bg-blue-400  rounded-full overflow-hidden">
                                {/* Blue portion showing expertise level */}
                                <div
                                    className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
                                    style={{ width: `${skill.level}%` }}
                                    data-aos="progress"
                                    data-aos-duration="1000"
                                    data-aos-delay={index * 100 + 200}
                                    data-aos-progress={skill.level}
                                ></div>
                                
                                {/* Gray portion for remaining percentage */}
                                <div
                                    className="absolute top-0 right-0 h-full bg-gray-200 dark:bg-gray-600 rounded-full"
                                    style={{ width: `${100 - skill.level}%` }}
                                ></div>
                                
                                {/* Divider line between blue and gray */}
                                <div 
                                    className="absolute top-0 h-full border-r-2 border-white dark:border-gray-800"
                                    style={{ left: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Animation styles */}
                <style jsx global>{`
                    [data-aos="progress"] {
                        width: 0% !important;
                        transition: width 1s ease-out;
                    }
                    [data-aos="progress"].aos-animate {
                        width: var(--aos-progress) !important;
                    }
                `}</style>
            </div>
        </section>
    )
}