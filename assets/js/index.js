const OnButtonClick = () => {
    console.log('Sup')
    let text = document.querySelector('#the-text')
    let list = document.querySelector('#the-list')
   //the code below stops the list from adding over and over 
   //take it off and click the  button
   


list.innerHTML = '' 
axios.get('http://localhost:3000/drivers').then(result => {
    let data = result.data
    console.log(data);
    data.forEach(element => {
        let listItem = document.createElement('li')
        listItem.innerHTML = `This hazard was reported by ${element.drivers_id} at this location ${element.location}`
        list.appendChild(listItem)
    })
});
    list.innerHTML = '' 
    axios.get('http://localhost:3000/hazards').then(result => {
        let data = result.data
        console.log(data);
        data.forEach(element => {
            let listItem = document.createElement('li')
            listItem.innerHTML = `This hazard was reported by ${element.drivers_id} at this location ${element.location}`
            list.appendChild(listItem)
        })
    });
}
list.innerHTML = '' 
axios.get('http://localhost:3000/accidents').then(result => {
    let data = result.data
    console.log(data);
    data.forEach(element => {
        let listItem = document.createElement('li')
        listItem.innerHTML = `This hazard was reported by ${element.drivers_id} at this location ${element.location}`
        list.appendChild(listItem)
    })
});



const doDrivers = () => {
    let button = document.querySelector('#the-drivers-button')
    button.addEventListener('click', OnButtonClick)
}

const doHazards = () => {
    let button = document.querySelector('#the-hazards-button')
    button.addEventListener('click', OnButtonClick)
}
const doAccidents = () => {
    let button = document.querySelector('#the-accidents-button')
    button.addEventListener('click', OnButtonClick)
}
document.addEventListener(
    'DOMContentLoaded', 
    doDrivers,
    doHazards,
    doAccidents
)