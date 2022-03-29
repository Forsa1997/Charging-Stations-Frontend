import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    MODIFY_USER,
} from "../actions/types";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };

const authReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
            };
        case REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: payload.user,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        case MODIFY_USER:
            return {
                ...state,
                user: {
                    ...user,
                    firstName: payload.data.firstName,
                    lastName: payload.data.lastName,
                    username: payload.data.username,
                    email: payload.data.email,
                }
            }
        default:
            return state;
    }
}

export default authReducer;