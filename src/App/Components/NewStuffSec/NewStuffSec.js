import React from "react";
import './NewStuff.less';
import Image from '../../../Assets/products/new-stuff.jpg'
class NewStuffSec extends React.Component{
    render() {
        return (
            <div className={'new-stf-sec'} style={{backgroundImage:`url(${Image})`}}>
                <div className="body">
                    <h3 className="title uppercase">
                        New Stuff in the house
                    </h3>
                    <p>New mice collection is ready to bought</p>
                    <button className={'btn'}>Take a look</button>
                </div>
            </div>
        );
    }
}

export default NewStuffSec;