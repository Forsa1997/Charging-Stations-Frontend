import axios from "axios";



const API_URL = "https://charging-stations-backend.azurewebsites.net/";

const loadStations = async () => {
    return await axios.get(API_URL + "stations")
}

const getStation = async (id) => {
    let apiUrl =  "https://api.openchargemap.io/v3/poi/?output=json&camelcase=true&maxresults=1&chargepointid=" + id + "&key=326ba9d9-34a9-4031-9408-c17a289623b2"
    return await axios.get(apiUrl)
}

const exports = { loadStations, getStation }

export default exports;