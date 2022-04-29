import './App.css';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Profile from './components/profile';
import Home from './components/home';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
