import React, { useState } from "react";
import "./Favorites.css";
import Pic1 from "../../assets/Frame010.png";
import Pic2 from "../../assets/Frame08.png";
import Pic3 from "../../assets/Frame09.png";
import Pic4 from "../../assets/Frame011.png";
const Favorites = () => {
  const [favorite, setFavorite] = useState([
    {
      img: Pic1,
      name: "Minimalist Masterpiece",
      sign: "$",
      num: 95,
      end: "00",
    },
    {
      img: Pic3,
      name: "Minimalist Masterpiece",
      sign: "$",
      num: 95,
      end: "00",
    },
    {
      img: Pic2,
      name: "Minimalist Masterpiece",
      sign: "$",
      num: 95,
      end: "00",
    },
    {
      img: Pic4,
      name: "Minimalist Masterpiece",
      sign: "$",
      num: 95,
      end: "00",
    },
  ]);
  const showFavorite = true;
  return (
    <div className="Favorites">
      <div className="first__boxes">
        <div id="box1">
          <h3>Your Order(s) </h3>
          {favorite.map((favorite) => {
            return (
              <div>
                <div id="ordered__room">
                  <img src={favorite.img} alt="pic" />
                  <div id="det">
                    <h2 id="na">{favorite.name}</h2>
                    <div id="cudi">
                      <p>{favorite.sign}</p>
                      <h2>{favorite.num}</h2>
                      <p>{favorite.end}</p>
                    </div>
                  </div>
                </div>
                <div id="line"></div>
              </div>
            );
          })}
        </div>
        <div id="box2">
          <h2>Payment Information</h2>
          <div>
            <h4>Apply Discount</h4>
            <div id="Coupon__input">
              <input type="text" placeholder="Enter Coupon Code" />
              <button>Apply</button>
            </div>
            <div id="line"></div>
            <div id="Payment__method">
              <h4>Pay with</h4>
              <div id="method__options">
                <ul>
                  <li>
                    <input type="radio" />
                    Debit or Credit Card
                  </li>
                  <li>
                    <input type="radio" /> Pay on Delivery
                  </li>

                  <h4>Pay with</h4>
                  <li>
                    <input type="radio" /> Pay on Delivery
                  </li>
                </ul>
                <div id="line"></div>
                <div id="below">
                  <p>Sub Total</p>
                  <div id="cudi">
                    <p>$</p>
                    <h2>38</h2>
                    <p>00</p>
                  </div>
                </div>
                <div id="below">
                  <p>Tax(10%)</p>
                  <div id="cudi">
                    <p>$</p>
                    <h2>38</h2>
                    <p>00</p>
                  </div>
                </div>
                <div id="below">
                  <p>Sub Total</p>
                  <div id="cudi">
                    <p>$</p>
                    <h2>38</h2>
                    <p>00</p>
                  </div>
                </div>
                <div id="line"></div>
                <div id="below">
                  <p>Sub Total</p>
                  <div id="cudi">
                    <p>$</p>
                    <h2>38</h2>
                    <p>00</p>
                  </div>
                </div>
                <button id="pay">Proceed to pay</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="box3">
        <h3>Billing and Shipping</h3>
        <form>
          <div id="name">
            <div className="irst__n">
              <label>First Name</label>
              <input type="name" placeholder="John" />
            </div>
            <div className="first__n">
              <label>Last Name</label>
              <input type="name" placeholder="Oklu" />
            </div>
          </div>
          <div id="Email__n">
            <label>Email Address</label>
            <input type="name" placeholder="johnny@gmail.com" />
          </div>
          <div id="Email__n">
            <label>Address</label>
            <input type="name" placeholder="Abba str." />
          </div>
          <div id="name">
            <div className="irst__n">
              <label>City/Town</label>
              <input type="name" placeholder="lagos" />
            </div>
            <div className="first__n">
              <label>State</label>
              <input type="name" placeholder="lagos" />
            </div>
          </div>
          <div id="name">
            <div className="irst__n">
              <label>Mobile Number</label>
              <input type="name" placeholder="0254675323" />
            </div>
            <div className="first__n">
              <label>Postal Code</label>
              <input type="name" placeholder="6570" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Favorites;
