/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles/Header.css";
import logo1 from "../images/shinhanlogo2.png";
import logo2 from "../images/shinhands.png";
import Buttons from "./Buttons";
const Header = () => {
  return (
    <div className="header">
      <div className="headerTop">
        <img src={logo1} id="logo1" alt="" />
        <img src={logo2} alt="" />
        <div className="login">
          <a>회원가입 | </a>
          <Buttons />
        </div>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="">COMPANY</a>
            <ul>
              <li>
                <a href="">MENU1-1</a>
              </li>
              <li>
                <a href="">MENU1-2</a>
              </li>
              <li>
                <a href="">오시는길</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">BUSINESS</a>
            <ul>
              <li>
                <a href="">MENU2-1</a>
              </li>
              <li>
                <a href="">MENU2-2</a>
              </li>
              <li>
                <a href="">MENU2-3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">PR CENTER</a>
            <ul>
              <li>
                <a href="">MENU3-1</a>
              </li>
              <li>
                <a href="">MENU3-2</a>
              </li>
              <li>
                <a href="">MENU3-3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">RECRUIT</a>
            <ul>
              <li>
                <a href="">MENU4-1</a>
              </li>
              <li>
                <a href="">MENU4-2</a>
              </li>
              <li>
                <a href="">MENU4-3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">INFO</a>
            <ul>
              <li>
                <a href="">MENU5-1</a>
              </li>
              <li>
                <a href="">MENU5-2</a>
              </li>
              <li>
                <a href="">MENU5-3</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
