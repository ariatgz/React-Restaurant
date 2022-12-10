import React, {useContext} from "react";
import MenuItem from "./MenuItem";
import './menu.css'
import DataContext from "../Context/dataContext";


function Menu(props) {

    const db=useContext(DataContext);

    function AddToCart(item,number) {
        props.onAdd(item, number);

    }

    return(
        <div id='menu-list-container'>

            {
                db.foods.map((i)=>{
                   return <MenuItem onAdd={AddToCart} key={i.price} data={i} />;

                })


            }





        </div>

    );

}

export default Menu;