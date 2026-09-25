
import React from 'react'

const Course = () => {
  return (
    <div className="page-card">
      <h1 className="page-title">Our Courses</h1>

      <div className="course-container">

        <div className="course-card">
          <h2>BCA</h2>
          <p>
            Bachelor of Computer Applications is a 3-year course
            focused on programming, databases, web development and software.
          </p>
          <span>Duration: 3 Years</span>
        </div>

        <div className="course-card">
          <h2>B.Tech</h2>
          <p>
            Bachelor of Technology is a 4-year technical course
            covering engineering, programming and modern technologies.
          </p>
          <span>Duration: 4 Years</span>
        </div>

        <div className="course-card">
          <h2>MCA</h2>
          <p>
            Master of Computer Applications is a postgraduate course
            designed for advanced software development and IT skills.
          </p>
          <span>Duration: 2 Years</span>
        </div>

      </div>
    </div>
  )
}

export default Course
