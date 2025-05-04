// component = html + css + js

// JSX chỉ có 1 thẻ cha duy nhất
// <> </> là Fragment  
import './style.css'
const MyComponent = () => {
    // const tannhi = "Ark One"; string
    // const tannhi = 25; number
    // const tannhi = true; boolean 
    // const tannhi = undefined; undefined
    // const tannhi = null; null
    const tannhi = [1, 2, 3]; // array
    // const tannhi = {
    //     name: "Ark One",
    //     age: 25
    // }; object

    return (
        <>
            <div> Tan Nhi {JSON.stringify(tannhi)} </div>
            <div>{console.log("eric1")}</div>
            <div className="child"
                style={{ fontSize: "30px" }}>Child </div>
        </>
    );
}

export default MyComponent;
//  dùng  khi có 1 component trong 1 file