import React from 'react';
import {motion} from 'framer-motion';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import email from '../assets/gmail.png';


const ProfileCard = () => {
    return (
        <aside className='profile-card'>
        <header>
          <a href='https://www.diegopronesti.com.ar'>
            <img
              src='https://avatars2.githubusercontent.com/u/34582381?s=460&v=4'
              alt='avatar'
            />
          </a>
          <h1>Diego Pronesti</h1>
          <h2>Web Developer</h2>
        </header>

        <div className='profile-bio'>
          <p>
            Even when everything is perfect, you can always make it better.
            Break barriers in your head, create something crazy and don't forget
            Code is Poetry...
          </p>
        </div>

        <ul className='profile-social-links'>
          <li>
            <a href='https://github.com/Pronesti'>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <img src={github} alt="github" />
            </motion.div>
            </a>
          </li>

          <li>
            <a href='https://ar.linkedin.com/in/diego-pronesti'>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <img src={linkedin} alt="linkedin" />
            </motion.div>
            </a>
          </li>

          <li>
            <a href='mailto:dieh.diego@gmail.com'>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <img src={email} alt="email" />
            </motion.div>
            
            </a>
          </li>
        </ul>
      </aside>
    )
}

export default ProfileCard
