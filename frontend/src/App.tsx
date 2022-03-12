import React from 'react';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import {Helmet} from 'react-helmet';

import Button from '@mui/material/Button';
import '@fontsource/roboto/'

import Header from './components/header'
import Footer from './components/footer'

function App() {
  return (
      <div className="App">
          <Helmet>
              <title>Global Shop</title>
              <meta name="description" content="Normal Application" />
              <meta
                  name="viewport"
                  content="initial-scale=1, width=device-width"
              />
          </Helmet>
          <Header />
          <h1> Global Tele Shop</h1>
          <nav
              style={{
                  borderBottom: "solid 1px",
                  paddingBottom: "1rem",
              }}
          >
              <Link to="/products">
                  <Button variant="contained">Products</Button>
              </Link>

              <Link to="/about-us">
                  <Button>About Us</Button>
              </Link>
          </nav>
          <Outlet />
          <Footer name="Hello World" />
      </div>
  );
}

export default App;
