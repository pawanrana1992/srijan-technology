import React from "react";
import './ProductCart.less';
import MdTrash from 'react-ionicons/lib/MdTrash';
import {connect} from 'react-redux';
import {Actions} from "../../Actions/Actions";

class ProductCart extends React.PureComponent{
    deleteProduct = (e,id)=>{
        console.log('id is:',id);
        e.preventDefault();
        this.props.dispatch({type:Actions.DELETE_PRODUCT_FROM_CART, payload:{id:id}})
    };
    render() {
        return (
            <div className={'product-cart'}>
                <ul className={'cart'}>
                    {this.props.ProductCart.products.length > 0 ?

                        this.props.ProductCart.products.map(pr=>(
                            <li className={'item-wrap'} key={pr.id}>
                                <div className={'item'}>
                                    <div className="media">
                                        <img src={`./assets/random/product-(${pr.id}).png`} alt="product"/>
                                    </div>
                                    <div className="data">
                                        <p><b>{pr.title}</b><span className={'of-tg'}>{((pr.offer / pr.price)*100).toFixed(1)}%</span></p>
                                        <p><del>Price:${pr.price}</del><span>Offer price: <span>$ {pr.offerPrice}</span></span></p>
                                    </div>
                                    <div className="act" onClick={(e)=>this.deleteProduct(e,pr.id)}>
                                        <MdTrash font-size={24}/>
                                    </div>
                                </div>
                            </li>
                        )):
                        <div className="empty-cart">
                            <img src="https://cdn.dribbble.com/users/2058104/screenshots/4198771/dribbble.jpg" alt=""/>
                            <h3 className={'empty'}>No more items in this cart!</h3>

                        </div>
                    }

                </ul>
                <div className="cart-dtl">
                    <div className="tl">
                        <div className="left">
                            Total Items
                        </div>
                        <div className="right">
                            {this.props.ProductCart.totalItems}
                        </div>
                    </div>
                    <div className="tl">
                        <div className="left">
                            You save
                        </div>
                        <div className="right">
                            $ {this.props.ProductCart.totalSave}

                        </div>
                    </div>
                    <div className="tl ttl">
                        <div className="left">
                            Calculated Price
                        </div>
                        <div className="right">
                            $ {this.props.ProductCart.totalAmount}

                        </div>
                    </div>
                </div>
                <div className="cart-act">
                    <button className={'cart-btn'} disabled={!this.props.ProductCart.totalItems >0}>Checkout</button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return {ProductCart:state.ProductCart}
};

export default connect(mapStateToProps)(ProductCart);