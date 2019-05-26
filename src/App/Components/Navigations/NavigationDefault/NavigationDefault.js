import React from "react";
import './NavigationDefault.less';
import IosSearch from 'react-ionicons/lib/IosSearch';
import IosSend from 'react-ionicons/lib/IosSend';
import MdCart from 'react-ionicons/lib/MdCart';
import MdClose from 'react-ionicons/lib/MdClose';
import {connect} from 'react-redux';
import {Actions} from "../../../Actions/Actions";
import {Link} from "react-router-dom";

class NavigationDefault extends React.Component {
    handleSideBarCart = (e)=>{
       this.props.dispatch({type:Actions.SHOW_HIDE_PRODUCT_SIDEBAR_CART})
    };
    render() {
        console.log('in navigation:', this.props);
        return (
            <nav className={'nav nav__default'}>
                <div className="nav__wrap">
                    <div className="nav__wrap__left">
                        <ul className={'navs'}>
                            <li className="nav_list">
                                <div className="brand link">
                                    <Link to="#"><span style={{fontWeight:'700',color:'#ffffff'}}>Srijan</span></Link>
                                </div>
                            </li>
                            <li className={'nav_list res'}>
                                <div className="link">
                                    <div className="ic">
                                        <IosSend fontSize="2em"/>
                                    </div>
                                    <div className="dt">
                                        <span>Send us an email</span>
                                        <b>pawan.pvt.ltd@gmail.com</b>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="nav__wrap__right">
                        <ul className={'navs'}>
                            <li className={'nav_list'}>
                                <div className="link">
                                    <div className="dt">
                                        <span>Welcome Back</span>
                                        <b className={'uppercase'}>user login</b>
                                    </div>
                                </div>
                            </li>
                            <li className={'nav_list res'}>
                                <div className="link">
                                    <div className="dt">
                                        <div className="nv-btn">
                                            Reedem Code
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className={'nav_list'}>
                                <div className="link" onClick={(e)=>this.handleSideBarCart(e)}>
                                    <div className="ic circle-bg">
                                        {this.props.ShowSideBarCart ? <MdClose fontSize="1.6em"/>
                                        :<MdCart fontSize="1.6em"/>}

                                    </div>
                                    <div className="dt cart">
                                        <span>{this.props.ProductCart.totalItems} &nbsp; Products</span>
                                        <b><span>{this.props.ProductCart.totalAmount}</span><span>$</span></b>
                                    </div>
                                </div>
                            </li>
                            <li className={'nav_list'}>
                                <div className="link fill">
                                    <div className="ic">
                                        <IosSearch fontSize="2em"/>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="nav__inline">
                    <ul className="nav__inline_wrap">
                        <li className={'link'}><Link to="">Speakers</Link></li>
                        <li className={'link'}><Link to="" className={'active'}>Mobile</Link></li>
                        <li className={'link'}><Link to="">Laptop</Link></li>
                        <li className={'link'}><Link to="">Camera</Link></li>
                        <li className={'link'}><Link to="">Console</Link></li>
                        <li className={'link'}><Link to="">VR Ready</Link></li>
                        <li className={'link'}><Link to="">Watches</Link></li>
                    </ul>
                </div>
            </nav>
        );

    }
}
const mapStateToProps = (state)=>{
    return {ShowSideBarCart:state.ShowSideBarCart.show,ProductCart:state.ProductCart}
};
export default connect(mapStateToProps)(NavigationDefault);