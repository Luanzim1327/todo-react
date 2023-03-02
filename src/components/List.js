import React from "react"
import Card from "./Card"

function List (props) {

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
        <ul>
            {props.items.map(item => 
            
                <li key={item.id}>
                    <Card className={item.done ? "done" : ""}>
                        {item.text}
                        <div>
                            <button onClick={() => {props.onDone(item)}}><DoneImg done={item.done}></DoneImg></button>
                            <button onClick={() => {props.onItemDeleted(item)}}><img src="./assets/bin.png" alt="bin" className="bin"></img></button>
                        </div>
                    </Card>
                </li>
            )}
        </ul>
    )
}

export default List