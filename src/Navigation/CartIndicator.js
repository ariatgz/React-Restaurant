import React, {useContext, useState} from "react";
import './CartIndicator.css'
import DataContext from "../Context/dataContext";

function CartIndicator(props) {

    let arr=useContext(DataContext);






    function TotalCalculater() {

        let total =0;

        arr.foods.forEach((i)=>{
            total += i.number;

        });

        console.log(total)
        return total;

    }

    function clickHandler() {


        props.onClick(true);

    }

    return (

        <button onClick={clickHandler} type="button"  className="cart-indicator-body">
            <div id="navbar-indicator">
            <p>Your Cart</p>
            <div className="number-of-items">
                {
                    <p>{TotalCalculater()}</p>
                }
            </div>
            </div>
        </button>


    );

}

export default CartIndicator;



