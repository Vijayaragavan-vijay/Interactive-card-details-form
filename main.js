let username = document.querySelector('#username_enter')
let cardnumber = document.querySelector('#cardnumber')
console.log(username);
console.log(cardnumber);
let month = document.querySelector('#month')
let year = document.querySelector('#year')
let cvc = document.querySelector('#cvcid')

let old = document.querySelector('#rightNew')
let neww = document.querySelector('#thank')

//assign values

let defaultname = document.querySelector('#bottomleft');
let defaultnum = document.querySelector('#num');
let defaultmonth = document.querySelector('#mon');
let defaultyear = document.querySelector('#yr');
let defaultcvc = document.querySelector('#threedigit')

let btn = document.querySelector('#btn');
let btn1 = document.querySelector('#btn1');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    validate();
    // if (validate() == true) {
    //     assignValue()
    // }
    // assignValue();
    // old.style.display = "none";
    // neww.style.display = "block";
});
btn.addEventListener('dblclick', (i) => {
        i.preventDefault();
        old.style.display = "none";
        neww.style.display = "block";
    })
    // assignValue();
    // const arr = /^[A-Za-z]+$/;

btn1.addEventListener('click', () => {
    // neww.style.display = 'none';
    // old.style.display = 'block';
    alert('Added card details!')
})

function assignValue() {
    if (username.value == '') {

    } else {
        defaultname.textContent = username.value;
    }
    if (cardnumber.value == '') {

    } else {
        defaultnum.textContent = cardnumber.value;
    }
    if (month.value == '') {

    } else {
        defaultmonth.textContent = month.value;
    }
    if (year.value == '') {

    } else {
        defaultyear.textContent = year.value;
    }
    if (cvc.value == '') {

    } else {
        defaultcvc.textContent = cvc.value;
    }



}

function validate() {
    if (username.value.trim() == '') {
        setError(username, "Name can't be empty");
    } else if (username.value.trim().length < 5 || username.value.trim().length > 20) {
        setError(username, 'Name should be min 5 and max 20 characters')
    } else {
        success(username)
    }
    if (cardnumber.value.trim() == '') {
        setError(cardnumber, "Card number can't be empty");
    } else if (isNaN(cardnumber.value)) {
        setError(cardnumber, 'Wrong format, numbers only');
    } else if (cardnumber.value.trim().length != 16) {
        setError(cardnumber, 'Cardnumber should contain 16 character')
    } else {
        success(cardnumber)
    }
    if (month.value.trim() == '') {
        setError(month, "can't be blank");
    } else if (month.value.trim().length != 2) {
        setError(month, 'should have only 2 digit')
    } else if (month.value > 31 || month.value < 1) {
        setError(month, 'Inappropriate value')
    } else if (isNaN(month.value)) {
        setError(month, 'Wrong format,numbers only')
    } else {
        success(month)
    }
    if (year.value.trim() == '') {
        yearError(year, "can't be blank")
    } else if (month.value.trim().length != 2) {
        yearError(year, 'should have only 2 digit');
    } else if (year.value < 0) {
        yearError(year, 'Inappropriate value');
    } else if (isNaN(year.value)) {
        yearError(year, 'Wrong format,numbers only')
    } else {
        yearSuccess(year)
    }
    if (cvc.value.trim() == "") {
        setError(cvc, "can't be blank");
    } else if (cvc.value.trim().length != 3) {
        setError(cvc, 'contain only 3 digit')
    } else if (cvc.value < 0) {
        setError(cvc, 'Inappropriate value')
    } else if (isNaN(cvc.value)) {
        setError(cvc, 'Wrong format, numbers only')
    } else {
        success(cvc);
    }
}

function setError(element, msg) {

    let parent = element.parentElement;

    parent.lastElementChild.style.visibility = "visible";
    element.style.borderWidth = "1px";
    element.style.borderStyle = "solid";
    element.style.borderColor = "red";

    parent.lastElementChild.textContent = msg;
}

function success(element) {


    let parent = element.parentElement;


    element.style.removeProperty('border-style');
    element.style.removeProperty('border-color');
    parent.lastElementChild.textContent = '';
    assignValue();



}


function yearError(element, msg) {
    let parent = element.parentElement.previousElementSibling;
    parent.lastElementChild.style.visibility = "visible";
    element.style.borderWidth = "1px";
    element.style.borderStyle = "solid";
    element.style.borderColor = "red";
    parent.lastElementChild.textContent = msg;
}

function yearSuccess(element) {
    let parent = element.parentElement.previousElementSibling;
    element.style.removeProperty('border-style');
    element.style.removeProperty('border-color');
    parent.lastElementChild.textContent = '';
    assignValue();
}