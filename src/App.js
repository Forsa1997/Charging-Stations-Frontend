import './App.css';
import Nav from './components/Nav';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Map from './components/Map'
import SignUp from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Login />} />
      </Routes>
      <script src="/build/client.entry.js" />
    </Provider>
  );
}

export default App;


