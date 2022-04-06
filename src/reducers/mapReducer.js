import {
    FILTER_CHARGINGPOWER,
    FILTER_PLUGTYPE,
    FILTER_OPERATOR,
    FILTER_FREETOUSE,
    GET_NEW_DATA,
    FILTER_SAVE,
    FILTER_REMOVE,
    FILTER_PRESELECT,
    FILTER_LOAD,
} from "../actions/types";
import stationData from "../data/stationData.json"

const initialState = { activeFilters: {}, data: stationData, filteredData: stationData, savedFilters: [] };

const filterState = (state, filter, preselect) => {
    let filters;
    
    if (preselect){
        filters = preselect;
    } else {
        filters = { ...state.activeFilters, [filter[0]]: filter[1] }
    }

    let filtered = state.data

    if (filters.filterKW) {
        filtered = chargingPowerFilter(filtered, filters.filterKW)
    }
    if (filters.filterPlugtype) {
        filtered = plugTypeFilter(filtered, filters.filterPlugtype)
    }
    if (filters.filterOperator) {
        filtered = operatorFilter(filtered, filters.filterOperator)
    }
    if (filters.filterFreeToUse) {
        filtered = freeToUseFilter(filtered, filters.filterFreeToUse)
    }

    return { filtered, filters };

}

const chargingPowerFilter = (data, filter) => {
    // return data.filter(station => station.connections.filter(connection => connection.powerKW >= filter).length >= 1)
    return data.filter(station => station.maxChargePower >= filter)
}

const plugTypeFilter = (data, filter) => {
    if (filter.length === 0) {
        return data;
    }
    return (
        data.filter(station =>
            station.connections.filter(connection => {
                for (let i = 0; i < filter.length; i++) {
                    if (filter[i] === connection.connectionTypeID) {
                        return true;
                    }
                }
                return false;
            })
                .length >= 1
        )
    )
}

const freeToUseFilter = (data, filter) => {
    if (filter.length === 1) {
        switch (filter[0]) {
            case "yes":
                return data.filter(station => [0, 1, 2, 3, 5].includes(station.usageTypeID));
            case "no":
                return data.filter(station => [4, 6, 7].includes(station.usageTypeID));
            default:
                break;
        }
    }
    return data;
}

const operatorFilter = (data, filter) => {
    if (filter.length === 0) {
        return data;
    } else {
        return data.filter(station => filter.includes(station.operatorID));
    }
}


const mapReducer = (state = initialState, action) => {
    const { type, payload } = action;
    let filterParams;
    switch (type) {
        case GET_NEW_DATA:
            let maxPower = 0;
            payload.forEach((station) => {
                station.connections.forEach(connection => {
                    if (maxPower < connection.powerKW) {
                        maxPower = connection.powerKW
                    }
                })
                station.maxChargePower = maxPower;
                maxPower = 0;
            })
            return { ...state, data: payload }
        case FILTER_CHARGINGPOWER:
            filterParams = filterState(state, ["filterKW", payload]);
            return { ...state, filteredData: filterParams.filtered, activeFilters: filterParams.filters }

        case FILTER_PLUGTYPE:
            filterParams = filterState(state, ["filterPlugtype", payload]);
            return { ...state, filteredData: filterParams.filtered, activeFilters: filterParams.filters }

        case FILTER_OPERATOR:
            filterParams = filterState(state, ["filterOperator", payload]);
            return { ...state, filteredData: filterParams.filtered, activeFilters: filterParams.filters }

        case FILTER_FREETOUSE:
            filterParams = filterState(state, ["filterFreeToUse", payload]);
            return { ...state, filteredData: filterParams.filtered, activeFilters: filterParams.filters }
            
        case FILTER_PRESELECT:
            filterParams = filterState(state, [],  payload);
            return { ...state, filteredData: filterParams.filtered, activeFilters: filterParams.filters }

        case FILTER_SAVE:
        return {
            ...state, savedFilters: [...state.savedFilters, {
                ...state.activeFilters,
                name: payload.name,
                userId: payload.userId,
            }]
        }
        case FILTER_REMOVE:
            let newSavedFilters = [];
            state.savedFilters.forEach(filter => {
                if (!(filter.name === payload)) {
                    newSavedFilters.add(filter)
                }
            })
            return {
                ...state, savedFilters: newSavedFilters
            }
        case FILTER_LOAD:
            console.log("---------PAYLOAD-------")
            console.log(payload)
            console.log("---------PAYLOAD.DATA.FILTERS-------")
            console.log(payload.data.filters)
            return {...state, savedFilters: payload.data.filters}
        default:
            return state;
    }
}

export default mapReducer;