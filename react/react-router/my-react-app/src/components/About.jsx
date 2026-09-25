
import React from 'react'

const About = () => {
  return (
    <div className="page-card about-card">

      <h1 className="page-title">About Us</h1>

      <p className="about-text">
        Welcome to My College. Our institution is dedicated to providing
        quality education and creating opportunities for students to develop
        technical, professional and personal skills.
      </p>

      <div className="about-info">

        <div className="info-box">
          <h2>🎓 Education</h2>
          <p>
            We provide industry-focused education with experienced faculty
            and practical learning.
          </p>
        </div>

        <div className="info-box">
          <h2>💡 Innovation</h2>
          <p>
            Students are encouraged to explore new technologies and
            develop innovative solutions.
          </p>
        </div>

        <div className="info-box">
          <h2>🏆 Excellence</h2>
          <p>
            Our goal is to help students achieve academic and professional
            excellence.
          </p>
        </div>

      </div>

    </div>
  )
}

export default About

