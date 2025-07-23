import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './index.jsx'
import './index.css';
import SignUp from  './user/pages/signUp.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <SignUp />
  </StrictMode>,
)
