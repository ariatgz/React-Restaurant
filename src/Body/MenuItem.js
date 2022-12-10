import React, {useRef} from "react";
import './MenuItem.css'
function MenuItem(props) {

    let number_input=useRef(null);

    const AddHandler = (event) =>{
        event.preventDefault();

        props.onAdd(props.data,number_input.current.value);
        number_input.current.value= 1;


    }


    return(
        <div className="MenuItem-body">
          <div className="left-detail">
              <h2>{props.data.name}</h2>
              <p>{props.data.description}</p>
              <p className="price-menu">${props.data.price}</p>

          </div>

              <form onSubmit={AddHandler} className="right-detail">
              <div className="number-changer">
                  <h3>Amount</h3>
                  <input ref={number_input} className="numberInput" type="number" defaultValue="1" min="1"/>
              </div>
              <button type="submit" className="addbtn">+ Add</button>
              </form>




        </div>
    )

}

export default MenuItem;