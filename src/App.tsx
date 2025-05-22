import {BrowserRouter as Router} from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Listado from './pages/Listado';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Listado />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;