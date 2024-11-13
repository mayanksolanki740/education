import React from 'react'
import Title from '../common/title/Title'
import { online } from '../../dummydata'
const OnlineCourses = () => {
  return (
    <>
      <section className="online">
        <section className="container">
          <Title subtitle='COURSES' title='Browse Our Online Courses'/>

          <div className="content grid3">
            {online.map((val, index) =>{
              return(
                <div className="box" key={index}>
                  <div className="img">
                    <img src={val.cover} alt="" />
                    <img src={val.hoverCover} alt="" className='show'/>
                  </div>
                  <h1>{val.courseName}</h1>
                  <span>{val.course}</span>
                </div>
              )
            })}
          </div>
        </section>
      </section>
    </>
  )
}

export default OnlineCourses