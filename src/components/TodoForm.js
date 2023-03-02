import React , {useState} from "react";

function TodoForm (props) {
    const [text , setText] = useState("");    

    function handleChange (e) {
        let t = e.target.value;
        setText(t);
    }

    function addItem (e) {
        e.preventDefault();
        if(text) {
            props.onAddItem(text)
            setText("");
        }
    }

    return (
        <form>
            <div className="inputs-field">
                <input className="input-todo" onChange={handleChange} type="text" value={text}></input>
                <button className="button-add" onClick={addItem}>Add</button>
            </div>
            <p>Item a ser adicionado : {text}</p>       
        </form>
    )
}

export default TodoForm