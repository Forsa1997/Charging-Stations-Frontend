import {
    FILTER_CHARGINGPOWER,
    FILTER_PLUGTYPE,
    FILTER_OPERATOR,
    FILTER_FREETOUSE,
    APPLY_FILTERS,
} from "../actions/types";
import stationData from "../data/stationData.json"

const initialState = { activeFilters: {}, data: stationData, filteredData: stationData };

const filterState = (state, filter) => {
    let filters = { ...state.activeFilters, [filter[0]]: filter[1] }
    console.log(filters)

    let filtered = state.data

    if (filters.filterKW) {
        filtered = chargingPowerFilter(filtered, filters.filterKW)
    }
    if (filters.filterPlugtype) {
        filtered = plugTypeFilter(filtered, filters.filterPlugtype)
    }

    return { filtered, filters };

}

const chargingPowerFilter = (data, filter) => {
    return data.filter(station => station.connections.filter(connection => connection.powerKW >= filter).length >= 1)
}

const plugTypeFilter = (data, filter) => {
    return (
        data.filter(station =>
            station.connections.filter(connection => {
                for (let i = 0; i < filter.length; i++) {
                    if (filter[i] === connection.connectionTypeID) {
                        return true;
                    }
                } return false;
            })
                .length >= 1
        )
    )
}

const freeToUseFilter = (data, filter) => {
    
}

const mapReducer = (state = initialState, action) => {
    const { type, payload } = action;
    let filterParams;
    switch (type) {
        case APPLY_FILTERS:
            return filterState(payload)
        case FILTER_CHARGINGPOWER:
            filterParams = filterState(state, ["filterKW", payload]);
            return { ...state, filteredData: filterParams.filtered, activeFilters: filterParams.filters }

        case FILTER_PLUGTYPE:
            filterParams = filterState(state, ["filterPlugtype", payload]);
            return { ...state, filteredData: filterParams.filtered, activeFilters: filterParams.filters }

        case FILTER_OPERATOR:
            return {
                ...state,
                isLoggedIn: false,
            };
        case FILTER_FREETOUSE:
            filterParams = filterState(state, ["filterFreeToUse", payload]);
            return { ...state, filteredData: filterParams.filtered, activeFilters: filterParams.filters }
        default:
            return state;
    }
}

export default mapReducer;