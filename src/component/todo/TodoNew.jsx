import { useState } from "react";

const TodoNew = (props) => {

    //usestate hook (getter, setter)
    const [valueInput, setvalueInput] = useState("eric")


    const { addnewtodo } = props;
    // addnewtodo("Crocodile T1");

    //fire 
    const handleClcick = () => {
        console.log("check value input", valueInput);

    }

    const handleOnchange = (name) => {
        setvalueInput(name);

    }

    return (
        <div className="todo-new">
            <input type="text"
                onChange={(event) => handleOnchange(event.target.value)} />
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClcick}  //tham chiếu func
            >Add</button>
            <div>
                My text input is =  {valueInput}
            </div>
        </div>
    );
}

export default TodoNew;