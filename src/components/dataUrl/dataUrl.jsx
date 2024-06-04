import {useEffect, useState } from "react";
import Users from './users/users';

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
                <div>
                    <button onClick={upClick}>Up</button>
                    <button onClick={toClick}>To</button>
                </div>

                <Users arr={isData} />
            </div>
    )
    } else {
        return (
            <div>
                Loading...
            </div>
        )
    }

  function upClick() {
    setData( isData.sort((a, b) => b.id - a.id));
   //setData();
  }
  function toClick() {
    setData(isData.sort((a, b) => a.id - b.id));
  }
}

export default DataUrl; 