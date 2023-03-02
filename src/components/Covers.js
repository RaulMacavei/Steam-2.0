import React from "react";
import Featured from "./Featured";

import Forza from "../assets/forzacover.jpg";
import forzaphoto1 from "../assets/forzaphoto1.jpg";
import forzaphoto2 from "../assets/forzaphoto2.jpg";
import forzaphoto3 from "../assets/forzaphoto3.jpg";
import forzaphoto4 from "../assets/forzaphoto4.jpg";

const Covers = () => {
  const covers = [
    {
      cover: Forza,
      title: "Forza Horizon 5",
      photo1: forzaphoto1,
      photo2: forzaphoto2,
      photo3: forzaphoto3,
      photo4: forzaphoto4,
      price: "59,99€",
    },
  ];
  return (
    <div className="">
      {covers.map((featured) => (
        <Featured
          cover={featured.cover}
          title={featured.title}
          photo1={featured.photo1}
          photo2={featured.photo2}
          
          photo3={featured.photo3}
          photo4={featured.photo4}
          price={featured.price}
        />
      ))}
    </div>
  );
};

export default Covers;
