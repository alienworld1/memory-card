import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';
import { fetchCats } from './api/cat.js';

const render = catList => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App catList={catList}/>
    </React.StrictMode>,
  );  
}

fetchCats(30)
  .then(response => {
    render(response);
  })
  .catch(error => {
    console.error(error);
    alert('There was an error fetching images of cats. Please try again later.');
  })
