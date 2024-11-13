import React from "react";
import Back from "../common/back/Back";
import './contact.css';

const Contact = () => {
  const map =
    'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d108205.91479091084!2d77.08116146538208!3d28.57440062935709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1731156437068!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';
  return (
    <>
      <Back title="Contact Us" />;
      <section className="contact padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={map}></iframe>
          </div>
          <div className="right row">
            <h1>Contact Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

            <div className="items grid2">
              <h4>ADDRESS: </h4>
              <p>198 west 21st street, suite 751 New York NY 10016</p>
            </div>
            <div className="box">
              <h4>PHONE: </h4>
              <p>+123 456 7890</p>
            </div>

            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea cols="30" rows="10">
                Create a message here...
              </textarea>
              <button className="primary-btn">SEND MESSAGE</button>

              <h3>Follow Us Here</h3>
              <span>FACEBOOK INSTAGRAM TWITTER BEHANCE</span>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
