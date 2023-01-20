import '../stylles/components/projects.sass'
import Avatar from '../img/Brasileirissimo.jpg';
import SustentaTech from '../img/sustentaTech.jpg';
import MundoInvertido from "../img/MundoInvertido.png";
import NLW from "../img/NLW ESports.png";
import Conversor from "../img/ConversorMoedas.png";
import SouJr from "../img/SouJr.png"

const Projects = () => {
  return (
    
    <section className="projects-container">
    <h2>Projetos</h2>
    <h3 id="title">Projetos conjuntos</h3>
    <div className="projetos-grid">
    <div className="projetos-cards">
      <img src={SouJr} alt="SouJr" />
      <h3>SouJr</h3>
      <a href="https://www.soujunior.tech/" target="_blank" id="btn">Ver Projeto</a>
    </div>
    <div className="projetos-cards">
      <img src={Avatar} alt="Brasileirissimo" />
      <h3>Brasileiríssimo</h3>
      <a href="https://matheusxavierr.github.io/ProjetoDev/" target="_blank" id="btn">Ver Projeto</a>
    </div>
    <div className="projetos-cards">
      <img src={SustentaTech} alt="Sustenta-Tech" />
      <h3>Sustena-Tech</h3>
      <a href="https://wellpt.github.io/TechTeamProject/" target="_blank" id="btn">Ver Projeto</a>
    </div>
    
    </div>

    
    <h3 id="title">Projetos individuais</h3>
    <div className="projetos-grid">
    <div className="projetos-cards">
      <img src={MundoInvertido} alt="Mundo Invertido" />
      <h3></h3>
      <a href="https://anikape.github.io/MundoInvertido-DIO/" target="_blank" id="btn">Ver Projeto</a>
    </div>
    <div className="projetos-cards">
      <img src={NLW} alt="NLW" />
      <h3></h3>
      <a href="https://anikape.github.io/nlw-esports-explorer/" target="_blank" id="btn">Ver Projeto</a>
    </div>
    <div className="projetos-cards">
      <img src={Conversor} alt="Conversor de Moedas" />
      <h3></h3>
      <a href="https://anikape.github.io/Conversor-de-Moedas/" target="_blank" id="btn">Ver Projeto</a>
    </div>
   
    </div>



    </section>
 
 
  )
}

export default Projects