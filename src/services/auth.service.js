import axios from "axios";


const API_URL = "https://charging-stations-backend.azurewebsites.net/";

const register = (username, email, password) => {
  return axios.post(API_URL + "register", {
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

const exports = {register, login, logout}

export default exports;