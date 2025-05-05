const TodoData = (props) => {
    // props là 1 biến object chứa tất cả các thuộc tính được truyền từ component cha xuống
    // {
    //     name: "Crocodile T1",
    //     age: 25,
    //     data: {}
    // }
    //destructuring object
    const { todoList, deleteTodo } = props; //cách 1  ưu tiên dùng

    // const name = props.name; //cách 2
    // const age = props.age; //cách 2  
    // const data = props.data; //cách 2
    const handleClick = (id) => {
        deleteTodo(id)
    }
    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                return (
                    <div className={`todo-item`} key={item.id}>
                        <div>{item.name}</div>
                        <button
                            onClick={() => handleClick(item.id)}
                            style={{ cursor: "pointer" }}>delete</button>
                    </div>
                );
            })}


        </div>
    );
}

export default TodoData; 