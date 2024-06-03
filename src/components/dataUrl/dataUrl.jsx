import {useEffect, useState } from "react";

const DataUrl = () => {

const [isloading, setIsLoading] = useState(true);
const [isError, setIsError] = useState(false);
const [isData, setData] = useState();

useEffect(() => {
    setIsError(false)
    setIsLoading(true)
    setData(undefined)

    const promiseUrl = fetch('https://api.slingacademy.com/v1/sample-data/users')
    promiseUrl
    .then(data => data.json())
    .then(users => setData(users.users))
    .catch(error => setIsError(true))
    .finally(() => setIsLoading(false))
}, ['https://api.slingacademy.com/v1/sample-data/users'])
  

    if(isError) {
        return (
            <div>ERROR...</div>
        )
    }
  if(isData) {
    return (
        <div>
            API
                {
                    isData.map(element => 
                        <ul key={element.id}> 
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
  } else {
    return (
        <div>
            Loading...
        </div>
    )
  }
   
}

export default DataUrl; 