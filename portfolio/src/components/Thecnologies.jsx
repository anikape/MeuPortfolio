import {DiHtml5, DiJavascript, DiReact, DiGithubAlt, DiCss3, DiSass } from "react-icons/di"
import '../stylles/components/thecnologies.sass'

//array de objetos que serão interados a pag.

const tecnologias = [
  { id:"html", name:"HTML5", icons: <DiHtml5 /> },
  { id:"js", name:"JavaScript", icons:<DiJavascript /> },
  { id:"react", name:"React", icons: <DiReact /> },
  { id:"git", name:"Github", icons: <DiGithubAlt /> },
  { id:"css", name:"CSS3", icons: <DiCss3 /> },
  { id:"sass", name:"Sass", icons: <DiSass /> },
];

const Thecnologies = () => {
  return (
    <section className="tech-container">
      <h2>Tecnologias</h2>
      <div className="tech-grid">
        {tecnologias.map((tech) =>(
          <div className="tech-card" id={tech.id} key={tech.id}>
            {tech.icons}
            <div className="tech-info">
              <h3>{tech.name}</h3>
              <p>LoremLoremLoremLoremLore</p>
            </div>
          </div>
        ) )}
      </div>

    </section>
  )
}

export default Thecnologies