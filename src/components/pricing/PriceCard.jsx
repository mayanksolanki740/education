import React from "react";
import { price } from "../../dummydata";
const PriceCard = () => {
  return (
    <>
      {price.slice(0, 3).map((val, index) => {
        return (
          <div className="container" key={val.id || index}>
            <div className="items shadow" >
              <h4>{val.name}</h4>
              <h1>
                <span>$ </span>
                {val.price}
              </h1>
              <p>{val.desc}</p>
              <button className="outline-btn">GET STARTED</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PriceCard;
