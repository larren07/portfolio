import React from 'react'
import HeroImage from '../assets/profile.jpg'
import Typed from 'react-typed';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full'>
        <div className = "max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className='flex flex-col justify-center h-full'>
                <h1 className='text-4xl sm:text-7xl font-bold'> Hi! I am</h1>
                <Typed
                    className='text-4xl sm:text-7xl font-bold'
                    strings={['Larren','a Full Stack Web Dev','a Software Dev']}
                    typeSpeed={240}
                    backSpeed={260}
                    loop
                />
                <p className='py-4'>
                    I am currently pursuing my Bachelors in Information Technology.
                    I like sleeping, watching TV and playing sports :)
                    Ever inquisitive about learning new technologies and broadening 
                    my knowledge.
                </p>
                <h1 className='text-sky-700 font-semibold'>
                    Welcome to my World!!!
                </h1>
            </div>
            <div>
                <img src={HeroImage} alt="profile pic" className='rounded-2xl mx-auto w-1/3 md:w-[900px] '/>
            </div>
        </div>
    </div>
  )
}

export default Home