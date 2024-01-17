import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Login from '../Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
