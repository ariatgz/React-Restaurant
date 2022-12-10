import React from "react";
import './Summary.css'
import Menu from "./Menu";



function Summary(props) {


    function Adding(item,number) {
        props.onAdd(item,number);


    }

    return(
        <div className="summary-body">

            <Menu onAdd={Adding} />

        </div>

    )
    
}

export default Summary;