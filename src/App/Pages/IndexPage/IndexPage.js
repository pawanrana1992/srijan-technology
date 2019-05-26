import React from "react";
import HeroIntro from "../../Components/HeroIntro/HeroIntro";
import IntroGrid from "../../Components/IntroGrid/IntroGrid";
import {Col, Grid, Row} from "react-flexbox-grid";
import MdArrowDropright from "react-ionicons/lib/MdArrowDropright";
import ProductCard from "../../Components/Cards/ProductCard/ProductCard";
import NewStuffSec from "../../Components/NewStuffSec/NewStuffSec";
import {Products} from '../../MocData/MocData';

class IndexPage extends React.PureComponent{
    render() {
        return (
            <div className={'index page'}>
                <HeroIntro/>
                <IntroGrid/>
                <Grid className="popular-tl" fluid>
                    <Row middle={'xs'}>
                        <Col xs={12} sm={12} md={3} lg={3} className="left">
                            <b className={'uppercase'}>Most popular</b>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} className="center">
                            <button className={'btn active'}>All</button>
                            <button className={'btn'}>Mice</button>
                            <button className={'btn'}>Headphone</button>
                            <button className={'btn'}>Mobile</button>
                            <button className={'btn'}>Laptop</button>
                            <button className={'btn'}>Ipad</button>
                            <button className={'btn'}>Accessories</button>
                        </Col>
                        <Col xs={12} sm={12} md={3} lg={3} className="right">
                            <button className={'btn'}><span>Browse all products </span><MdArrowDropright/></button>
                        </Col>
                    </Row>
                </Grid>
                <Grid className="product-sec">
                    <Row>
                        {Products.map((prod)=>
                            <Col xs={12} key={prod.id} sm={6} md={4} lg={3}>
                                <ProductCard {...prod}/>
                            </Col>
                        )}

                        {/*more button*/}
                        <Col xs={12} style={{textAlign:'center'}}>
                            <button className={'btn more'}><span>Browse all products </span><MdArrowDropright/></button>
                        </Col>
                    </Row>
                </Grid>
                {/*new stuffs*/}
                <NewStuffSec/>
            </div>
        );
    }
}


export default IndexPage;