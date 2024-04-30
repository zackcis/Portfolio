
import { useContext, useEffect, useState } from 'react';
import './firstSection.sass'
import { MyContext } from '../../../utils/contextProvider';
import Aos from 'aos';
import ana from '../../../assets/img/WhatsApp Image 2024-02-21 à 13.14.54_224a1605.jpg'
import abouti from '../../../assets/img/IMG_3796.PNG'
import html from '../../../assets/img/html.png'
import css from '../../../assets/img/css-3.png'
import js from '../../../assets/img/js.png'
import react from '../../../assets/img/React-Logo-PNG-Pic.png'
import boot from '../../../assets/img/bootstrap_icon_195906.png'
import tailwind from '../../../assets/img/tailwind-512.webp'
import laravel from '../../../assets/img/985px-Laravel.svg.png'
import crypto from '../../../assets/img/Crypto.png'
import ecommerce from '../../../assets/img/Ecommerce.png'
import movies from '../../../assets/img/Movies.png'
import 'aos/dist/aos.css';
import { FaSquarePhone } from "react-icons/fa6";
import { BiSolidMessageDetail } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-scroll';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



export const FirstSection = () => {
    const [test, setTest] = useContext(MyContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
            .sendForm('service_6cax8u7', 'template_z5idg8v', form.current, {
                publicKey: '68pQe024jghocpcCR',
            })
            .then(
                () => {
                    // Clear input fields after successful submission
                    setName('');
                    setEmail('');
                    setMessage('');
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    // const [test, setTest] = useContext(MyContext)
    const [skill, setSkill] = useState([
        {
            picture: js,
            title: 'Javascript'
        },
        {
            picture: css,
            title: 'CSS'
        },
        {
            picture: html,
            title: 'HTML'
        },
        {
            picture: boot,
            title: 'Bootsrap'
        },
        {
            picture: tailwind,
            title: 'Tailwind'
        },
        {
            picture: react,
            title: 'React.js'
        },
        {
            picture: laravel,
            title: 'Laravel'
        },
    ])
    const [arrayi, setArrayi] = useState([{
        picture: ecommerce,
        title: 'E-commerce project',
        description: 'showcases a dynamic platform that merges user-friendly design with robust functionality. From intuitive navigation to secure transactions, every element is meticulously crafted to enhance the customer journey.',
        link: '',
    },
    {
        picture: crypto,
        title: 'Crypto currency project',
        description: 'This endeavor explores the intersection of technology and finance, presenting a dynamic solution that empowers users to navigate the world of digital assets with ease. From blockchain innovation to secure transactions, this project reflects a commitment to redefining the landscape of decentralized finance',
        link: '',
    },
    {
        picture: movies,
        title: 'Movies project',
        description: 'where passion for storytelling meets technological innovation. This endeavor seamlessly integrates design and functionality to create an immersive platform for movie enthusiasts. Discover a user-friendly interface, curated content, and an engaging viewing experience',
        link: '',
    }])

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <>

            <nav class="bg-[#101630] w-[100%]  flex justify-center items-center pt-[5vh] ">
                <div class="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto ">
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li className='cursor-pointer'>
                                <Link smooth={true} duration={500} to="Home" class="block py-2 px-8 text-white hover:text-[#1ed760] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">Home</Link>
                            </li>
                            <li className='cursor-pointer'>
                                <Link to="about" smooth={true} duration={500} class="block py-2 px-8 text-white hover:text-[#1ed760] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">About</Link>
                            </li>
                            <li className='cursor-pointer'>
                                <Link smooth={true} duration={500} to="project" class="block py-2 px-8 text-white hover:text-[#1ed760] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">Projects</Link>
                            </li>
                            <li className='cursor-pointer'>
                                <Link smooth={true} duration={500} to="skills" class="block py-2 px-8 text-white hover:text-[#1ed760] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">Skills</Link>
                            </li>
                            <li className='cursor-pointer'>
                                <Link smooth={true} duration={500} to="contact" class="block py-2 px-8 text-white hover:text-[#1ed760] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>



            <div name="Home" data-aos="fade-right" data-aos-duration="2500" className='bg-[#101630] w-[100%] h-screen flex justify-center items-center max-[430px]:max-w-[100%] max-[430px]:flex-col-reverse max-[430px]:justify-center max-[430px]:items-center max-[430px]:h-[120vh]'>
                <div className='w-[100%] h-[60%] flex flex-col justify-around items-center max-[430px]:flex-col max-[430px]:justify-center max-[430px]:items-center max-[430px]:text-center'>
                    <p className=' w-[50%] text-start text-5xl text-gray-500 max-[430px]:mb-5  max-[430px]:text-center'>
                        <span className='font-bold leading-[100px]  '>I'm a</span><br /> <span className='text-white kbira  text-7xl max-[430px]:text-3xl '>Full-Stack Software Developer .</span>
                    </p>
                    <div className='w-[50%] flex justify-start max-[430px]:justify-center'>
                        <button className='items-start p-[30px] rounded-full bg-gradient-to-r from-[#49b0d8] from-10% via-sky-500 via-30% to-[#3a2c8f] to-90% text-white font-bold '><Link smooth={true} duration={500} to="project" >Previous Project</Link></button>
                    </div>
                </div>
                <div className=' w-[50%]'>
                    <img src={ana} alt="" className='w-[350px] imagi ' />
                </div>
            </div>



            <div name="about" className='about w-[100%]  bg-[#101630] h-[70vh] max-[430px]:h-[140vh] max-[430px]:mb-10  max-[430px]:py-3  flex justify-center items-center' data-aos="fade-left" data-aos-duration="2500">
                <div className='w-[90%] max-[430px]:w-[100%] h-[100%] flex justify-center items-center '>
                    <div className='w-[80%] max-[430px]:w-[100%] h-[100%] flex justify-between items-center text-center gap-8 max-[430px]:gap-10 max-[430px]:flex-col'>
                        <div className='about-image w-[70%] max-[430px]:w-[40%] '>
                            <img src={abouti} className='w-[100%] about-image' alt="" />
                        </div>
                        <div className='about-script flex flex-col justify-around items-center text-center h-[60%] max-[430px]:w-[100%] '>
                            <h1 className='kbira text-white text-3xl'>About</h1>
                            <p className='w-[70%] text-2xl text-white '>
                                Front End Web Developer passionate about software development and crafting engaging user experiences. Demonstrated expertise in client interaction and project management honed through freelancing endeavors. Committed to advancing front-end skills and staying abreast of emerging technologies to deliver exceptional digital solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>



            <div name="project" className='projects w-[100%]  bg-[#101630] h-[70vh] max-[430px]:h-[300vh] max-[430px]:my-7  flex flex-col justify-around items-center  ' data-aos="fade-down" data-aos-duration="2500">
                <h1 className='font-bold text-center text-white text-3xl kbira'>
                    PROJECTS
                </h1>
                <div className='w-[100%] flex flex-wrap justify-center items-center max-[430px]:flex-col max-[430px]:h-[98%]  max-[430px]:gap-[80px] gap-9'>
                    {
                        arrayi.map(element =>

                            <div className='cards relative  w-[25%] h-[100%] max-[430px]:h-[27%] flex flex-wrap justify-around  max-[430px]:w-[100%] '>
                                <div class="max-w-sm shadow-lg shadow-white bg-[#101630] rounded-lg  dark:bg-gray-800 dark:border-gray-700">
                                    <img class="rounded-t-lg" src={element.picture} alt="" className='  ' />
                                    <div class="p-5 flex flex-col justify-between ">
                                        <a href="#">
                                            <h5 class="mb-2 text-2xl font-bold text-white tracking-tight  dark:text-white">{element.title}</h5>
                                        </a>
                                        <p class="font-normal text-white mb-11 dark:text-gray-400">{element.description}</p>
                                        <div className='bg-black absolute bottom-3 '>
                                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Read more
                                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    }
                </div>
            </div>





            <div name="skills" data-aos="fade-left" data-aos-duration="2500" className='skills   w-[100%]  bg-[#101630] h-[50vh] max-[380px]:min-h-full
            max-[430px]:flex-col  max-[430px]:h-[145vh] max-[430px]:p-0 max-[430px]:my-7    flex flex-col justify-center items-center'>
                <h1 className='font-bold text-center text-white kbira text-3xl'>Skills</h1>
                <div className='icons flex flex-wrap justify-around items-center gap-10 h-[80%] '>
                    {skill.map(skyll =>
                        <div className='flex flex-col justify-center items-center max-[430px]:flex-col'>
                            <img src={skyll.picture} alt="" className='w-[170px] p-10' />
                            <h2 className='kbira 2xl text-white'>{skyll.title}</h2>
                        </div>
                    )
                    }

                </div>
            </div>





            <div name="contact" className='bg-[#101630] '>
                <div className='rounded-t-[200px] contact w-[100%] bg-gradient-to-r from-[#4733bccb] from-10% via-sky-500 via-30% to-[#4f97d6bb] to-90% h-[70vh]  flex flex-col justify-center items-center max-[430px]:h-[180vh]
                '>
                    <h1 className='text-2xl text-white kbira max-[430px]:text-center'>
                        Contact
                    </h1>
                    <div className='w-[50%] max-[430px]:w-[100%] h-[80%] flex justify-start items-center max-[430px]:flex-col  max-[430px]:items-center max-[430px]:gap-[100px]  max-[430px]:justify-center'>
                        <div className='drop-message flex flex-col gap-7 justify-start items-start max-[430px]:justify-center max-[430px]:items-center'>
                            <h1 className='kbira text-2xl text-white max-[430px]:text-center'>Drop a message</h1>
                            <p className='w-[60%] max-[430px]:text-center'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, distinctio. Ex beatae quaerat voluptates impedit facere. Velit veritatis dolore accusamus!
                            </p>
                            <div className='tele flex justify-start items-center w-[60%] gap-6 max-[430px]:flex-col max-[430px]:justify-center max-[430px]:items-center'>
                                <div className='bg-gradient-to-r from-[#4733bccb] from-10%  via-30% to-[#0ea4e8] to-90% text-white w-[50px] h-[50px] rounded-lg flex justify-center items-center'>
                                    <FaSquarePhone />
                                </div>
                                <p>
                                    +212699312362
                                </p>
                            </div>
                            <div className='message flex justify-start items-center w-[60%] gap-6 max-[430px]:flex-col max-[430px]:justify-center max-[430px]:items-center'>
                                <div className='bg-gradient-to-r from-[#4733bccb] from-10%  via-30% to-[#0ea4e8] to-90% text-white w-[50px] h-[50px] rounded-lg flex justify-center items-center'>
                                    <BiSolidMessageDetail />
                                </div>
                                <p>
                                    zakaria.eldahar@gmail.com
                                </p>
                            </div>
                            <div className='local flex justify-start items-center w-[60%] gap-6 max-[430px]:flex-col max-[430px]:justify-center max-[430px]:items-center '>
                                <div className='bg-gradient-to-r from-[#4733bccb] from-10%  via-30% to-[#0ea4e8] to-90% text-white w-[80px] h-[50px] rounded-lg flex justify-center items-center'>
                                    <FaLocationDot />
                                </div>
                                <p className='max-[430px]:text-center'>
                                    Morocco,Casablanca,Sidi moumen Boulvard houssein soussi, Rue 29
                                </p>
                            </div>
                        </div>
                        <div class="max-w-md p-8 bg-gray-800 rounded-md shadow-md form-container w-[70%] max-[430px]:w-[90%]">
                            <h2 class="text-2xl font-semibold text-white mb-6">Say Something!</h2>
                            <form className='overflow-x-hidden' ref={form} onSubmit={sendEmail} >
                                <div class="mb-4">
                                    <label for="name" class="block text-gray-300 text-sm font-bold mb-2" >Your Name</label>
                                    <input type="text" id="name" name="from_name" placeholder="John Doe" required
                                        class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white" onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div class="mb-4">
                                    <label for="email" class="block text-gray-300 text-sm font-bold mb-2" >Your Email</label>
                                    <input type="email" id="email" name="from_email" placeholder="john@example.com" required
                                        class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white" onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div class="mb-6">
                                    <label for="message" class="block text-gray-300 text-sm font-bold mb-2">Your Message</label>
                                    <textarea id="message" name="message" rows="4" placeholder="How can we help you?" required
                                        class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white" onChange={(e) => setMessage(e.target.value)}></textarea>
                                </div>

                                <button type="submit" value="send" 
                                    class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                    <hr />

                </div>
            </div>
        </>
    );
}
