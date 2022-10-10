import MainContent from './components/MainContent.jsx';
import Sidebar from './components/Sidebar.jsx';
import Footer from './components/Footer.jsx';
import './stylles/components/app.sass';

function App() {
   return (
   <>
    <div id="portfolio">
      <h1>Ana Santos</h1>
      <Sidebar /> 
      <MainContent />
      </div>
      <Footer />
      </> 
  )
}

export default App





//Sidebar e MainContent são components importados