import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/Rent-a-Car">
    <App />
  </BrowserRouter>
);