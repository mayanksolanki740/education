import React, { useEffect, useState } from "react";
import Title from "../common/title/Title";
import { homeAbout } from "../../dummydata";
import AWrapper from "./AWrapper";
import "./about.css";
const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <img src="../../../images/back2.png" alt="" />
          </div>
          <div className="right row">
            <Title
              subtitle="LEARN ANYTHING"
              title="Benefits About Online Learning"
            />
            <div className="item">
              {homeAbout.map((val, index) => {
                return (
                  <div className="items flexSB" key={index}>
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="text">
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <AWrapper />
      {/* <div className="margin"></div> */}
    </>
  );
};

export default AboutCard;
