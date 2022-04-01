import {
    FILTER_CHARGINGPOWER,
    FILTER_PLUGTYPE,
    FILTER_OPERATOR,
    FILTER_FREETOUSE,
} from "../actions/types";
import stationData from "../data/stationData.json"

const initialState = {data: stationData, filteredData: stationData};

const mapReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case FILTER_CHARGINGPOWER:
            // Math.max.apply(Math, stations.connections.map(function(o) { return o.powerKW; }))
            return {...state, filteredData: state.data.filter(station => station.connections.filter(connection => connection.powerKW >= payload).length >= 1)}

        case FILTER_PLUGTYPE:
            return {
                ...state,
                isLoggedIn: false,
            };
        case FILTER_OPERATOR:
            return {
                ...state,
                isLoggedIn: false,
            };
        case FILTER_FREETOUSE:
            return {
                ...state,
                isLoggedIn: false,
            };
        default:
            return state;
    }
}

export default mapReducer;