



/***************************************** Question 2 *****************************************/
let addBtn = document.getElementById('addBtn');
let property_name = document.getElementById('property_name');
let area = document.getElementById('area');
let address = document.getElementById('address');
let rooms = document.getElementById('rooms');
let description = document.getElementById('description');


addBtn.addEventListener('click', function () {
    addProperty();
});

function addProperty() {
    let jsonstr = setData();
    addToLocalStorage(jsonstr);

}

function setData() {

    let object = {
        property_name: property_name.value,
        area: area.value,
        address: address.value,
        description: description.value,
        rooms: rooms.value,
        createdAt: new Date().toISOString()
    };


    console.log(JSON.stringify(object));

    // console.log(object);

    return object;
}

function addToLocalStorage(object) {

    let jsonString = JSON.stringify(object);
    localStorage.setItem(object.createdAt, jsonString);

}

