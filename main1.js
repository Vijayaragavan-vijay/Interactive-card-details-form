let username = document.querySelector('#username_enter')
let cardnumber = document.querySelector('#cardnumber')
console.log(username);
console.log(cardnumber);
let month = document.querySelector('#month')
let year = document.querySelector('#year')
let cvc = document.querySelector('#cvcid')

let old = document.querySelector('#rightNew')
let neww = document.querySelector('#thank')
let btn = document.querySelector('#btn');
let btn1 = document.querySelector('#btn1');
let countername = 0,
    counternumber = 0,
    countermonth = 0,
    counteryear = 0,
    countercvc = 0;


let defaultname = document.querySelector('#bottomleft');
let defaultnum = document.querySelector('#num');
let defaultmonth = document.querySelector('#mon');
let defaultyear = document.querySelector('#yr');
let defaultcvc = document.querySelector('#threedigit')




username.addEventListener('keyup', () => {

    if (username.value.trim() == '') {
        setError(username, "Name can't be empty");
        countername = 0;
    } else if (username.value.trim().length < 5 || username.value.trim().length > 20) {
        setError(username, 'Name should be min 5 and max 20 characters');
        countername = 0;
    } else {
        success(username);
        countername = 1;
    }
});
cardnumber.addEventListener('keyup', () => {

    if (cardnumber.value.trim() == '') {
        setError(cardnumber, "Card number can't be empty");
        counternumber = 0;
    } else if (isNaN(cardnumber.value)) {
        setError(cardnumber, 'Wrong format, numbers only');
        counternumber = 0;
    } else if (cardnumber.value.trim().length != 16) {
        setError(cardnumber, 'Cardnumber should contain 16 character');
        counternumber = 0;
    } else {
        success(cardnumber);
        counternumber = 1;
    }
})
month.addEventListener('keyup', () => {

    if (month.value.trim() == '') {
        setError(month, "can't be blank");
        countermonth = 0;
    } else if (month.value.trim().length != 2) {
        setError(month, 'should have only 2 digit');
        countermonth = 0;
    } else if (month.value > 31 || month.value < 1) {
        setError(month, 'Inappropriate value');
        countermonth = 0;
    } else if (isNaN(month.value)) {
        setError(month, 'Wrong format,numbers only');
        countermonth = 0;
    } else {
        success(month);
        countermonth = 1;
    }
})
year.addEventListener('keyup', () => {

    if (year.value.trim() == '') {
        yearError(year, "can't be blank");
        counteryear = 0;
    } else if (year.value.trim().length != 2) {
        yearError(year, 'contain only 2 digit');
        counteryear = 0;
    } else if (year.value < 0) {
        yearError(year, 'Inappropriate value');
        counteryear = 0;
    } else if (isNaN(year.value)) {
        yearError(year, 'Wrong format,numbers only');
        counteryear = 0;
    } else {
        yearSuccess(year);
        counteryear = 1;
    }
})
cvc.addEventListener('keyup', () => {

    if (cvc.value.trim() == "") {
        setError(cvc, "can't be blank");
        countercvc = 0;
    } else if (cvc.value.trim().length != 3) {
        setError(cvc, 'contain only 3 digit');
        countercvc = 0;
    } else if (cvc.value < 0) {
        setError(cvc, 'Inappropriate value');
        countercvc = 0;
    } else if (isNaN(cvc.value)) {
        setError(cvc, 'Wrong format, numbers only');
        countercvc = 0;
    } else {
        success(cvc);
        countercvc = 1;
    }
})

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

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (countername == 1 && counternumber == 1 && countermonth == 1 && counteryear == 1 && countercvc == 1) {
        old.style.display = "none";
        neww.style.display = "block";
    }

});
btn1.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Card Details Added!');
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