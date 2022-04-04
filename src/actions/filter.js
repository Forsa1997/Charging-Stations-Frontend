import {
    FILTER_PLUGTYPE,
    FILTER_OPERATOR,
    FILTER_FREETOUSE,
    FILTER_CHARGINGPOWER,
    FILTER_SAVE,
    } from "./types";
    
    export const filterPower = (power) => (dispatch) => {
        dispatch({
            type: FILTER_CHARGINGPOWER,
            payload: power,
        })
    }
    
    export const filterPlug = (plug) => (dispatch) => {
        let payload;
        switch (plug) {
            case "ccs": payload = [32,33];
            break;
            case "type2": payload = [25,1036];
            break;
            default: payload = [];
        }    
        dispatch({
            type: FILTER_PLUGTYPE,
            payload,
        })
    }

    export const filterFreeToUse = (isFreeToUse) => (dispatch) => {
        dispatch({
            type: FILTER_FREETOUSE,
            payload: isFreeToUse,
        })
    }

    export const filterOperators = (operators) => (dispatch) => {
        dispatch({
            type: FILTER_OPERATOR,
            payload: operators,
        })
    }

    // TODO saveFilter umschreiben und an das Backend schicken
    // export const register = (firstName, lastName, username, email, password) => (dispatch) => {
    //     return AuthService.register(firstName, lastName, username, email, password).then(
    //         (response) => {
    //             dispatch({
    //                 type: REGISTER_SUCCESS,
    //             });
    //             dispatch({
    //                 type: SET_MESSAGE,
    //                 payload: response.data.message,
    //             });
    //             return Promise.resolve();
    //         },
    //         (error) => {
    //             const message =
    //                 (error.response &&
    //                     error.response.data &&
    //                     error.response.data.message) ||
    //                 error.message ||
    //                 error.toString();
    //             dispatch({
    //                 type: REGISTER_FAIL,
    //             });
    //             dispatch({
    //                 type: SET_MESSAGE,
    //                 payload: message,
    //             });
    //             return Promise.reject();
    //         }
    //     );
    // };

    export const saveFilter = (filterName, userId) => (dispatch) => {
        dispatch({
            type: FILTER_SAVE,
            payload: filterName, userId
        })
    }