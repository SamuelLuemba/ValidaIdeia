import { useLocation, Link } from "react-router-dom";
import style from "./result.module.css";
import resultImg from "./resultImg.svg"

function Result() {
  const location = useLocation();
  const percent = location.state?.percent || 0;

   // Mensagem interpretativa
  let mensagem = "";
  if (percent >= 80) {
    mensagem = "Alta chance de sucesso! Sua ideia é muito promissora.";
  } else if (percent >= 50) {
    mensagem = "Boa chance de sucesso, mas ainda precisa de ajustes.";

  } else {
    mensagem = "Baixa viabilidade no momento. Reavalie ou refine sua ideia.";

  }

  return (
    <div className={style.result}>
      <h1>Resultado da Avaliação</h1>
      <p>Sua ideia tem aproximadamente:</p>
      <h2>{percent.toFixed(0)}% de chance de eficiência</h2>

      <div className={style.progressBar}>
        <div 
          className={style.progress} 
          style={{ width: `${percent}%` }}
        ></div>
      </div>

      <p className={style.message}>{mensagem}</p>

      <Link to="/">
        <button className={style.backBtn}>Voltar ao início</button>
      </Link>
      <div className={style.imageResult}>
       <img className={style.resultImgr} src={resultImg} alt="Imagem Questão" />
       </div>
    </div>
  );
}
export default Result