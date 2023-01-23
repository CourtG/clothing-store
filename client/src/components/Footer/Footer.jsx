import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            I love cheese, especially stinking bishop fromage frais. Say cheese
            macaroni cheese fondue stinking bishop hard cheese emmental cream
            cheese ricotta. Swiss macaroni cheese fromage manchego rubber cheese
            taleggio ricotta red leicester.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Goat hard cheese jarlsberg. Boursin jarlsberg cottage cheese who
            moved my cheese cheese on toast cheese slices caerphilly airedale.
            Cottage cheese cheese and wine stinking bishop cut the hard
            cauliflower cheese slices.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">StoreFront</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
