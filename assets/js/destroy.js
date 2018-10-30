//========================================DRIVER========================================
const doDriverDelete = () => {
    let button = document.querySelector('#delete-driver-button')
    button.addEventListener('click', destroyDriver);
// post that object to the backend
axios.delete('http://localhost:3000/drivers/:id', objToCreate)
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
//========================================HAZARD========================================//

const doHazardDelete = () => {
    let button = document.querySelector('#delete-hazard-button')
    button.addEventListener('click', destroyHazard);

// post that object to the backend
axios.delete('http://localhost:3000/hazards/:id')
// get a response
    .then(results => {
        //Success
        console.log(results);
    })
    .catch(err => {
        //failure
        console.log(err); 
    });
}
//========================================ACCIDENT========================================//

const doAccidentDelete = () => {
    let button = document.querySelector('#delete-accident-button')
    button.addEventListener('click', destroyAccident);

// post that object to the backend
axios.delete('http://localhost:3000/accidents/:id')
// get a response
    .then(results => {
        //Success
        console.log(results);
    })
    .catch(err => {
        //failure
        console.log(err); 
    })
};
    