import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "../src/index.css"
import { BrowserRouter } from 'react-router-dom'
import UserContext from './Context/userContext.jsx'

createRoot(document.getElementById('root')).render(
    // <BrowserRouter>
    //     <App />
    // </BrowserRouter>
    <UserContext>
        <App />
    </UserContext>
)