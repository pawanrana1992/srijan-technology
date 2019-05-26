import React from "react";
import IosAt from 'react-ionicons/lib/IosAt';
import MdCall from 'react-ionicons/lib/MdCall';

import './Footer.less';
import {Link} from "react-router-dom";

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
                            <li><Link to="" className="link">Mice</Link></li>
                            <li><Link to="" className="link">Console</Link></li>
                            <li><Link to="" className="link">Keyboard</Link></li>
                            <li><Link to="" className="link">Headphone</Link></li>
                            <li><Link to="" className="link">Mobile</Link></li>
                            <li><Link to="" className="link">Laptop</Link></li>
                        </ul>

                    </div>
                    <div className="col">
                        <div className="hdr">
                            Brands
                        </div>
                        <ul className={'ul-wrap'}>
                            <li><Link to="" className="link">Mice</Link></li>
                            <li><Link to="" className="link">Console</Link></li>
                            <li><Link to="" className="link">Keyboard</Link></li>
                            <li><Link to="" className="link">Headphone</Link></li>
                            <li><Link to="" className="link">Mobile</Link></li>
                            <li><Link to="" className="link">Laptop</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <div className="hdr">
                            Our Store
                        </div>
                        <ul className={'ul-wrap'}>
                            <li><Link to="" className="link">Mice</Link></li>
                            <li><Link to="" className="link">Console</Link></li>
                            <li><Link to="" className="link">Keyboard</Link></li>
                            <li><Link to="" className="link">Headphone</Link></li>
                            <li><Link to="" className="link">Mobile</Link></li>
                            <li><Link to="" className="link">Laptop</Link></li>
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
                                        <Link to="" className={'lk-op'}><span>Any question's call us</span>
                                            <b>022-3224-3224</b>
                                        </Link>
                                    </div>
                                    <div className="link">
                                        <IosAt font-size={'3em'}/>
                                        <Link to="" className={'lk-op'}><span>Or Send us an email</span>
                                            <b>pawan.pvt.ltd@gmail.com</b>
                                        </Link>
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