// component = html + css + js

// JSX chỉ có 1 thẻ cha duy nhất
// <> </> là Fragment  
import './style.css'
const MyComponent = () => {
    return (
        <>
            <div> Tan Nhi Update </div>
            <div className="child"
                style={{ fontSize: "30px" }}>Child </div>
        </>
    );
}

export default MyComponent;
//  dùng  khi có 1 component trong 1 file