import './App.css';
import Hero from './Components/Hero';
import Explore from './Components/Explore';
import Nav from './Components/Nav';
import GoodEats from './Components/GoodFood';
import Relaxation from './Components/Relaxation';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <br />
      <Explore />
      <br />
      <GoodEats />
      <br />
      <Relaxation />
      <Footer />
     </div>
  );
}

export default App;
