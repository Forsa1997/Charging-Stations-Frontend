import axios from "axios";



const API_URL = "https://charging-stations-backend.azurewebsites.net/";

const loadStations = async () => {
    return await axios.get(API_URL + "stations")
}

const exports = { loadStations }

export default exports;