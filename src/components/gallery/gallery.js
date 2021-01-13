import React from 'react';

import './gallery.css';
import pant from '../../images/pant.jpg';
import sweater from '../../images/sweater.jpg';
import Card from './card/card';

class Gallery extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list:[
                { name: 'gummi sweater', url: sweater, price: 279.00, company:'calvin klein' },
                { name: 'gummi sweater', url: sweater, price: 279.00, company:'calvin klein' },
                { name: 'gummi sweater', url: sweater, price: 279.00, company:'calvin klein' },
                { name: 'gummi sweater', url: sweater, price: 279.00, company:'calvin klein' },
                { name: 'slimm pant', url: pant, price: 279.00, company:'arrow' },
                { name: 'slimm pant', url: pant, price: 279.00, company:'arrow' },
                { name: 'slimm pant', url: pant, price: 279.00, company:'arrow' },
                { name: 'slimm pant', url: pant, price: 279.00, company:'arrow' },
            ],
        }
    }

    render(){
        return(
            <div className="products">
                {this.state.list.map((ele) => {
                    return(
                        <Card url={ele.url} name={ele.name} price={ele.price} company={ele.company}/>
                    )
                })}
            </div>
        );
    }
}

export default Gallery