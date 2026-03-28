import { Link } from "react-router-dom";
import style from "./Home.module.css";
import sucess from "./sucess.svg"
import logo from "./Logo.png"

function Home() {
  return (
    <div className={style.home}>
      <header className={style.header}>
        <img src={logo}  className={style.logoimg} alt="logo" />
      </header>

      {/* Espaço para imagem */}
      <div className={style.imagePlaceholder}>
        <img src={sucess} alt="Imagem home" />
      </div>

      {/* Texto explicativo */}
      <section className={style.intro}>
        <h2>Avalie sua ideia empreendedora</h2>
        <p>
          Este site foi criado para ajudar empreendedores a entender melhor o
          potencial de suas ideias. Responda a perguntas simples e receba uma
          análise percentual da eficiência da sua proposta.
        </p>
      </section>

      {/* Botão de ação */}
      <Link to="/questions">
        <button className={style.startBtn}>Avaliar minha ideia</button>
      </Link>
    </div>
  );
}
export default Home