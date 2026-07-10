
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Bounce, ToastContainer } from 'react-toastify'
import { ThemeProvider } from './context/ThemeContext'
import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById('root')).render(
  <>
  <Analytics/>
    <ThemeProvider>
    <BrowserRouter>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Bounce}
/>
    <App/>
    </BrowserRouter>
    </ThemeProvider>
    </>
)