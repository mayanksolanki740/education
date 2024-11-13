import React from "react";
import Title from "../common/title/Title";
import { blog } from "../../dummydata";

const HBlog = () => {
  return (
    <>
      <div>
        <section className="blog">
            <div className="container">
                <Title subtitle="Our Blog" title="recent from blog"/>
                <div className="grid2">
                {blog.slice(0, 3).map((val, index) => {
        return (
          <div className="items shadow" key={val.id || index}>
            <div className="img">
              <img src={val.cover} alt="" />
            </div>
            <div className="text">
              <div className="admin flexSB">
                <span>
                  <i className="fa-solid fa-user"></i>
                  <label htmlFor="">{val.type}</label>
                </span>
                <span>
                  <i className="fa-solid fa-calendar-days"></i>
                  <label htmlFor="">{val.date}</label>
                </span>
                <span>
                  <i className="fa-solid fa-comment"></i>
                  <label htmlFor="">{val.com}</label>
                </span>
              </div>
              <h1>{val.title}</h1>
              <p>{val.desc}</p>
            </div>
          </div>
        );
      })}
                </div>
            </div>
        </section>
      </div>
    </>
  );
};

export default HBlog;
