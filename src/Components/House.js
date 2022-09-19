import React from "react";
import "./House.css";

const House = (props) => {
  return (
    <>
      <div className="housecard">
        <div className="myimg">
          <img src={props.pics} alt="house 1" />
        </div>
        <div className="hdetails">
          <p className="hprice">
            <b>${props.price}</b>/month
          </p>
          <p className="harea">{props.name}</p>
          <p className="hdescription">{props.address}</p>
          <div className="horizontal-bar"></div>
          <div className="details">
            <i className="fa-solid fa-bed"></i>
            <p>{props.bed} beds</p>
            <i className="fa-solid fa-bath"></i>
            <p>{props.bath} Bathrooms</p>
            <i className="fa-solid fa-square"></i>
            <p>
              {props.size}
              <sup>2</sup>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default House;
