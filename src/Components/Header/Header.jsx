import React, { useState } from "react";
import "./Header.css";
import { FiSearch } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";
import { BsHandbag } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import icon from "../../assets/orange.png";
import Room1 from "../../assets/Frame04.png";
import Room5 from "../../assets/Frame013.png";
import Room2 from "../../assets/Frame08.png";
import Room3 from "../../assets/Frame010.png";
import Room4 from "../../assets/Frame02.png";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaMinus, FaPlus } from "react-icons/fa";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Header = () => {
  const [cart, setCart] = useState(false);
  const showCart = () => {
    setCart(!cart);
  };

  const [brooms, setBrooms] = useState([
    {
      id: 1,
      img: Room1,
      name: "Minimalist Masterpiece",
      money: "95",
      sign: "$",
      end: "00",
      delete: <AiTwotoneDelete id="bin" />,
      minus: <FaMinus />,
      plus: <FaPlus />,
      num: "1",
    },
    {
      id: 2,
      img: Room2,
      name: "Minimalist Masterpiece",
      money: "95",
      sign: "$",
      end: "00",
      delete: <AiTwotoneDelete id="bin" />,
      minus: <FaMinus />,
      plus: <FaPlus />,
      num: "1",
    },
    {
      id: 3,
      img: Room3,
      name: "Minimalist Masterpiece",
      money: "95",
      sign: "$",
      end: "00",
      delete: <AiTwotoneDelete id="bin" />,
      minus: <FaMinus />,
      plus: <FaPlus />,
      num: "1",
    },
    {
      id: 4,
      img: Room4,
      name: "Minimalist Masterpiece",
      money: "95",
      sign: "$",
      end: "00",
      delete: <AiTwotoneDelete id="bin" />,
      minus: <FaMinus />,
      plus: <FaPlus />,
      num: "1",
    },
  ]);
  const showBrooms = true;
  return (
    <div className="Header">
      <div id="icon">
        <Link to="/">
          <img src={icon} alt="icon" id="orange" />
        </Link>
      </div>
      <div id="menu">
        <ul>
          <li>Farmhouse</li>
          <li>Modern</li>
          <li>Bohemian</li>
          <li>What's New?</li>
        </ul>
      </div>
      <div id="icon__area">
        <ul>
          <li></li>
          <li id="love" onClick={showCart}>
            <GrFavorite />
          </li>
          <li>
           <Link to ='/favorites' ><BsHandbag /></Link>
          </li>
          <li>
            <CiUser />
          </li>
        </ul>
      </div>
      {cart ? (
        <div>
          <div id="hidden"></div>
          <div id="work__area">
            <h2>My Cart</h2>
            {brooms.map((brooms) => {
              return (
                <div id="rooms">
                  <img src={brooms.img} alt="Room1" />
                  <div id="describe">
                    <h4>{brooms.name}</h4>
                    <div className="cash">
                      <p>{brooms.sign}</p>
                      <h4>{brooms.money}</h4>
                      <p id="l">{brooms.end}</p>
                    </div>
                    <div id="below">
                      <div id="btn">
                        <ul>
                          <li id="une">{brooms.minus}</li>
                          <li>1</li>
                          <li>{brooms.plus}</li>
                        </ul>
                      </div>
                      {brooms.delete}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
