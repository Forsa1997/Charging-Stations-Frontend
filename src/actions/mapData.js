import {
    GET_NEW_DATA,
    SET_MESSAGE,
} from "./types";
import MapService from "../services/map.service";


export const loadStations = () => (dispatch) => {

    return MapService.loadStations().then(
        (response) => {
            dispatch({
                type: GET_NEW_DATA,
                payload: response,
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
