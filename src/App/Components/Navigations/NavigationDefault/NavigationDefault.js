import React from "react";
import './NavigationDefault.less';
import IosSearch from 'react-ionicons/lib/IosSearch';
import IosSend from 'react-ionicons/lib/IosSend';
import MdCart from 'react-ionicons/lib/MdCart';

class NavigationDefault extends React.Component {
    render() {
        return (
            <nav className={'nav nav__default'}>
                <div className="nav__wrap">
                    <div className="nav__wrap__left">
                        <ul className={'navs'}>
                            <li className="nav_list">
                                <div className="brand link">
                                    <a href="#"><span style={{fontWeight:'700',color:'#ffffff'}}>Srijan</span></a>
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
                                <div className="link">
                                    <div className="ic circle-bg">
                                        <MdCart fontSize="1.6em"/>
                                    </div>
                                    <div className="dt cart">
                                        <span>2 Products</span>
                                        <b><span>12345</span><span>$</span></b>
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
                        <li className={'link'}><a href="">Speakers</a></li>
                        <li className={'link'}><a href="" className={'active'}>Mobile</a></li>
                        <li className={'link'}><a href="">Laptop</a></li>
                        <li className={'link'}><a href="">Camera</a></li>
                        <li className={'link'}><a href="">Console</a></li>
                        <li className={'link'}><a href="">VR Ready</a></li>
                        <li className={'link'}><a href="">Watches</a></li>
                    </ul>
                </div>
            </nav>
        );

    }
}

export default NavigationDefault;