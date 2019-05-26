import React from "react";
import './HeroIntro.less';
import HeadfoneImg from '../../../Assets/products/studio3_decade_tile_600x600.png';

class HeroIntro extends React.Component{
    render() {
        return (
            <div className={'hero'} style={{backgroundImage:`url(https://4cornerscreative.com/wp-content/uploads/2016/08/dark-wallpaper-1920-darker.png)`}}>
                <div className="hero__wrap">
                    <div className="media">
                        <div className="media__wrap">
                            <img src={HeadfoneImg} alt=""/>
                        </div>
                    </div>
                    <div className="content">
                        <span className={'ct'}>New mice Collection</span>
                        <h1 className={'p-tl'}>Steel series</h1>
                        <p>New mice collection ready to bebought</p>
                        <button className={'btn'}>Take A look</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeroIntro;