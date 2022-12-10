import React from "react";
import './NavigationBar.css'
import CartIndicator from "./CartIndicator";

function NavigationBar(props) {

    function ClickHandler(isVisible) {
        props.onShowCart(isVisible);

    }


    return (
    <div className="navigation-bar">
        <p className="navigation-title">Arya Meals</p>
        <CartIndicator onClick={ClickHandler} />
    </div>

    );

}
export default NavigationBar;




