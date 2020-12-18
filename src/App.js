import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Basket from './components/Basket'
import Contacts from './components/Contacts'
import Menu from './components/Menu'
import SB_bar from './components/SB_bar'
import Shares from './components/Shares'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Header/>
    <Switch>
      <Route path='/SB_bar' exact component={SB_bar}/> 

      <Route path='/Shares' exact component={Shares}/>

      <Route path='/Menu' exact component={Menu}/>

      {/* <Route path='/Contacts' exact component={Contacts}/>

      <Route path='/Basket' exact component={Basket}/> */}

    </Switch>
      <Footer/>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
