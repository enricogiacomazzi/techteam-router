import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';
import { Page3 } from './pages/Page3';
import { Navbar } from './components/Navbar';
import { Page21 } from './pages/Page21';
import { Page22 } from './pages/Page22';
import { Page23 } from './pages/Page23';

console.log('init', new Date().getSeconds());


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='poke/:name' element={<Page1/>}/>
      <Route path='pag2' element={<Page2/>}>
        <Route path='pag21' element={<Page21/>}/>
        <Route path='pag22' element={<Page22/>}/>
        <Route path='pag23' element={<Page23/>}/>
      </Route>
      <Route path='pag3' element={<Page3/>}/>
      <Route path='*' element={<Navigate to="/"/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
