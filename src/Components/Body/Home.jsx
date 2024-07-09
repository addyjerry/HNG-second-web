import React, { useState } from "react";
import "../../assets/Icon-left.png";
import { MdFilterList } from "react-icons/md";
import { RxCaretSort } from "react-icons/rx";
import Frame1 from "../../assets/Frame1.png";
import Frame2 from "../../assets/Frame02.png";
import Frame3 from "../../assets/Frame03.png";
import Frame4 from "../../assets/Frame04.png";
import Frame5 from "../../assets/Frame05.png";
import Frame6 from "../../assets/Frame06.png";
import Frame7 from "../../assets/Frame07.png";
import Frame8 from "../../assets/Frame08.png";
import Frame9 from "../../assets/Frame09.png";
import rating from "../../assets/Vector.png";
import { BsHandbag } from "react-icons/bs";
import left from "../../assets/Left Content.png";
import right from "../../assets/Right Content.png";
import "./Body.css";

const Home = () => {
  const [room, setRoom] = useState([
    {
      id: 1,
      img: Frame1,
      name: "Sun-drenched Sanctuary",
      price: "95",
      description: "Parisian Morning",
      rating: rating,
      button: "Add to Cart",
      end: "00",
      sign: "$",
    },
    {
      id: 1,
      img: Frame2,
      name: "Sun-drenched Sanctuary",
      price: "95",
      description: "Parisian Morning",
      rating: rating,
      button: "Add to Cart",
      sign: "$",
      end: "00",
    },
    {
      id: 1,
      img: Frame3,
      name: "Sun-drenched Sanctuary",
      price: "95",
      description: "Parisian Morning",
      rating: rating,
      button: "Add to Cart",
      end: "00",
      sign: "$",
    },
    {
      id: 2,
      img: Frame4,
      name: "Sun-drenched Sanctuary",
      price: "95",
      description: "Parisian Morning",
      sign: "$",
      rating: rating,
      button: "Add to Cart",
      end: "00",
    },
    {
      id: 2,
      img: Frame5,
      name: "Sun-drenched Sanctuary",
      price: "95",
      description: "Parisian Morning",
      rating: rating,
      button: "Add to Cart",
      sign: "$",
      end: "00",
    },
    {
      id: 2,
      img: Frame6,
      name: "Sun-drenched Sanctuary",
      price: "95",
      description: "Parisian Morning",
      rating: rating,
      button: "Add to Cart",
      sign: "$",
      end: "00",
    },
    {
      id: 3,
      img: Frame7,
      name: "Sun-drenched Sanctuary",
      price: "95",
      description: "Parisian Morning",
      rating: rating,
      button: "Add to Cart",
      sign: "$",
      end: "00",
    },
    {
      id: 3,
      img: Frame8,
      name: "Sun-drenched Sanctuary",
      price: "95",
      description: "Parisian Morning",
      rating: rating,
      button: "Add to Cart",
      sign: "$",
      end: "00",
    },
    {
      id: 3,
      img: Frame9,
      name: "Sun-drenched Sanctuary",
      price: "95",
      description: "Parisian Morning",
      rating: rating,
      button: "Add to Cart",
      sign: "$",
      end: "00",
    },
  ]);

  const showRoom = true;
  return (
    <div id="Body">
      <div id="body__head">
        <h2>Modern</h2>
      </div>
      <div id="body__left">
        <input
          type="text"
          className="input-with-image"
          placeholder="      Search items"
        />
        <div id="filter">
          <MdFilterList id="fill" />
          <p>Filter</p>
        </div>
        <div id="sort">
          <RxCaretSort id="sor" />
          <p>Sort</p>
        </div>
      </div>
      <section className="main__body">
        {room.map((room) => {
          return (
            <div className="first__row">
              <div id="first__room">
                <img src={room.img} alt="picture" />
                <div id="description">
                  <div id="details__description">
                    <h4 id="name">{room.name}</h4>
                    <div id="money">
                      <p>{room.sign}</p>
                      <h4>{room.price}</h4>
                      <p>{room.end}</p>
                    </div>
                  </div>
                  <div id="more__d">{room.description}</div>
                </div>
                <div>
                  <div id="rating">
                    <img src={room.rating} alt="" />
                    <img src={room.rating} alt="" />
                    <img src={room.rating} alt="" />
                    <img src={room.rating} alt="" />
                    <img src={room.rating} alt="" />
                    <img src={room.rating} alt="" />
                    (90)
                  </div>
                  <div id="add">
                    <BsHandbag />
                    {room.button}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <section id="pages">
        <div id="page__indicator">
          <h4>Page 1 of 30</h4>
        </div>
        <div id="container">
          <ul>
            <li id="active">1</li>
            <li id="inactive">2</li>
            <li id="inactive">3</li>
            <li id="inactive">..</li>
            <li id="inactive">10</li>
            <li id="inactive">11</li>
            <li id="inactive">12</li>
          </ul>
        </div>
        <div id="framer">
          <p>Go to page</p>
          <div id="content">
            <img src={left} alt="" />
            <img src={right} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
