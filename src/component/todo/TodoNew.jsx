import { useState } from "react";

const TodoNew = (props) => {

    //usestate hook (getter, setter)
    const [valueInput, setValueInput] = useState("eric")


    const { addNewTodo } = props;
    // addnewtodo("Crocodile T1");

    //fire 
    const handleClick = () => {
        addNewTodo(valueInput)
        setValueInput(""); //reset input

    }

    const handleOnchange = (name) => {
        setValueInput(name);

    }

    return (
        <div className="todo-new">
            <input type="text"
                onChange={(event) => handleOnchange(event.target.value)}
                value={valueInput}  //giá trị của input
            />

            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}  //tham chiếu func
            >Add</button>
            <div>
                My text input is =  {valueInput}
            </div>
        </div>
    );
}

export default TodoNew;