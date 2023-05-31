import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from "./App.jsx";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import * as mdb from 'mdb-ui-kit';
import 'react-multi-carousel/lib/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
      <ToastContainer/>
  </React.StrictMode>,
)
