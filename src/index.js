import React from 'react';
import ReactDOM from 'react-dom/client';
import Createnote from './Createnote';
import BtncreateNote from './BtncreateNote';
import BtneditNote from './BtneditNote';
import DeleteNote from './DeleteNote';
import './tailwind.css';
import Navbar from './Navbar';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Navbar />
    <Createnote />
    <BtncreateNote/>
    <BtneditNote/>
    <DeleteNote/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
