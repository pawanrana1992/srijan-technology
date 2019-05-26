import React from "react";
import IosAt from 'react-ionicons/lib/IosAt';
import MdCall from 'react-ionicons/lib/MdCall';

import './Footer.less';

class Footer extends React.Component {
    render() {
        return (
            <footer className={'footer default'}>
                <div className="wrap-footer">
                    <div className="col">
                        <div className="hdr">
                            Products
                        </div>
                        <ul className={'ul-wrap'}>
                            <li><a href="" className="link">Mice</a></li>
                            <li><a href="" className="link">Console</a></li>
                            <li><a href="" className="link">Keyboard</a></li>
                            <li><a href="" className="link">Headphone</a></li>
                            <li><a href="" className="link">Mobile</a></li>
                            <li><a href="" className="link">Laptop</a></li>
                        </ul>

                    </div>
                    <div className="col">
                        <div className="hdr">
                            Brands
                        </div>
                        <ul className={'ul-wrap'}>
                            <li><a href="" className="link">Mice</a></li>
                            <li><a href="" className="link">Console</a></li>
                            <li><a href="" className="link">Keyboard</a></li>
                            <li><a href="" className="link">Headphone</a></li>
                            <li><a href="" className="link">Mobile</a></li>
                            <li><a href="" className="link">Laptop</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <div className="hdr">
                            Our Store
                        </div>
                        <ul className={'ul-wrap'}>
                            <li><a href="" className="link">Mice</a></li>
                            <li><a href="" className="link">Console</a></li>
                            <li><a href="" className="link">Keyboard</a></li>
                            <li><a href="" className="link">Headphone</a></li>
                            <li><a href="" className="link">Mobile</a></li>
                            <li><a href="" className="link">Laptop</a></li>
                        </ul>
                    </div>
                    <div className="col subs">
                        <div className="hdr">
                            Subscribe
                        </div>
                        <div className="subs-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eveniet fuga harum
                                inventore laboriosam molestiae nemo saepe totam! Et, harum, quam! A adipisci delectus
                                nam necessitatibus, omnis optio reprehenderit tempora.</p>
                            <form action="">
                                <div className="el">
                                    <input  type="text" placeholder={'Your email here'} title={'Subscribe'}/>
                                    <button className={'btn'}>Subscribe</button>
                                </div>
                            </form>
                            <div className="cont">
                                <b>Contact Us</b>
                                <div className="lk">
                                    <div className="link">
                                        <MdCall font-size={'3em'}/>
                                        <a href="" className={'lk-op'}><span>Any question's call us</span>
                                            <b>022-3224-3224</b>
                                        </a>
                                    </div>
                                    <div className="link">
                                        <IosAt font-size={'3em'}/>
                                        <a href="" className={'lk-op'}><span>Or Send us an email</span>
                                            <b>pawan.pvt.ltd@gmail.com</b>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;