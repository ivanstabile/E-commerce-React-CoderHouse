import { stock } from "../data/stock";

export const call = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(stock);
        }, 2000);
    });
};
