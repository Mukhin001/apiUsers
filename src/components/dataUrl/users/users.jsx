import { useState } from "react";

const Users = (props) => {
    const [propsArr, setPropsArr] = useState(props.arr);
    

    return (
        <div>
            {
                propsArr.map(element => 
                    <ul key={element.id} > 
                        <li>
                        user  {element.id}
                        </li>
                        <li>
                            {element.country}
                        </li>
                        <li>{element.email}</li>
                    </ul>
                )
            }
        </div>
    )
};

export default Users;