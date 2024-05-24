import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import ReactContextProvider from './Context/reactContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReactContextProvider>
      <App />
    </ReactContextProvider>
  </React.StrictMode>,
)
