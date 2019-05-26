import {combineReducers} from "redux";
import {ProductCart} from "./AddProduct";
import {OpenSideBarCart} from "./OpenSidebarCart";

export const rootReducer = combineReducers(
    {
        ProductCart: ProductCart,
        ShowSideBarCart:OpenSideBarCart
    }
);