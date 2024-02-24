import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Login from '../Login/Login';
import Reset from '../Reset/Reset';
import LoginNew from '../LoginNew/LoginNew';
import Registration from '../Registration/Registration';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<LoginNew />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/reset" element={<Reset />} />
      </Routes>
    </div>
  );
}

export default App;
