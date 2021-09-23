import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';

import {
  Navbar,
  Exchanges,
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from './components/';

function App() {
  return (
    <div className='App'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <div className='layout'>
          <div className='routes'>
            <Switch>
              <Route exact path='/'>
                <Homepage />
              </Route>
              <Route exact path='/exchanges'>
                <Exchanges />
              </Route>
              <Route exact path='/cryptocurrencies'>
                <Cryptocurrencies />
              </Route>
              <Route exact path='/crypto/:coinId'>
                <CryptoDetails />
              </Route>
              <Route exact path='/news'>
                <News />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
      <div className='footer'></div>
    </div>
  );
}

export default App;
