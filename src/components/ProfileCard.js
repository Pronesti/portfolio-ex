import React from 'react'

const ProfileCard = () => {
    return (
        <aside className='profile-card'>
        <header>
          <a href='http://victory-design.ru/'>
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
            <a href='https://www.facebook.com/v1ctory'>
              Github
            </a>
          </li>

          <li>
            <a href='http://themeforest.net/user/Victory-Design'>
              Linkedin
            </a>
          </li>

          <li>
            <a href='https://codepen.io/VictoryDesign/'>
             Email 
            </a>
          </li>
        </ul>
      </aside>
    )
}

export default ProfileCard
