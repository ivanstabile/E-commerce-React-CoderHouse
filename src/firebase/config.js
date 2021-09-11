import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAXkzwzYX09NbYVp5y0Wt-jltZgxwrFR-4",
    authDomain: "e-commerce-react-67d7c.firebaseapp.com",
    projectId: "e-commerce-react-67d7c",
    storageBucket: "e-commerce-react-67d7c.appspot.com",
    messagingSenderId: "218400762256",
    appId: "1:218400762256:web:632618861bb113e4e5ab15",
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => {
    return app;
};

export const getFirestore = () => {
    return firebase.firestore(app);
};
