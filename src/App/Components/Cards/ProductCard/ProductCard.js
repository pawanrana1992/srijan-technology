import React from "react";
import './product-card.less';
import MdStarOutline from 'react-ionicons/lib/MdStarOutline'
class ProductCard extends React.Component{
    render() {
        return (
            <div className={'product-card'}>
                <div className="wrap">
                    <div className="body">
                        <div className="top">
                            <span className={'tg'}>Watch</span>
                            <span className={'lbl'}><MdStarOutline font-size={'2em'} color={'#ffffff'}/></span>
                        </div>
                        <div className="img">
                            <div className="content">
                                <img src="https://www.telegraph.co.uk/content/dam/technology/2016/03/14/Fitbit-Blaze_Black_Classic-Band-and-Clock-large_trans%2B%2BqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.png?imwidth=450" alt=""/>

                            </div>
                        </div>
                        <div className="card-data">
                            <b>Steel Series 200RSA</b>
                            <div className={'colors'}><span style={{backgroundColor:'#232323'}}/><span style={{backgroundColor:'#232323'}}/></div>
                        </div>
                        <div className="overlay">
                            <div className="body-act">
                                <button className={'btn'}>Quick Look</button>
                                <button className={'btn'}>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-ftr">
                        <div className="act">
                            <span>Learn More</span>
                        </div>
                        <div className="prc">
                            <span>2023 $</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductCard;