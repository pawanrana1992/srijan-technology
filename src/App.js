import React, {lazy, Suspense} from 'react';
import NavigationDefault from "./App/Components/Navigations/NavigationDefault/NavigationDefault";
import './App/Pages/app.less';
import Footer from "./App/Components/Footer/Footer";
import {Route, Switch} from "react-router-dom";
import NProgress from 'nprogress'
import PageLoader from "./App/Components/PageLoader/PageLoader";
import {connect} from 'react-redux';
const ProductCart = lazy(() => import("./App/Components/ProductCart/ProductCart"));
const IndexPage = lazy(() => import('./App/Pages/IndexPage/IndexPage'));

class App extends React.Component {
    componentWillMount(){
        NProgress.start();

    }
    componentDidMount(){
        NProgress.done();
    }

    render() {
        return (
            <div className={'layout'}>
                <NavigationDefault/>
                <div className={`sidebar ${this.props.ShowSideBarCart ? 'active': ''}`}>
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <ProductCart/>
                    </Suspense>
                </div>

                    <Suspense fallback={<PageLoader/>}>
                        <Switch>
                            <Route path={'/'} render={() => <IndexPage/>}/>
                        </Switch>
                    </Suspense>
                <Footer/>
            </div>

        );
    }
}
const mapStateToProps = (state)=>{
    return {ShowSideBarCart:state.ShowSideBarCart.show}
};

export default connect(mapStateToProps)(App);