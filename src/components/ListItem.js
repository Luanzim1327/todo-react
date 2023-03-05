import React from "react"
import Card from "./Card"

function ListItem (props) {

    function DoneImg(props) {

        if(props.done) {
            return (
                <img src="./assets/done.png" alt="done"></img>
            )
        } else {
            return (
                <img src="./assets/todo.png" alt="todo"></img>
            )
        }

    }


    return (
            <li>
                <Card className={props.item.done ? "done" : "item"}>
                    {props.item.text}
                    <div>
                        <button onClick={() => {props.onDone(props.item)}}><DoneImg done={props.item.done}></DoneImg></button>
                        <button onClick={() => {props.onItemDeleted(props.item)}}><img src="./assets/bin.png" alt="bin" className="bin"></img></button>
                    </div>
                </Card>
            </li>
    )
}

export default ListItem