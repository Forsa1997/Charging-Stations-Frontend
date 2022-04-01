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