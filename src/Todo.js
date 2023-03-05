import React, { useEffect, useState } from "react";
import "./Todo.css"
import List from "./components/List";
import Item from "./components/Item";
import TodoForm from "./components/TodoForm";
import Modal from "./components/Modal"

const SAVED_ITEMS = "savedItems"

function Todo () {
    const listLocalStorage = () => {
        let list = localStorage.getItem(SAVED_ITEMS);

        if(list) {
            return JSON.parse(localStorage.getItem(SAVED_ITEMS));
        } else {
            return []
        }
    }

    const [items , setItems] = useState(listLocalStorage());
    const [showModal , setShowModal] = useState(false);

    useEffect(() => {
        localStorage.setItem(SAVED_ITEMS , JSON.stringify(items));  
    } , [items])

    function onAddItem(text) {

        let it = new Item(text);

        setItems([...items , it]);

        OnHideModal();
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

    function OnHideModal () {
        setShowModal(false)
    }

    return (
         <div className="container">
            <header className="header">
                <h1>Todo</h1>
                <button className="addButton" onClick={() => setShowModal(true)}>+</button>
            </header> 
            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
            <Modal show={showModal} OnHideModal={OnHideModal}>
                <TodoForm onAddItem={onAddItem}></TodoForm>
            </Modal>
         </div>
    )
}

export default Todo;