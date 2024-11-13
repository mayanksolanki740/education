import React from "react";
import Team from "./Team";
import { team } from "../../../dummydata";

const TeamCard = () => {
  return (
    <>
      {team.map((val, index) => {
        return (
          <div className="items shadow" key={index}>
            <div className="img" >
              <img src={val.cover} alt="" />
              <div className="overlay">
                <i className="fa-brands fa-facebook icon"></i>
                <i className="fa-brands fa-instagram icon"></i>
                <i className="fa-brands fa-x-twitter icon"></i>
                <i className="fa-brands fa-behance icon"></i>
              </div>
            </div>
            <div className="details">
                <h2>{val.name}</h2>
                <p>{val.work}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TeamCard;
