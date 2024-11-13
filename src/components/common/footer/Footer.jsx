import React from "react";
import "./footer.css";
import { blog } from "../../../dummydata";
import Blog from "../../blog/Blog";

const Footer = () => {
  return (
    <>
      <section className="newsletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Newsletter - stay tuned and get latest updates</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter email address" />
            <i className="fa-solid fa-paper-plane"></i>
          </div>
        </div>
      </section>

      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>SHIKSHALOGY</h1>
            <span>Online Education & Learning</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              similique ipsam quos earum quisquam.
            </p>
            <i className="fa-brands fa-facebook icon"></i>
            <i className="fa-brands fa-instagram icon"></i>
            <i className="fa-brands fa-x-twitter icon"></i>
            <i className="fa-brands fa-youtube icon"></i>
          </div>
          <div className="box link">
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="box">
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val, index) => {
              return (
                <div className="items flexSB" key={val.id || index}>
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  <div className="text">
                    <span>
                      <i className="fa-solid fa-user"></i>
                      <label htmlFor="">{val.type}</label>
                    </span>
                    <span>
                      <i className="fa-solid fa-calendar-days"></i>
                      <label htmlFor="">{val.date}</label>
                    </span>
                    <h4>{val.title}</h4>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="box last">
            <h3>Have a Questions?</h3>
            <ul>
                <li>
                    <i className="fa fa-map"></i>
                    203 Fake ST. Mount View , San Francisco california ,USA
                </li>
                <li>
                    <i className="fa fa-phone-alt"></i>
                    +123 456 7890
                </li>
                <li>
                    <i className="fa fa-paper-plane"></i>
                    example@gmail.com
                </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>Copyright @2024 All rights reserved | This template is made with <i className="fa fa-heart"></i> By mayank solanki</p>
      </div>
    </>
  );
};

export default Footer;
