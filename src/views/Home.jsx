import './Home.css';
import ObjetivoLista from '../components/ObjetivoLista/ObjetivoLista';
import Navbar from "../components/Navbar/Navbar";

function Home() {
    return <div className="Home">
        <Navbar/>
        <div className="Home__container">
            <ObjetivoLista/>
        </div>
    </div>;
  }
  
  export default Home;