export default function Skills() {
    const skills = [
        { name: 'React', icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
        { name: 'Node.js', icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
        { name: 'Express.js', icon: "https://cdn.worldvectorlogo.com/logos/express-109.svg" },
        { name: 'MongoDB', icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
        { name: 'JavaScript', icon: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
        { name: 'Tailwind CSS', icon: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
        { name: 'HTML5', icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
        { name: 'CSS', icon: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
        { name: 'Bootstrap', icon: "https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg" },
        { name: 'Git', icon: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
    ];

    return (
        <section id="skills" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                            My Skills
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Technologies I've mastered through projects and experience
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-purple-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md flex flex-col items-center hover:scale-105 transition-transform duration-300">
                            <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-4" />
                            <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
