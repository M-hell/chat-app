import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from './routes/index.jsx'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './redux/store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>,
)
