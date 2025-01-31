import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import Boards from './Components/Boards';
import Navbar from './Components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration.json';
Amplify.configure(config);
import LogIn from './Components/LogIn';
import Templates from './Components/Templates';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path="/" element={<App/>}/>
              <Route path="/boards" element={<Boards/>}/>
              <Route path="/logIn" element={<LogIn/>}/>
              <Route path="/templates" element={<Templates/>}/>
              {/*Here we add more pages by adding more Route elements*/}
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
