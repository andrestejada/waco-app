import { db } from "../firebases/firebase";

export const loadProducts = async ( uid ) => {

    const productsSnap = await db.collection(`${ uid }`).get();
    const products = [];

    productsSnap.forEach( snapHijo => {
        products.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });
    
    return products;
}
