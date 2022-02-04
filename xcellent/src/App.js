import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';
import Home from './pages';
import { Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path ='/' exact component={Home}/>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
