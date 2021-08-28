import { gamesList } from "../data/gamesList";

const apiCall = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(gamesList);
        }, 1500);
    });
};
export default apiCall;
