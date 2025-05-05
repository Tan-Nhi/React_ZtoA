const TodoNew = (props) => {
    console.log(props);
    const { addnewtodo } = props;
    // addnewtodo("Crocodile T1");

    //fire 
    const handleClcick = () => {
        alert(`Click me`)
    }

    const handleOnchange = (name) => {
        console.log("Onchange", name);

    }

    return (
        <div className="todo-new">
            <input type="text"
                onChange={(event) => handleOnchange(event.target.value)} />
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClcick}  //tham chiếu func
            >Add</button>
        </div>
    );
}

export default TodoNew;