import React, {lazy, Suspense} from 'react';
import NavigationDefault from "./App/Components/Navigations/NavigationDefault/NavigationDefault";
import './App/Pages/app.less';
import Footer from "./App/Components/Footer/Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NProgress from 'nprogress'
import PageLoader from "./App/Components/PageLoader/PageLoader";
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
                <Router>
                    <Suspense fallback={<PageLoader/>}>
                        <Switch>
                            <Route path={'/'} render={() => <IndexPage/>}/>
                        </Switch>
                    </Suspense>

                </Router>
                <Footer/>
            </div>

        );
    }
}

export default App;