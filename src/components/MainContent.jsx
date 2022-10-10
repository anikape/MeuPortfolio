import About from './About'
import Projects from './Projects'
import Thecnologies from './Thecnologies'
import '../stylles/components/maincontent.sass'

const MainContent = () => {
  return (
    <main id="mainContent"> 
    <About />
    <Thecnologies />
    <Projects />
    </main>
  )
}

export default MainContent