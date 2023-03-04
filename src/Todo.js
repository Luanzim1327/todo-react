import React, { useEffect, useState } from "react";
import "./Todo.css"
import List from "./components/List";
import Item from "./components/Item";
import TodoForm from "./components/TodoForm";

const SAVED_ITEMS = "savedItems"

function Todo () {
    const listLocalStorage = () => {
        let list = localStorage.getItem(SAVED_ITEMS);

        if(list) {
            console.log(list);
            return JSON.parse(localStorage.getItem(SAVED_ITEMS));
        } else {
            return []
        }
    }

    const [items , setItems] = useState(listLocalStorage());

    
    useEffect(() => {

        const listLocalStorage = () => {
            let list = localStorage.getItem(SAVED_ITEMS);
    
            if(list) {
                console.log(list);
                return JSON.parse(localStorage.getItem(SAVED_ITEMS));
            } else {
                return []
            }
        }

    } , [])

    useEffect(() => {
        localStorage.setItem(SAVED_ITEMS , JSON.stringify(items));  
    } , [items])

    function onAddItem(text) {

        let it = new Item(text);

        setItems([...items , it]);
    }

    function onItemDeleted (item) {

        let filteredItems = items.filter(it => it.id !== item.id);

        setItems(filteredItems);
    }

    function onDone (item) {
        let updatedItem = items.map(it => {
            if(it.id === item.id) {
                it.done = !it.done;
            }
            return it;
        })
        setItems(updatedItem);
    }

    return (
         <div className="container">
            <h1>Todo</h1>
            <TodoForm onAddItem={onAddItem}></TodoForm>
            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
         </div>
    )
}

export default Todo;