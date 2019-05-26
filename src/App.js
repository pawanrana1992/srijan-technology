import React from 'react';
import NavigationDefault from "./App/Components/Navigations/NavigationDefault/NavigationDefault";
import HeroIntro from "./App/Components/HeroIntro/HeroIntro";
import IntroGrid from "./App/Components/IntroGrid/IntroGrid";
import './App/Pages/app.less';
import MdArrowDropright from 'react-ionicons/lib/MdArrowDropright';
import {Col, Grid, Row} from "react-flexbox-grid";
import ProductCard from "./App/Components/Cards/ProductCard/ProductCard";
import NewStuffSec from "./App/Components/NewStuffSec/NewStuffSec";
import Footer from "./App/Components/Footer/Footer";

class App extends React.Component {
    render() {
        return (
            <>
                <NavigationDefault/>
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
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <ProductCard/>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <ProductCard/>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <ProductCard/>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <ProductCard/>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <ProductCard/>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <ProductCard/>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <ProductCard/>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <ProductCard/>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <ProductCard/>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <ProductCard/>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <ProductCard/>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <ProductCard/>
                        </Col>
                        {/*more button*/}
                        <Col xs={12} style={{textAlign:'center'}}>
                            <button className={'btn more'}><span>Browse all products </span><MdArrowDropright/></button>
                        </Col>
                    </Row>
                </Grid>


                {/*new stuffs*/}
                <NewStuffSec/>
                {/*footer*/}
                <Footer/>
            </>
        );
    }
}

export default App;