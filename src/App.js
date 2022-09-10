import logo from './weposvg.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Form from './components/Form';






function App() {
  return (
    <div className="App">
      <Navbar/>
      {/*<Form/>*/}
      
      <Hero/>
      <div>

      <Footer/>
      </div>
    </div>
  );
}

export default App;
