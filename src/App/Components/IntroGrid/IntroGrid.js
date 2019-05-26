import React from "react";
import './introGrid.less';
import Headphone from '../../../Assets/products/headphone.jpg';
import cardBg from '../../../Assets/ui/triangle-bg.png';
import MdCall from 'react-ionicons/lib/MdCall';
import IosSend from 'react-ionicons/lib/IosSend';

class IntroGrid extends React.Component {
    render() {
        return (
            <div className={'introGrid'}>
                <div className="introGrid__wrap">
                    <div>
                        <div className="bg-card"
                             style={{backgroundImage: `url(https://wallpapercave.com/wp/wp2739898.jpg)`}}>
                            <div className="bg-mg">
                                <div className="content">
                                    <b>Future technology</b>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="bg-card"
                             style={{backgroundImage: `url(https://hdfreewallpaper.net/wp-content/uploads/2016/08/Best-Gaming-wallpapers.jpg)`}}>
                            <div className="bg-mg">
                                <div className="content">
                                    <b>Epic Crew</b>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="bg-card"
                             style={{backgroundImage: `url(https://cdn.pixabay.com/photo/2018/01/16/10/18/headphone-3085681_960_720.jpg)`}}>
                            <div className="bg-mg">
                                <div className="content">
                                    <b>Sterio Headphone</b>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="bg-card"
                             style={{backgroundImage: `url(http://www.alena-vysotskaya.ru/images/200/DSC100298660.jpg)`}}>
                            <div className="bg-mg">
                                <div className="content">
                                    <b>Hardcore Games</b>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="crd-big" style={{backgroundImage: `url(${cardBg})`}}>
                            <div className="crd__wrap">
                                <div className="content">
                                    <h3 className={'tl'}>For Gamers <br/> by Gamers</h3>
                                    <p className={'dl'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                                        aperiam
                                        consectetur dolorem hic ipsa nobis quo sapiente, vitae. Accusantium autem dicta
                                        dolore earum provident quod sint voluptate. Delectus, nobis, possimus.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam
                                        consectetur dolorem hic ipsa nobis quo sapiente, vitae. Accusantium autem dicta
                                        dolore earum provident quod sint voluptate. Delectus, nobis, possimus.</p>
                                    <button className={'btn'}>Take a tour</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="crd" style={{backgroundImage: `url(${cardBg})`}}>
                            <div className="wrp">
                                <div className="img">
                                    <img
                                        src="https://clipart.info/images/ccovers/1505918650Platinum-Iphone-X-Transparent-Background.png"
                                        alt=""/>
                                </div>
                                <div className="data">
                                    <b>IPhone X</b>
                                    <span>1212 &nbsp; $</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="crd" style={{backgroundImage: `url(${cardBg})`}}>
                            <div className="wrp">
                                <div className="img">
                                    <img src="https://freepngimage.com/content/uploads/images/t_imac-2018-8870.png"
                                         alt=""/>
                                </div>
                                <div className="data">
                                    <b>I-MAC 4K</b>
                                    <span>1212 &nbsp; $</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="crd-fill" style={{backgroundImage: `url(${Headphone})`}}>
                            <div className="crd-wrap">
                                <div className="content tp">
                                    <h2 className={'tl'}>Best Gaming Headphones ever</h2>
                                </div>
                                <div className="content bt">
                                    <button className={'btn'}>Take a tour</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="ct-wrp">
                            <div className="wrap">
                                <div className="left">
                                    <div className="content">
                                        <span className={'tg'}>Contact us</span>
                                        <b>Do you have any questions?</b>
                                        <div className="cl">
                                            <MdCall/> <span>+91-9650112053</span>
                                        </div>
                                        <div className="cl">
                                            <IosSend/> <span>pawan.pvt.ltd@gmail.com</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="content">
                                        <span className={'tg'}>Connect Social</span>
                                        <b>Find us on Facebook?</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default IntroGrid;