import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import PromoModal from './Pages/PromoModal'
import { ShoesProvider } from './Context'



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <React.StrictMode>
    <ShoesProvider>
      <App />
      <PromoModal />
    </ShoesProvider>
   </React.StrictMode>
  </>
    
)
