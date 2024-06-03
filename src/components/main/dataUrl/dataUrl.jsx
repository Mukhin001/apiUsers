const DataUrl = () => {
    const catUrl = 'https://api.slingacademy.com/v1/sample-data/users';

    fetch(catUrl)
    .then((data) => data.json())
    .then((d =>  console.log(d.users)))
    return (
        <div></div>
    )
}

export default DataUrl; 