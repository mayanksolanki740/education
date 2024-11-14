import React, { useEffect, useState } from "react";
import "./price.css";
import Back from "../common/back/Back";
import Faq from "./Faq";
import PriceCard from "./PriceCard";
const Price = () => {
  const [isLargeScreen, SetIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      SetIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.addEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <Back title="Choose The Right Plan" />
      <section className="price padding">
        <div className={`container ${isLargeScreen ? "grid" : ""}}`}>
          <PriceCard />
        </div>
      </section>
      <Faq />
    </>
  );
};

export default Price;
