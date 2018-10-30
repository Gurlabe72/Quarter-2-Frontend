
//=========================DRIVERS=========================//
const getDrivers= () => {
let list = document.querySelector('#the-list')
list.innerHTML = '' 
axios.get('http://localhost:3000/drivers').then(result => {
    let data = result.data
    console.log(data);
    data.forEach(element => {
        let listItem = document.createElement('li')
        listItem.innerHTML = `hazard # ${element.id} was reported by ${element.first_name} ${element.last_name} . This is their bio ${element.bio} Is this person a trusted user? ${element.is_trusted}`
        list.appendChild(listItem)
    })
});  
}
const doDrivers = () => {
    let button = document.querySelector('#the-drivers-button')
    button.addEventListener('click', getDrivers)
};
//=========================HAZARDS=========================//
const getHazards = () => {
    let list = document.querySelector('#the-list')
      list.innerHTML = '' 
    axios.get('http://localhost:3000/hazards').then(result => {
        let data = result.data
        data.forEach(element => {
            let listItem = document.createElement('li')
            listItem.innerHTML = `This was the type of hazard reported ${element.hazards_type} at this location ${element.location}`
            list.appendChild(listItem)
        })
    });
}
const doHazards = () => {
    let button = document.querySelector('#the-hazards-button')
    button.addEventListener('click', getHazards)
};
//=========================ACCIDENTS=========================//
const getAccidents = () => {
    let list = document.querySelector('#the-list')
    list.innerHTML = '' 
axios.get('http://localhost:3000/accidents').then(result => {
    let data = result.data
    data.forEach(element => {
        let listItem = document.createElement('li')
        listItem.innerHTML = `${element.comment}`
        list.appendChild(listItem)
    })
});
}
const doAccidents = () => {
    let button = document.querySelector('#the-accidents-button')
    button.addEventListener('click', getAccidents)
}
//=========================LISTENER=========================//
document.addEventListener(
    'DOMContentLoaded', 
    function(){
        doDrivers()
        doHazards()
        doAccidents()
    }   
)
