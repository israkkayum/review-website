import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
       <Router>
         <Header></Header>
          <Switch>
          <Route exact path="/">
             <Home></Home>
          </Route>
          <Route path ="/home">
            <Home></Home>
          </Route>
          <Route path ="/service">
            <Service></Service>
          </Route>
          <Route path ="/about">
            <About></About>
          </Route>
          <Route path ="/contact">
            <Contact></Contact>
          </Route>
          <Route path = "*">
            <PageNotFound></PageNotFound>
          </Route>
          </Switch>
          <Footer></Footer>
       </Router>
  );
}

export default App;
