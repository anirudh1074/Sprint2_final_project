import React from 'react';
import { BrowserRouter, Route, Link,Switch } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import Login from "./components/Login/Login"
import {Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';
import SignUp from './components/SignUp/SignUp';



const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <SignUp />
            </Route>
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route exact path="/Homepage">
              <Homepage />
            </Route>
            <Route exact path="/Exchanges">
              <Exchanges />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
          </Switch>
        </div>
        </Layout>
        <div className="footer" >
        <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
          Cryptoverse <br/>
          All rights reserved
        </Typography.Title>
        <Space>
          <Link to="/Homepage">Home</Link>
          <Link to="/Cryptocurrencies">Cryptocurrencies</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
      
     
  </div>
);

export default App;
