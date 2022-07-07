import React, { useState } from "react";

const Tour = ({ image, info, price, name }) => {
  const [finalInfo, setFinalInfo] = useState(info.substring(0, 200));
  const [toggle, setToggle] = useState("Read more");
  return (
    <article className="single-tour">
      <img src={image} alt={name}></img>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {finalInfo}{" "}
          <button
            onClick={() => {
              if (toggle == "Show less") {
                setToggle("Read more");
                setFinalInfo(info.substring(0, 200));
              } else {
                setToggle("Show less");
                setFinalInfo(info);
              }
            }}
          >
            {toggle}
          </button>
        </p>
        <button className="delete-btn">Not Interested</button>
      </footer>
    </article>
  );
};

export default Tour;
