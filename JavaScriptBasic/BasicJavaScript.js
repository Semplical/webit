let count = 0;
let type = "";
let mpg = "";
let color = "";
let savedCar;
let paragraph = document.getElementById("styleParagraph");

function tickUp() {
    count++;
    document.getElementById("counter").innerText = count;
}

function tickDown() {
    count--;
    document.getElementById("counter").innerText = count;
}

function runForLoop() {
    let result = "";

    for (let i = 0; i <= count; i++) {
        result += i + " ";
    }

    document.getElementById("forLoopResult").innerText = result;
}

function showOddNumbers() {
    let result = "";

    for (let i = 0; i <= count; i++) {
        if (i % 2 == 1) {
            result += i + " ";
        } 
    }

    document.getElementById("oddNumberResult").innerText = result;
}

function addMultiplesToArray() {
    let array = [];

    for (let i = count; i >= 5; i--) {
        if (i % 5 == 0) {
            array.push(i);
        }
    }

    console.log(array);
}

function printCarObject() {
    type = document.getElementById("carType").value;
    mpg = document.getElementById("carMPG").value;
    color = document.getElementById("carColor").value;
    
    let car = {
        cType: type,
        cMPG: mpg,
        cColor: color
    };

    console.log(car);
}

function loadCar(num) {

    if (num == 1) {
        savedCar = carObject1;
    } else if (num == 2) {
        savedCar = carObject2;
    } else if (num == 3) {
        savedCar = carObject3;
    }

    document.getElementById("carType").value = savedCar.cType;
    document.getElementById("carMPG").value = savedCar.cMPG;
    document.getElementById("carColor").value = savedCar.cColor;
}

function changeColor(num) {
    paragraph = document.getElementById("styleParagraph");

    if (num == 1) {
        paragraph.style.color = "red";
    } else if (num == 2) {
        paragraph.style.color = "green";
    } else if (num == 3) {
        paragraph.style.color = "blue";
    }
}
