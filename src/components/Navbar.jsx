import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaHome, FaInfoCircle, } from "react-icons/fa";
import { useState } from "react";
import style from "./Navbar.module.css";
import logo from "./Logo.png"

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={style.navbar}>
      <img src={logo}  className={style.logoimg} alt="logo" />
      
      {/* Links desktop */}
      <ul className={style.navlinks}>
        <li><Link to="/"><FaHome /></Link></li>
        <li><Link to="/about">Sobre</Link></li>
      </ul>

      {/* Botão menu mobile */}
      <button className={style.menuBtn} onClick={() => setOpen(!open)}>
        {open ? <FiX /> : <FiMenu />}
      </button>

      {/* Sidebar mobile */}
      <div className={`${style.sidebar} ${open ? style.show : ""}`}>
        <ul>
          <li><Link to="/" onClick={() => setOpen(false)}><FaHome /> Home</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)}><FaInfoCircle/> Sobre</Link></li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar