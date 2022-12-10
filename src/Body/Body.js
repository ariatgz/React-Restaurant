import React from "react";
import './Body.css';
import meals from '../img/meals.jpg'
import Advertisement from "./Advertisement";
import Summary from "./Summary";


function Body(props) {

    function AddItem(item,number) {
        props.onAdd(item,number);
    }

    return(
        <div>
            <img alt="meals" id="mealimg" src={meals}/>
            <Advertisement/>
            <Summary onAdd={AddItem} />

        </div>


    );

}

export default Body;