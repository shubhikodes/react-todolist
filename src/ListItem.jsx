import React, {useState} from "react";

const ListItem = (props) => {

    return(
        <li id={props.id} >
            {props.item}
            <button className="btn" onClick={()=>{props.func4(props.id)}}>!</button>
            <button className="btn" onClick={()=>{props.func3(props.id)}}>-</button>
        </li>
    )
}

export default ListItem;