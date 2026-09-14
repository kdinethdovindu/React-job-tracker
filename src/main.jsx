import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import { ApplicationProvider } from './context/ApplicationContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ApplicationProvider>
        <App />
      </ApplicationProvider>
    </BrowserRouter>
  </StrictMode>
)
