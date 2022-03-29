import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
    CLEAR_MESSAGE,
    MODIFY_USER,
} from "./types";
import AuthService from "../services/auth.service";


export const register = (firstName, lastName, username, email, password) => (dispatch) => {
    return AuthService.register(firstName, lastName, username, email, password).then(
        (response) => {
            dispatch({
                type: REGISTER_SUCCESS,
            });
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
                type: REGISTER_FAIL,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    );
};


export const login = (username, password) => (dispatch) => {
    return AuthService.login(username, password).then(
        (data) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: data },
            });
            dispatch({
                type: CLEAR_MESSAGE,
            });
            // return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({
                type: LOGIN_FAIL,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            // return Promise.reject();
        }
    );
};

export const logout = () => (dispatch) => {
    AuthService.logout();
    dispatch({
        type: LOGOUT,
    });
};

export const modifyUser = (user) => (dispatch) => {
    console.log("MODIFYUSER")
    return AuthService.modifyUser(user).then(
        (data) => {
            dispatch({
                type: MODIFY_USER,
                payload: { userData: data },
            });
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
        }
    );
};