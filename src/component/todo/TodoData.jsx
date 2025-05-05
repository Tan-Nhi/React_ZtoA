const TodoData = (props) => {
    // props là 1 biến object chứa tất cả các thuộc tính được truyền từ component cha xuống
    // {
    //     name: "Crocodile T1",
    //     age: 25,
    //     data: {}
    // }
    //destructuring object
    const { name, age, data } = props; //cách 1  ưu tiên dùng

    // const name = props.name; //cách 2
    // const age = props.age; //cách 2  
    // const data = props.data; //cách 2
    console.log("check props", props);

    return (
        <div className='todo-data'>
            <div>My name is {name}</div>
            <div>Learning React</div>
            <div>Watching Youtube</div>
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    );
}

export default TodoData; 