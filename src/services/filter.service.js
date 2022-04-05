import axios from "axios";
import authHeader from "./auth-header";



const API_URL = "https://charging-stations-backend.azurewebsites.net/";

const save = (filter) => {
    return axios.post(API_URL + "filter", filter, { headers: authHeader() })
}

const load = async () => {
    return await axios.get(API_URL + "filter", { headers: authHeader() })
}

const remove = async (filterName) => {
    return await axios.delete(API_URL + "filter", {headers: authHeader(), data: {name: filterName}})
}
const exports = { save, load, remove}

export default exports;