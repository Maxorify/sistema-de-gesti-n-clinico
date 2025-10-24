import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/main.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
