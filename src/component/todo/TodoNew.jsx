const TodoNew = (props) => {
    console.log(props);
    const { addnewtodo } = props;
    // addnewtodo("Crocodile T1");
    return (
        <div className="todo-new">
            <input type="text" />
            <button >Add</button>
        </div>
    );
}

export default TodoNew;