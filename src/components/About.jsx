import '../stylles/components/about.sass'

import GIF from "../img/Gif-animation-hello.gif";

const About = () => {
  return (
      
    <section className="about-container">
      <h2>Sobre</h2>
      <div class="about-grid">
        <p> Sou Ana Santos e sou desenvolvedora Front-End. Tenho bacharelado em  Secretariado e Especialização em Gestão Pública, mas a área de Tecnologia
          sempre chamou minha atenção. Em março de 2022 iniciei minha migração de carreira e atualmente estou cursando <b>Análise e Desenvolvimento de Sistemas.</b> 
          Desde então, paralelo ao curso de ADS, comecei a estudar as linguagens de programação e durante um desses cursos comecei a integrar a Tech Team e junto com eles desenvolvemos
          dois projetos: O site Brasileiríssimo, onde você faz uma viagem pelas mais belas paisagens e culturas do Brasil e o Sustenta-Tech. Este em especial foi o projeto
          ganhador do 1º Hackathon que tivemos a oportunidade de participar.
          </p>
          <p>Te convido a conhecer esses projetos e a compartilhar comigo o meu progresso. É um prazer ter você aqui!</p>
        </div>
        
    </section>
  )
}

export default About