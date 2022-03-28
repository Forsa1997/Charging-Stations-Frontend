import axios from "axios";
import store from "../store";


const API_URL = "https://charging-stations-backend.azurewebsites.net/";

const register = (firstName, lastName, username, email, password) => {
  return axios.post(API_URL + "register", {
    firstName,
    lastName,
    username,
    email,
    password,
  });
};

const login = async (username, password) => {
  const response = await axios
    .post(API_URL + "login", {
      username,
      password,
    });
  if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const modifyUser = (user) => {
  return axios.patch(API_URL + "patch", {
    user,
  });
}

const exports = { register, login, logout, modifyUser }

export default exports;