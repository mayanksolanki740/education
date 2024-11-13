import React from "react";
import Title from "../../common/title/Title";
import { testimonial } from "../../../dummydata";
import "./style.css";

const Test = () => {
  return (
    <>
      <section className="testimonial padding">
        <div className="container">
          <Title subtitle="testimonial" title="Our Successful Students" />
        </div>
        <div className="content grid2">
          {testimonial.map((val, index) => {
            return (
              <div className="items shadow" key={index}>
                <div className="box flex">
                  <div className="img">
                    <img src={val.cover} alt="" />
                    <i className="fa-brands fa-rocketchat"></i>
                  </div>
                  <div className="name">
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Test;
