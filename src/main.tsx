import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import QueryClientProviderC from './components/QueryClientProviderC.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProviderC>
      <App />
    </QueryClientProviderC>
  </StrictMode>,
)
