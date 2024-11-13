import React from "react";
import "./hero.css";
import Title from "../../common/title/Title";
const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="marginHero"></div>
            <div className="row">
                <Title subtitle='WELCOME TO SHIKSHALOGY' title='Best Online Education & Learning'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam eligendi vel ad mollitia consequuntur.</p>
                <div className="button">
                    <button className="primary-btn">
                        GET STARTED NOW <i className="fa-solid fa-arrow-right"></i>
                    </button>
                    <button className="primary-btn">
                        VIEW COURSE <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
