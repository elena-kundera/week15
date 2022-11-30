

// ЗДОРОВАЛКА

const data = document.querySelector('.data');
const inputPage = document.getElementById("inputHi");
const btnPage = document.getElementById("btnHi");


function getInputValue() {

    const userName = document.getElementById("inputHi").value;
    data.innerHTML = "Привет, " + userName + ", приятно познакомиться!";
    document.getElementById("inputHi").value = "";

}

// КАЛЬКУЛЯТОР

const data2 = document.querySelector('.calcData');
const inputOne = document.getElementById("calcInput1");
const operation = document.getElementById("calc");
const inputTwo = document.getElementById("calcInput2");
const countBtn = document.getElementById("calcBtn");


function getCalcValuePlus() {
    const num1 = Number(document.getElementById("calcInput1").value);
    const num2 = Number(document.getElementById("calcInput2").value);
    const result = num1 + num2;
    data2.innerHTML = "Ответ: " + result;
}

function getCalcValueMinus() {
    const num1 = Number(document.getElementById("calcInput1").value);
    const num2 = Number(document.getElementById("calcInput2").value);
    const result = num1 - num2;
    data2.innerHTML = "Ответ: " + result;
}

function getCalcValueMult() {
    const num1 = Number(document.getElementById("calcInput1").value);
    const num2 = Number(document.getElementById("calcInput2").value);
    const result = num1 * num2;
    data2.innerHTML = "Ответ: " + result;
}

function getCalcValueDivis() {
    const num1 = Number(document.getElementById("calcInput1").value);
    const num2 = Number(document.getElementById("calcInput2").value);
    const result = num1 / num2;
    if (num2 == 0) 
    {
        data2.innerHTML = "На ноль делить нельзя! Повтори арифметику!";
    }
    else {
    data2.innerHTML = "Ответ: " + result;
    }
}

function clearAll () {
    document.getElementById("calcInput1").value = "";
    document.getElementById("calcInput2").value = "";
}

function changeColor ()
{
    let newColor = document.getElementById('divColor');
    newColor.style.background = 'radial-gradient(violet 10%, pink 30%, blue)';
    setTimeout(() => newColor.style.background = "", 1500);
}


//ГАЛЕРЕЯ

function nextPic() {

    let newPic = document.getElementById('imgSwear');
    newPic.src = 'assets/images/IMG_5069.jpg';
}

function previousPic() {
    let prevPic = document.getElementById("imgSwear");
    prevPic.src = 'assets/images/IMG_5070.jpg';
}