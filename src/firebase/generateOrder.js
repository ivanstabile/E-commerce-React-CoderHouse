import { getFirestore } from "../firebase/config";
import firebase from "firebase/app";
import "firebase/firestore";

export const generateOrder = (buyer, cart, total) => {
    return new Promise(async (resolve, reject) => {
        const db = getFirestore();
        const orders = db.collection("orders");

        const newOrder = {
            buyer: buyer,
            items: cart,
            total: total,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
        };

        const itemsToUpdate = db.collection("orders").where(
            firebase.firestore.FieldPath.documentId(),
            "in",
            cart.map((prod) => prod.id)
        );

        const batch = db.batch();
        const query = await itemsToUpdate.get();

        const outOfStock = [];

        query.docs.forEach((doc) => {
            const itemInCart = cart.find((el) => el.id === doc.id);

            if (doc.data().stock >= itemInCart.qty) {
                batch.update(doc.ref, { stock: doc.data().stock - itemInCart.qty });
            } else {
                outOfStock.push({ id: doc.id, ...doc.data() });
            }
        });

        if (outOfStock.length === 0) {
            orders
                .add(newOrder)
                .then((res) => {
                    batch.commit();
                    resolve(res.id);
                })
                .catch((err) => {
                    reject(err);
                });
        } else {
            reject({
                error: "Out of stock",
                sinStock: outOfStock,
            });
        }
    });
};
