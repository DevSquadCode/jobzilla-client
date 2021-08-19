import firebase from "firebase/app";
import "firebase/auth";
import jwt_decode from "jwt-decode";

export const setJWTToken = () => {
    return firebase
        .auth().currentUser
        .getIdToken(true)
        .then(idToken => {
            localStorage.setItem('token', idToken)
        })
}

export const getDecodedUser = () => {
    const token = localStorage.getItem('token');
    if (!token) {
        return {};
    }
    const { email } = jwt_decode(token);
    const decodedUser = {
        email: email
    }
    return decodedUser;
}