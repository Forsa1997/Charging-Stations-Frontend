import {
    FILTER_PLUGTYPE,
    FILTER_OPERATOR,
    FILTER_FREETOUSE,
    FILTER_CHARGINGPOWER,
    FILTER_SAVE,
    SET_MESSAGE,
    FILTER_REMOVE,
    FILTER_LOAD,
} from "./types";
import FilterService from "../services/filter.service";


export const filterPower = (power) => (dispatch) => {
    dispatch({
        type: FILTER_CHARGINGPOWER,
        payload: power,
    })
}

export const filterPlug = (plug) => (dispatch) => {
    let payload;
    if (plug.length === 1) {
        switch (plug[0]) {
            case "ccs":
                payload = [32, 33];
                break;
            case "type2":
                payload = [25, 1036];
                break;
            default:
                break;
        }
    } else {
        payload = [];
    }

    dispatch({
        type: FILTER_PLUGTYPE,
        payload,
    })
}

export const filterOperators = (operators) => (dispatch) => {
    dispatch({
        type: FILTER_OPERATOR,
        payload: operators,
    })
}

export const filterFreeToUse = (isFreeToUse) => (dispatch) => {
    dispatch({
        type: FILTER_FREETOUSE,
        payload: isFreeToUse,
    })
}

export const saveFilter = (filter) => (dispatch) => {
    return FilterService.save(filter).then(
        (response) => {
            dispatch({
                type: FILTER_SAVE,
                payload: filter,
            })
            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });
            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    );
};

export const removeFilter = (filterName) => (dispatch) => {

    return FilterService.remove(filterName).then(
        (response) => {
            dispatch({
                type: FILTER_REMOVE,
                payload: filterName,
            })
            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });
            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    );
};

export const loadFilter = () => (dispatch) => {

    return FilterService.load().then(
        (response) => {
            dispatch({
                type: FILTER_LOAD,
                payload: response,
            })
            localStorage.setItem("savedFilters", JSON.stringify(response.data.filters));
            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });
            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    );
};
