import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGooglePlus, faTwitter } from '@fortawesome/free-brands-svg-icons';

import './footer.css';
import Logo from '../../images/logo-big.png';
import sweater from '../../images/sweater.jpg';
import FootCard from './footCard/footCard';
import paypal from '../../images/payments-paypal.png';
import visa from '../../images/payments-visa.png';
import master from '../../images/payments-mastercard.png';
import discover from '../../images/payments-discover.png';
import skrill from '../../images/payments-skrill.png';


class Footer extends React.Component{  

    constructor(props){
        super(props);
        this.state = {
            holiday: [
                { name: 'gummi sweater', price: '189.0', company: 'MC NEAL', url:sweater },
                { name: 'gummi sweater', price: '189.0', company: 'MC NEAL', url:sweater },
            ],

            arrival: [
                { name: 'gummi sweater',cutPrice:'220', price: '189.0', company: 'MC NEAL', url:sweater },
                { name: 'gummi sweater',cutPrice:'220', price: '189.0', company: 'MC NEAL', url:sweater },
            ]
        }
    }

    render(){
    return(
        <div className="footer">
            <div className="">
                <div className="foot-line"></div>
                <img className="foot-img" src={Logo} alt="#" />
            </div>
            <div className="footer-container">
                <div className="connect">
                    <div className="connect-head">Connect with us</div>
                    <div className="connect-line"></div>
                    <div className="ecommerce">Modelo - eCommerce</div>
                    <div className="contact-info">
                        <div className="comp-div">4 East 80th Street, New York, NY</div>
                        <div className="comp-div">+88 897 654 321</div>
                        <div className="comp-div">say@hello.com</div>
                    </div>
                    <div className='comp'>
                        <FontAwesomeIcon icon={ faFacebook } className="comp-sym"/>
                        <FontAwesomeIcon icon={ faTwitter } className="comp-sym"/>
                        <FontAwesomeIcon icon={ faGooglePlus } className="comp-sym"/>
                    </div>
                </div>
                <div className="holiday">
                    <div className="connect-head">Holiday Sales</div>
                    <div className="connect-line"></div>
                    {this.state.holiday.map((ele)=> {
                        return(
                            <FootCard price={ele.price} name={ele.name} company={ele.company} url={ele.url} />
                        )
                    })}
                </div>
                <div className="arrival">
                    <div className="connect-head">New Arrivals</div> 
                    <div className="connect-line"></div>
                    {this.state.holiday.map((ele)=> {
                        return(
                            <FootCard price={ele.price} name={ele.name} company={ele.company} url={ele.url} cutPrice={ele.cutPrice} />
                        )
                    })}
                </div>  
                <div className="support">
                    <div className="connect-head">Support</div> 
                    <div className="connect-line"></div>
                    <div className="support-list">
                        <div className="list-name"> - Term and Conditions</div>
                        <div className="list-name"> - Delivery</div>
                        <div className="list-name"> - Secure Payment</div>
                        <div className="list-name"> - Contact Us</div>
                        <div className="list-name"> - Refunds</div>
                        <div className="list-name"> - Track Orders</div>
                        <div className="list-name"> - Services</div>
                    </div>
                </div>
            </div>
            <div className="payment">
                <img src={paypal} alt="img" />
                <img src={visa} alt="img" />
                <img src={master} alt="img" />
                <img src={discover} alt="img" />
                <img src={skrill} alt="img" />
            </div>
        </div>
    )}
}

export default Footer;