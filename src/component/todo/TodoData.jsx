const TodoData = (props) => {
    // props là 1 biến object chứa tất cả các thuộc tính được truyền từ component cha xuống
    // {
    //     name: "Crocodile T1",
    //     age: 25,
    //     data: {}
    // }
    //destructuring object
    const { todoList } = props; //cách 1  ưu tiên dùng

    // const name = props.name; //cách 2
    // const age = props.age; //cách 2  
    // const data = props.data; //cách 2
    console.log("check props", todoList);

    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                return (
                    <div className={`todo-item ${index}`} key={index}>
                        <div>{item.name}</div>
                        <button>delete</button>
                    </div>
                );
            })}


        </div>
    );
}

export default TodoData; 