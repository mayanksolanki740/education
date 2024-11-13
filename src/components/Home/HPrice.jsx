import React from "react";
import Title from "../common/title/Title";
import PriceCard from "../pricing/PriceCard";
const HPrice = () => {
  return (
    <>
      <section className="hprice padding">
      <Title subtitle="Our Pricing" title="pricing & packages" />

        <div className="price container grid2">
            <PriceCard/>
        </div>
      </section>
    </>
  );
};

export default HPrice;
