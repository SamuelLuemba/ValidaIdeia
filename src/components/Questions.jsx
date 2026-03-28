import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Questions.module.css";
import questionImg from "./QuestionImg.svg"

 function Questions() {
  const perguntas = [
    "A ideia resolve um problema real e relevante?",
    "Existe mercado suficiente para essa solução?",
    "Existem concorrentes fortes já estabelecidos no mercado?",
    "O diferencial da ideia é claro?",
    "Você estaria disposto a investir tempo e dinheiro?",
    "Existe um público-alvo claramente definido?",
  "O mercado para essa solução está crescendo?",
  "Você tem recursos financeiros mínimos para começar?",
  "O diferencial da ideia é claro em relação à concorrência?",
  "Há evidências de que clientes pagariam por essa solução?",
  "Você tem conhecimento ou experiência na área?",
  "Há possibilidade de escalar o negócio no futuro?",
  "O custo de implementação é viável?",
  "Você tem acesso a parceiros ou rede de apoio?",
  "O modelo de receita é sustentável?",
  "Você tem uma estratégia para mitigar riscos principais?",
  "A ideia pode ser testada em pequena escala primeiro?",
  "O risco de entrada no mercado é baixo?",
  "Existe potencial de inovação ou tecnologia envolvida?",
  "O negócio pode gerar impacto positivo na sociedade?", ];

  const [index, setIndex] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (valor) => {
    const novaPontuacao = pontuacao + valor;

    if (index < perguntas.length - 1) {
      setPontuacao(novaPontuacao);
      setIndex(index + 1);
    } else {
      const percent = (novaPontuacao / perguntas.length) * 100;
      navigate("/result", { state: { percent } });
    }
  };

  return (
    <>
    <div className={style.questions}>
      <h2>{perguntas[index]}</h2>
      <div className={style.options}>
        <button onClick={() => handleAnswer(1)}>Sim</button>
        <button onClick={() => handleAnswer(0)}>Não</button>
        <button onClick={() => handleAnswer(0.5)}>Talvez</button>
      </div>
    </div>
    <div className={style.imageQuestion}>
            <img className={style.questionImgr} src={questionImg} alt="Imagem Questão" />
    </div>
    </>
  );
}

export default Questions