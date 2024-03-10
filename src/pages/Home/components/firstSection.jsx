
import { useContext, useEffect, useRef, useState } from 'react';
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
import Typed from 'typed.js';
import { FaSquarePhone } from "react-icons/fa6";
import { BiSolidMessageDetail } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";



export const FirstSection = () => {
    const [test, setTest] = useContext(MyContext)
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

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["UI/UX Designer",'Full-Stack Software Developer'],
            typeSpeed: 20,
            backSpeed: 40,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);


    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <>

            <nav class="bg-[#101630] w-[100%] flex justify-center items-center p-[5vh]">
                <div class="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto p-4">
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" class="block py-2 px-8 text-white hover:text-[#1ed760] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">Home</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-8 text-white hover:text-[#1ed760] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">About</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-8 text-white hover:text-[#1ed760] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">Services</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-8 text-white hover:text-[#1ed760] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">Pricing</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-8 text-white hover:text-[#1ed760] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div data-aos="fade-right" data-aos-duration="2500" className='bg-[#101630] w-[100%] h-[65vh] flex justify-center items-center '>
                <div className='w-[100%] h-[70%] flex flex-col justify-around items-center'>
                    <p className=' w-[60%] text-start text-5xl text-gray-500 '>
                        <span className='font-bold leading-[100px]  '>I'm a {''}</span><br />
                        {/* <span className='text-white kbira  text-7xl'>Full-Stack Software Developer .</span> */}
                        <span ref={el} className='text-white kbira text-7xl'></span>
                    </p>
                    <div className='w-[60%] flex justify-start'>
                        <button className='items-start p-[30px] rounded-full bg-gradient-to-r from-[#49b0d8] from-10% via-sky-500 via-30% to-[#3a2c8f] to-90% text-white font-bold '>Previous Project</button>
                    </div>
                </div>
                <div className=' w-[50%]'>
                    <img src={ana} alt="" className='w-[350px] imagi ' />
                </div>
            </div>
            <div className='about w-[100%] bg-[#101630] h-[70vh] flex justify-center items-center' data-aos="fade-left" data-aos-duration="2500">
                <div className='w-[80%] h-[100%] flex justify-center items-center'>
                    <div className='w-[80%] h-[100%] flex justify-around items-center text-center'>
                        <div className='about-image w-[70%] '>
                            <img src={abouti} className='w-[100%] about-image' alt="" />
                        </div>
                        <div className='about-script flex flex-col justify-around items-center text-center h-[50%] '>
                            <h1 className='kbira text-white text-3xl'>About</h1>
                            <p className='w-[70%] text-2xl text-white '>
                                Front End Web Developer passionate about software development and crafting engaging user experiences. Demonstrated expertise in client interaction and project management honed through freelancing endeavors. Committed to advancing front-end skills and staying abreast of emerging technologies to deliver exceptional digital solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='projects w-[100%] bg-[#101630] h-[70vh] flex flex-col justify-around items-center' data-aos="fade-down" data-aos-duration="2500">
                <h1 className='font-bold text-center text-white text-3xl kbira'>
                    PROJECTS
                </h1>
                <div className='w-[100%] flex flex-wrap justify-center items-center'>
                    {
                        arrayi.map(element =>

                            <div className='cards  w-[25%] h-[100%] flex flex-wrap justify-around'>
                                <div class="max-w-sm shadow-lg shadow-white bg-[#101630] rounded-lg  dark:bg-gray-800 dark:border-gray-700">
                                    <img class="rounded-t-lg" src={element.picture} alt="" className='  ' />
                                    <div class="p-5">
                                        <a href="#">
                                            <h5 class="mb-2 text-2xl  tracking-tight text-white font-bold dark:text-white">{element.title}</h5>
                                        </a>
                                        <p class="mb-3 font-normal text-white  dark:text-gray-400">{element.description}</p>
                                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Read more
                                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        )
                    }
                </div>


            </div>
            <div data-aos="fade-up" data-aos-duration="2500" className='skills  w-[100%] bg-[#101630] h-[50vh]   flex flex-col justify-center items-center'>
                <h1 className='font-bold text-center text-white kbira text-3xl'>Skills</h1>
                <div className='icons flex flex-wrap justify-around items-center gap-10 h-[80%]'>
                    {skill.map(skyll =>
                        <div className='flex flex-col justify-center items-center'>
                            <img src={skyll.picture} alt="" className='w-[170px] p-10' />
                            <h2 className='kbira 2xl text-white'>{skyll.title}</h2>
                        </div>
                    )
                    }

                </div>
            </div>
            <div className='bg-[#101630] w-[100%]'>
                <div data-aos="fade-up" data-aos-duration="2500" className='rounded-t-[200px] contact w-[100%] bg-gradient-to-r from-[#4733bccb] from-10% via-sky-500 via-30% to-[#4f97d6bb] to-90% h-[70vh]  flex flex-col justify-center items-center '>
                    <h1 className='text-2xl text-white kbira'>
                        Contact
                    </h1>
                    <div className='w-[70%] h-[80%] flex justify-center items-center'>
                        <div className='drop-message flex flex-col justify-start items-start gap-7 text-white'>
                            <h1 className='kbira text-2xl text-white'>Drop a message</h1>
                            <p className='w-[60%] '>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, distinctio. Ex beatae quaerat voluptates impedit facere. Velit veritatis dolore accusamus!
                            </p>
                            <div className='tele flex gap-4 items-center w-[60%]'>
                                <FaSquarePhone className='text-5xl' />
                                <p>
                                    +212699312362
                                </p>
                            </div>
                            <div className='message flex gap-4  items-center w-[60%]'>
                                <BiSolidMessageDetail className='text-5xl' />
                                <p>
                                    zakaria.eldahar@gmail.com
                                </p>
                            </div>
                            <div className='local flex gap-4 items-center w-[60%]'>
                                <FaLocationDot className='text-5xl' />
                                <p>
                                    Morocco,Casablanca,Sidi moumen Boulvard houssein soussi, Rue 29
                                </p>
                            </div>
                        </div>
                        <div className='rounded-lg bg-gradient-to-r from-[#4ba9db] from-10% via-sky-500 via-30% to-[#4a3bc5] to-90% w-[50%] h-[60%] flex flex-col justify-center items-center  shadow-lg shadow-black'>
                            <div className='form w-[80%] flex flex-col justify-center items-center '>
                                <form className='gap-5 flex flex-col' action="">
                                    <input className='w-[80%] rounded-lg bg-[#101630]' type="text" placeholder='Name' />
                                    <input className='w-[80%] rounded-lg bg-[#101630]' type="email" placeholder='Email' />
                                    <textarea className='w-[80%] rounded-lg bg-[#101630] h-[100px]' name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                                    <button className='bg-[#101630] text-white font-bold w-[100px] p-3 rounded-lg'>Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <hr />

                </div>
            </div>
        </>
    );
}
