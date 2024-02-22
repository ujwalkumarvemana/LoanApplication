import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Login from '../Login/Login';
import Reset from '../Reset/Reset'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset" element={<Reset/>} />
      </Routes>
    </div>
  );
}

export default App;
