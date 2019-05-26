/**
 * @return {boolean}
 */
import {Actions} from "../Actions/Actions";

export function OpenSideBarCart(state={show:false},action) {
    if(action.type === Actions.SHOW_HIDE_PRODUCT_SIDEBAR_CART){
        return Object.assign({},{show:!state.show});
    }else{
        return state;
    }
}