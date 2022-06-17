import './App.css';
import{Provider} from "react-redux";
import store from "./store";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Nav from "./components/Nav"
import Home from "./components/Home";
import Cart from './components/Cart';
import Details from './components/Details';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';




function App() {
  return (
    <Router>
      <Provider store={store}>
      
     <Nav/>
     <Route path="/" exact component={Home}/>
     <Route path="/cart" exact component={Cart}/>
     <Route path="/about" exact component={About}/>
     <Route path="/contact" exact component={Contact}/>
     <Route path="/details/:id" exact component={Details}/>
     <Footer/>
     {/* <Googlepay/> */}
     </Provider>
     
     </Router>
     
   
  );
}

export default App;
