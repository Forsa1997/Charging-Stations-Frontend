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
        <Route path={process.env.PUBLIC_URL + "/map"} element={<Map />} />
        <Route path={process.env.PUBLIC_URL + "/register"} element={<SignUp />} />
        <Route path={process.env.PUBLIC_URL + "/login"} element={<Login />} />
        <Route path={process.env.PUBLIC_URL + "/profile"} element={<Profile />} />
        <Route path={process.env.PUBLIC_URL + "/logout"} element={<Login />} />
      </Routes>
    </Provider>
  );
}

export default App;


