import React from "react";
import './product-card.less';
import MdStarOutline from 'react-ionicons/lib/MdStarOutline';
import PropTypes from 'prop-types';

class ProductCard extends React.Component{
    render() {
        const { id, title, details,category, price,offer,offerPrice,color,condition} = this.props;
        return (
            <div className={`product-card pr-${id}`}>
                <div className="wrap">
                    <div className="body">
                        <div className="top">
                            <span className={'tg'}>{category[0]}</span>
                            <span className={'lbl'}><MdStarOutline font-size={'2em'} color={'#ffffff'}/></span>
                        </div>
                        <div className="img">
                            <div className="content">
                                <img src={`./assets/random/product-(${id}).png`} alt=""/>
                            </div>
                        </div>
                        <div className="card-data">
                            <b>{title}</b>
                            <div className={'colors'}>{color.map((c,i)=>(
                                <span style={{backgroundColor:c}} key={i}/>
                            ))}</div>
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
                            <span>{offerPrice} $</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ProductCard.PropType = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    category: PropTypes.array.isRequired,
    price: PropTypes.string.isRequired,
    offer: PropTypes.string.isRequired,
    offerPrice: PropTypes.string.isRequired,
    color: PropTypes.array.isRequired,
    condition: PropTypes.string.isRequired,
};

export default ProductCard;