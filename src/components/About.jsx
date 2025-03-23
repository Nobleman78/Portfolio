import React, {useState } from 'react';

const About = () => {
    const [activeButton, setActiveButton] = useState('personal');
    return (
        <div className='mt-20 bg-gray-300 rounded' id='about' data-aos='zoom-in' data-aos-duration='1000'>
            <div className='px-10 py-20 flex flex-col gap-4'>
                <h2 className='text-4xl text-green-600 font-bold text-center'>About Me</h2>
                <p className='text-center w-[80%] mx-auto'>Enthusiastic and highly motivated front-end web developer who is well-versed in react.js, HTML5, CSS3. With a solid foundation in frontend  technologies, I specialize in crafting engaging user experiences and robust, scalable web applications.</p>
                <hr className='w-[80%] mx-auto' />
                <div className='flex items-center justify-center gap-10'>
                    <button onClick={() => setActiveButton('personal')} className={`${activeButton === 'personal' ? 'bg-white' : 'bg-base'} px-3 py-2 rounded  cursor-pointer font-bold`}>Personal Information</button>
                    <button onClick={() => setActiveButton('education')} className={`${activeButton === 'education' ? 'bg-white' : 'bg-base'} px-3 py-2 rounded  cursor-pointer font-bold `}>Education</button>
                    <button onClick={() => setActiveButton('certificate')} className={`${activeButton === 'certificate' ? 'bg-white' : 'bg-base'} px-3 py-2 rounded  cursor-pointer font-bold `}>Certificate</button>
                </div>
                {
                    activeButton === 'personal' && (
                        <div>
                            <h2 ><span className='font-bold'>Name</span> : Jesmin Chakma</h2>
                            <h2><span className='font-bold'>Email</span> : jesminchakma39@gmail.com</h2>
                            <h2><span className='font-bold'>Address</span> : Kazipara</h2>
                        </div>
                    )
                }
                {
                    activeButton === 'education' && (
                        <div>
                            <h2 className='font-bold text-lg'>Bachelor of Science in Computer Science and Engineering</h2>
                            <h2>Green University of Bangladesh</h2>
                            <p>2019 - 2023</p>
                            <p className='font-bold '>CGPA: 3.40/4.00</p>
                        </div>
                    )
                }
            </div>



        </div>
    );
};

export default About;