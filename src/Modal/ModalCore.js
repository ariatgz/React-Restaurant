import './ModalCore.css'
import CartItem from "./CartItem";
import {useContext, useEffect} from "react";
import dataContext from "../Context/dataContext";


function ModalCore(props) {

    let context=useContext(dataContext);
    let list = context.foods.filter(i => i.number > 0);



        function CartTotal() {

            let tot=0;
            list.forEach(i=>{
                tot += i.price * i.number;

            })

            return Math.round((tot + Number.EPSILON) * 100) / 100;

        }


    function CloseModal() {

            props.onClose();
    }

    function order() {

            console.log("...ordering")
        props.onClose();
    }
    function RemoveItem(name) {
        props.onRemove(name);
    }
    function AddItem(name) {
        props.onAdd(name);
    }



    return(
        <div  className="modal-core">
            {


                list.map(i=>{

                   return <CartItem onAdd={AddItem} onRemove={RemoveItem} key={i.price} data={i}/>
                })


            }
            <div className="cart-bottom">
                <p style={{fontSize: "25px",fontWeight: "bolder"}}>Total Amount</p>
                <p style={{fontSize: "25px",fontWeight: "bolder"}}>${CartTotal()}</p>
            </div>
            <div className="cart-btns">
                <button type="button" onClick={CloseModal} className="cart-btn">Close</button>
                <button type="button" onClick={order} className="cart-btn">Order</button>

            </div>

        </div>
    )

}


export default ModalCore;