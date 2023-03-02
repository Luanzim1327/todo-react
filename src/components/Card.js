import React from "react";

function Card (props) {

    return (
    <div className={props.className ? `${props.className} card item` : "card item"}>
            {props.children}
    </div>
    )
}

export default Card