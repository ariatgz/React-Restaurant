
import './CartItem.css'

    function CartItem(props) {


    function addMore() {
        props.onAdd(props.data.name);
    }

    function RemoveFromCart() {

        props.onRemove(props.data.name);

    }



    return(
        <div className="cartItem-body">
            <div className="cartItem-right-outer">
            <h2>{props.data.name}</h2>

                <div className="cartItem-right-inner">
                    <p style={{color: "darkblue",fontWeight: "bolder"}}>${props.data.price}</p>
                    <p style={
                        {border:"2px solid black",
                            borderRadius:"10px",

                            paddingRight: 10
                            ,paddingLeft:10
                            ,fontWeight: "bold"
                    }}> x {props.data.number}</p>
                </div>
            </div>
            <div className="cartItem-btn-container">

                <button onClick={RemoveFromCart} type="button"  className="cartItem-changebtns">-</button>
                <button onClick={addMore} className="cartItem-changebtns" type="button">+</button>


            </div>





        </div>


    );


    }

    export default CartItem;