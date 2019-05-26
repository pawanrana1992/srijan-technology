import {Actions} from "../Actions/Actions";

const initialState = {
    products: [],
    totalItems: 0,
    totalAmount: 0,
    totalSave: 0,
};

export function ProductCart(state = initialState, action) {
    switch (action.type) {
        case Actions.ADD_TO_CART :
            //handle duplicate entry
            let duplicate = state.products.find(prOld => action.payload.id === prOld.id);
            if (duplicate) {
                return state;
            } else {
                //get all amount
                let totalAmount = state.products.map(ob=> Number(ob.offerPrice));
                totalAmount.push(Number(action.payload.offerPrice));
                //calculate all amount
                let finalAmount = 0;
                totalAmount.forEach(function (amount) {
                    finalAmount+= amount
                });
                //get all saved offer amount
                let totalSave = state.products.map(ob=> Number(ob.offer));
                totalSave.push(Number(action.payload.offer));

                let finalSaveAmount = 0;
                totalSave.forEach(function (amt) {
                    finalSaveAmount+= amt
                });

                return Object.assign({},state,{totalAmount: finalAmount,totalSave:finalSaveAmount,totalItems:state.products.length + 1},{products:[...state.products,action.payload]});
            }
        case Actions.DELETE_PRODUCT_FROM_CART:
            //get product from store
            let products = state.products.filter(obj => Number(obj.id) !== Number(action.payload.id));

            //get object which has deleted for subtract amount value
            let willDeleteObject = state.products.filter(obj => Number(obj.id) === Number(action.payload.id));

            return Object.assign({},state,{totalAmount: state.totalAmount - Number(willDeleteObject[0].offerPrice),totalSave:state.totalSave - Number(willDeleteObject[0].offer),totalItems:state.products.length - 1},{products:[...products]});

        default:
            return state;
    }
}

