import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <p>© ValidaIdeia. Todos os direitos reservados.</p>
      <div className={style.social}>
        <a href="https://www.facebook.com/profile.php?id=61558794090763" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/samu_luemba" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/samuel-luemba-739579272/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}
