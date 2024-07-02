//Imports
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Menu from './Pages/Menu'
import Sobre from './Pages/Sobre'
import Contato from './Pages/Contato';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
    
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/menu' element={<Menu />} />
        <Route exact path='/sobre' element={<Sobre />} />
        <Route exact path='/contato' element={<Contato />} />
      </Routes>
      <Footer></Footer>
    </Router>
     
    </div>
  );
}

export default App;
