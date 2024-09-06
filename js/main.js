
/***************************************** Question 3 *****************************************/

const employees = [
    { id: 1, name: "Noura", salary: 5000, performanceRate: 4.5 },
    { id: 2, name: "Rawan", salary: 6000, performanceRate: 3.8 },
    { id: 3, name: "Belal", salary: 4500, performanceRate: 4.2 },
    { id: 4, name: "Diana", salary: 5500, performanceRate: 3.5 },
    { id: 5, name: "Omar", salary: 6500, performanceRate: 4.8 }
];


function printData(array) {

    for (let i = 0; i < array.length; i++) {

        console.log(`Employee id is ${array[i].id} Named ${array[i].name} ,the salary is ${array[i].salary} and Performance rate is ${array[i].performanceRate}`);

    }

}
printData(employees);

/********************************* Question 4,5 in pdf *****************************************/


/***************************************** Question 6 *****************************************/


let phoneInput = document.querySelector('#phone');

phoneInput.addEventListener('change', function () {
    if (phoneInput.value.length !== 11) {

        phoneInput.style.border = "red solid 2px";
        phoneInput.style.backgroundColor = "yellow";

    } else {
        phoneInput.style.border = "green solid 2px";
        phoneInput.style.backgroundColor = "white";

    }
})


/***************************************** Question 7 *****************************************/

let testBtn = document.querySelector('#testBtn');
let toreverseInput = document.querySelector('#toreverse');
let reversedOutput = document.querySelector('#reversedOutput');

function reverseInput() {

    let str = toreverseInput.value;
    let reversedWord = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedWord += str[i];
    }
    return reversedWord;
}


testBtn.addEventListener('click', function () {

    Output = reverseInput();
    reversedOutput.innerHTML= Output;
    console.log(Output);

});




/***************************************** Question 8 *****************************************/



let arrayOfNumbers = [5, 8, 9, 11, 13, 15];


function findPrimeInNumbers(array) {
    let primeNums = [];

    for (i = 0; i <= array.length; i++) {
        let count = 0;

        for (j = array[i]; j >= 1; j--) {
            if (array[i] % j == 0) {
                count++;
            }

        }
        if (count == 2) {

            primeNums.push(array[i]);
        }
    }
    console.log(primeNums);

}

findPrimeInNumbers(arrayOfNumbers);

/********************************* Question 9,10,11,12,13 in pdf *****************************************/


/***************************************** Question 14 *****************************************/

studentGrades = [50, 30, 74, 80, 89];


function getMaximum(arr) {

    let max = 0;

    for (c = 0; c < arr.length; c++) {

        if (arr[c] > max) {
            max = arr[c];
        }

    }
    console.log(max);

    return max;
}


getMaximum(studentGrades);


/********************************* Question 15,16,17,18,19 in pdf *****************************************/


/***************************************** Question 20 *****************************************/

let product = { id: 1, name: "A", price: 5000, stock: 10 };

function placeOrder(username) {

    if (product.stock == 0) {
        console.log('Out of stock');

    } else {
        product.stock -= 1;
        let jsonString = JSON.stringify(product);
        localStorage.setItem(username + new Date().toISOString(), jsonString);
        console.log('Order Placed, remaining: ' + product.stock);


    }

}

placeOrder("Noura");
placeOrder("Noura");



/********************************* Question 21,22,23,24 in pdf *****************************************/


/***************************************** Question 25 *****************************************/


let user = { id: 1, username: "Admin", password: "1234567" };


let loginbtn = document.querySelector('#loginBtn');


loginbtn.addEventListener('click', function () {

    loginUser();

})

function loginUser() {

    let usernameInput = document.querySelector('#username');
    let passwordInput = document.querySelector('#password');


    if (user.username == usernameInput.value && user.password == passwordInput.value) {
        return true;

    } else {
        console.log('Error, Invalid user.');

        return false;

    }

}
/***************************************** Question 26 *****************************************/

function sumNumbers(num1, num2 = 0) {

    let sum = 0;
    sum = num1 + num2;

    console.log(sum);


}


sumNumbers(3);


/***************************************** Question 27 *****************************************/



let cursor = document.querySelector('#img');

document.addEventListener('mousemove', function (info) {

    cursor.style.left = info.clientX + "px";
    cursor.style.top = info.clientY + "px";

})



/***************************************** Question 28 *****************************************/


let request = new XMLHttpRequest();
request.open('get', 'https://jsonplaceholder.typicode.com/users');


request.addEventListener('readystatechange', function () {

    if (request.readyState == 4) {

        putDataInTable(JSON.parse(request.responseText));
    };

})

request.send();



function putDataInTable(dat) {
    let row = ``;
    for (let i = 0; i < dat.length; i++) {
        row += `
        <tr><td>${dat[i].id}</td>
        <td>${dat[i].name}</td>
        <td>${dat[i].username}</td>
        <td>${dat[i].email}</td></tr>`
    }
    document.getElementById('users').innerHTML = row;

}

/********************************* Question 29,30 in pdf *****************************************/
