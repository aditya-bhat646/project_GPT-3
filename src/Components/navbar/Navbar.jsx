import React, { Component } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../Assets/logo.svg';

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt3">What is GPT?</a>
      </p>
      <p>
        <a href="#possible">Open AI</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Libraries</a>
      </p>
    </>
  );
};

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      toggleMenu: false,
      setToggleMenu: (value) => {
        this.setState({ toggleMenu: value });
      },
    };
    console.clear();
  }

  render() {
    const { toggleMenu, setToggleMenu } = this.state;
    return (
      <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <img src={logo} alt="logo"></img>
          </div>
          <div className="gpt3__navbar-links_container">
            <Menu />
          </div>
        </div>
        <div className="gpt3__navbar-sign">
          <p>Sign In</p>
          <button type="button">Sign Up</button>
        </div>
        <div className="gpt3__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="white"
              size={30}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="white"
              size={30}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-center">
              <div className="gpt3__navbar-menu_container-links">
                <Menu />
                <div className="gpt3__navbar-menu_container-links-sign">
                  <p>Sign In</p>
                  <button type="button">Sign Up</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Navbar;
