import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { MdWatchLater } from "react-icons/md";
import "./navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleSubMenu, setToggleSubMenu] = useState(false);

  const toggleSubMenuHandler = () => {
    setToggleSubMenu(!toggleSubMenu);
  };

  return (
    <div className="navbar">
      <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <img src={logo} alt="Logo" />
            <h3>LEÓN2000 IMF S.A</h3>
          </div>
          <div className="gpt3__navbar-links_container">
            <p>
              <a href="#inicio">Inicio</a>
            </p>
            <p>
              <a href="#ofertas">Ofertas</a>
            </p>
            <p>
              <a href="#clientes">Clientes</a>
            </p>
            <p>
              <a href="#sobrenosotros" onClick={toggleSubMenuHandler}>
                Sobre Nosotros
              </a>
              {toggleSubMenu && (
                <div className="submenu">
                  <p>
                    <a href="#historia">Nuestra Historia</a>
                  </p>
                  <p>
                    <a href="#misionvision">Misión y Visión</a>
                  </p>
                  <p>
                    <a href="#juntadirectiva">Junta Directiva</a>
                  </p>
                </div>
              )}
            </p>
          </div>
        </div>
        <div className="gpt3__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#000"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#000"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-center">
              <div className="gpt3__navbar-menu_container-links">
                <p>
                  <a href="#inicio">Inicio</a>
                </p>
                <p>
                  <a href="#ofertas">Ofertas</a>
                </p>
                <p>
                  <a href="#historia">Historia</a>
                </p>
                <p>
                  <a href="#clientes">Clientes</a>
                </p>
                <p>
                  <a href="#sobrenosotros">Sobre Nosotros</a>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="rectangle">
        <div className="textos">
          <p>
            <MdWatchLater /> Lun - Vie 7:00 AM - 5:00 PM
          </p>
          <p className="bigg">
            <FaPhone /> 2311-6680{" "}
          </p>
          <p className="small">
            <IoMail /> leon2000imf@leon2000imf.com
          </p>
          <p className="medium">
            <FaMoneyBillTransfer /> Tasa de cambio c$ 36.62
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

       