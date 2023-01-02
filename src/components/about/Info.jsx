import React from 'react'

const Info = () => {
  return (
    <div>
      <div className='about__info grid'>
        <div className='about__box'>
        <i class='bx bx-award'></i>

            <h3 className='about__title'>Experience</h3>
            <span className='about__subtitle'>17 years working in Graphic Design, 1 year with Code</span>
        </div>

        <div className='about__box'>
        <i class='bx bx-briefcase-alt' ></i>

            <h3 className='about__title'>Completed</h3>
            <span className='about__subtitle'>20 + Projects</span>
        </div>

        <div className='about__box'>
        <i class='bx bx-support' ></i>
        
            <h3 className='about__title'>Support</h3>
            <span className='about__subtitle'>Online 24/7</span>
        </div>
      </div>
    </div>
  )
}

export default Info
