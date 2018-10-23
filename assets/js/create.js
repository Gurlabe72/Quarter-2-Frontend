function createDriver(event) {
    event.preventDefault();
    // grab the values we need
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const bio = document.getElementById('bio').value;

    console.log(
        firstName, 
        lastName, 
        bio
    );
    // set values to an object
    const objToCreate = {
        firstName, 
        lastName, 
        bio
    }
    
    // post that object to the backend
    axios.post('http://localhost:3000/drivers', objToCreate)
    // get a response
        .then(results => {
            //Success
            console.log(results);
        })
        .catch(err => {
            //failure
            console.log(err); 
        })
}

