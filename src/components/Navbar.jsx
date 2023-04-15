import React,{useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { BsLinkedin, BsGithub,BsFillPersonLinesFill} from "react-icons/bs";
import { SiGmail} from "react-icons/si";


const Navbar = () => {
    const [hamburger, setHamburger] = useState(false)
    const toggle = () =>{
        setHamburger(!hamburger)
    }
  return (
    <div className='fixed w-full h-[40px] flex justify-between items-center px-8 bg-[#00001a] text-gray-400'>
        <div className='flex'>
            <h1 className='text-3xl'>Larren</h1>
            <h1 className='text-3xl text-sky-200 px-2'>Dsouza</h1>
        </div>
            <ul className='hidden md:flex py-4'>
                <li> Home </li>
                <li> Projects </li>
                <li> Experience </li>
                <li> Achievements </li>
                <li> Contact </li>
            </ul>
        
        <div onClick={toggle} className='md:hidden z-10 py-4'>
        {
            hamburger? <FaTimes /> : <FaBars />
        }
        </div>
            <ul className={!hamburger? 'hidden':'absolute top-0 left-0 w-full h-screen bg-[#00001a] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'> Home </li>
                <li className='py-6 text-4xl'> Projects </li>
                <li className='py-6 text-4xl'> Experience </li>
                <li className='py-6 text-4xl'> Achievements </li>
                <li className='py-6 text-4xl'> Contact </li>
            </ul>

        <div className='hidden lg:flex fixed flec-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/larren-francis-dsouza-49bb44204/'>
                        LinkedIn <BsLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000000]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/larren07' >
                        Github <BsGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ff0000]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='mailto:larren1234@gmail.com'>
                        Gmail <SiGmail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2e9b4f]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='/resume.pdf' download={true}>
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar