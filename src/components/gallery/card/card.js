import React from 'react';
import { Heart } from 'css.gg';

class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hover: false,
        }
    }


    render(){
        return(
                <div className="product-card" onMouseEnter={() => this.setState({hover: true})} onMouseLeave={() => this.setState({hover: false})}>
                    <div className="product-image">
                        <img src={this.props.url} alt="img" />
                    </div>
                    <div className="bar-comp">
                        <div className="bar-hor"></div>
                        <p className="company">{this.props.company}</p>
                    </div>
                    <div className="product-info">
                        <p className="product-name">{this.props.name}</p>
                        <p className="product-price">$ {this.props.price}</p>
                    </div>
                    <div className="button-wish">
                        <a class="cart-button" href="#">add to cart</a>
                        <div className="hori-line"></div>
                        <div className="heart-wish">
                            <Heart/>
                            <div style={{marginLeft: '5px'}}>Add to Wislist</div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Card;