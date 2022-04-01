import {
    FILTER_PLUGTYPE,
    FILTER_OPERATOR,
    FILTER_FREETOUSE,
    FILTER_CHARGINGPOWER,
    } from "./types";
    
    export const filterPower = (power) => (dispatch) => {
        dispatch({
            type: FILTER_CHARGINGPOWER,
            payload: power,
        })
    }
    
    export const filterPlug = (plug) => (dispatch) => {
        let payload;
        console.log(plug)
        switch (plug) {
            case "ccs": payload = [32,33];
            break;
            case "type2": payload = [25,1036];
            break;
            default: payload = [25,32,33,1036];
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

    // ["Free", "0", "Kostenlos", "Free of charge", "free"]