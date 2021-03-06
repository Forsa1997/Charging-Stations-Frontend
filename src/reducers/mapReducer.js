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
    GET_STATION,
    RESET_FILTER,
    LOGOUT,
} from "../actions/types";

const activeFilters = JSON.parse(localStorage.getItem("activeFilters"));
const filteredData = JSON.parse(localStorage.getItem("filteredData"));
const savedFilters = JSON.parse(localStorage.getItem("savedFilters"));


const initialState = () => {

    let initFilteredData = [];
    let initSavedFilters = [];

    const initActiveFilters = activeFilters ? activeFilters : {};

    if (filteredData && filteredData.length !== 0) {
        initFilteredData = filteredData;
    }

    if (savedFilters && savedFilters.length !== 0) {
        initSavedFilters = savedFilters;
    }

    return ({
        activeFilters: initActiveFilters,
        data: [],
        filteredData: initFilteredData,
        savedFilters: initSavedFilters,
        currentStation: {},
    })
};

const filterState = (state, filter, preselect) => {
    let filters;

    if (preselect) {
        filters = preselect;
    } else {
        filters = { ...state.activeFilters, [filter[0]]: filter[1] }
    }
    localStorage.setItem("activeFilters", JSON.stringify(filters));
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
    localStorage.setItem("filteredData", JSON.stringify(filtered));
    return { filtered, filters };
}

const chargingPowerFilter = (data, filter) => {
    return data.filter(station => station.maxPower >= filter)
}

const plugTypeFilter = (data, filter) => {
    if (filter.length === 0) {
        return data;
    }
    return (
        data.filter(station => station.connectionTypeId.some(element => {
            return filter.includes(element);
        }))
    )
}

const freeToUseFilter = (data, filter) => {

    switch (filter) {
        case "no":
            return data.filter(station => [0, 1, 2, 3, 5].includes(station.usageTypeID));
        case "yes":
            return data.filter(station => [4, 6, 7].includes(station.usageTypeID));
        default:
            break;
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

const mapReducer = (state = initialState(), action) => {
    const { type, payload } = action;
    let filterParams;
    switch (type) {
        case GET_NEW_DATA:
            if (state.filteredData.length === 0) {
                return { ...state, data: payload.data, filteredData: payload.data }
            }
            return { ...state, data: payload.data }
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
            filterParams = filterState(state, [], payload);
            return { ...state, filteredData: filterParams.filtered, activeFilters: filterParams.filters }

        case RESET_FILTER:
            return { ...state, filteredData: state.data, activeFilters: {} }

        case FILTER_SAVE:
            localStorage.setItem("savedFilters", JSON.stringify([...state.savedFilters, {
                ...state.activeFilters,
                name: payload.name,
                userId: payload.userId,
            }]));
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
                    newSavedFilters = [...newSavedFilters, filter]
                }
            })
            localStorage.setItem("savedFilters", JSON.stringify(newSavedFilters))
            return {
                ...state, savedFilters: newSavedFilters
            }
        case FILTER_LOAD:
            return { ...state, savedFilters: payload.data.filters }

        case GET_STATION:
            return { ...state, currentStation: payload }

        case LOGOUT:
            return { ...state, activeFilters: [], savedFilters: [], filterdData: state.data }
        default:
            return state;
    }
}

export default mapReducer;