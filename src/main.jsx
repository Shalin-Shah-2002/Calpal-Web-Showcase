import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PrivacyPolicy from './PrivacyPolicy.jsx'

const normalizedPath = window.location.pathname.replace(/\/+$/, '').toLowerCase()
const isPrivacyPolicyPage = normalizedPath === '/privacy-policy'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isPrivacyPolicyPage ? <PrivacyPolicy /> : <App />}
  </StrictMode>,
)
