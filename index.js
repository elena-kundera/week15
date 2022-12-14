

// 2. Сделайте красивую форму регистрации из любого используемого вами сервиса (минимум 5 
// полей ввода), например, регистрация в Яндексе, Гугле или на любом другом сайте. Если какое-то 
// из полей не заполнено или заполнено неверно, выводите сообщение об ошибке. Условия проверки для 
// каждого поля придумайте самостоятельно. Если все заполнено верно, то выведите "Добро пожаловать,
//  *имя пользователя*!".



// КАЛЬКУЛЯТОР 
// Добавила на ноль делить нельзя, сказала ему не считать, елси поля не заполнены и
// вывела очищение инпутов из предыдущего урока в отдельную ф-цию

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

    if (num1 == "" || num2 == "")
    {
        data2.innerHTML = "Здесь что-то не так"
    }
}

function clearAll () {
    document.getElementById("calcInput1").value = "";
    document.getElementById("calcInput2").value = "";
}




//ВЫБОР ТЕМЫ

const Theme = document.querySelector('#calcTheme');

function choose () {
    const chooseTheme = Theme.value;
    switch (chooseTheme) 
    {
        case 'milk' : document.body.style.backgroundColor = '#f9f4e6'; break;
        case 'dark' : document.body.style.backgroundColor = '#2A3759'; break;
        case 'kawai' : document.body.style.backgroundColor = '#FEB9C6'; break;
        case 'green' : document.body.style.backgroundColor = '#AEC09A'; break;
        default : document.body.style.backgroundColor = '#ffffff'; break;
    }
}


// ФОРМА РЕГИСТРАЦИИ 


const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const checkPassword = document.querySelector("#checkPassword");

function check()
{
    document.querySelector('#smthWrong_firstName').innerHTML = "";
    document.querySelector('#smthWrong_lastName').innerHTML = "";
    document.querySelector('#smthWrong_email').innerHTML = "";
    document.querySelector('#smthWrong_password').innerHTML = "";
    document.querySelector('#smthWrong_checkPassword').innerHTML = "";
    document.querySelector("#welcomeMsg").innerHTML = "";
if (firstName.value == '')
{document.querySelector('#smthWrong_firstName').innerHTML+= "Это обязательное поле";
}

if (lastName.value == '')
{document.querySelector('#smthWrong_lastName').innerHTML+= "Это обязательное поле";
}

if (email.value == '')
{document.querySelector('#smthWrong_email').innerHTML+= "Это обязательное поле";
}

if (password.value == '')
{document.querySelector('#smthWrong_password').innerHTML+= "Это обязательное поле";
}

if (checkPassword.value == '')
{document.querySelector('#smthWrong_checkPassword').innerHTML+= "Это обязательное поле";
}

if (password.value != checkPassword.value)
{document.querySelector('#smthWrong_checkPassword').innerHTML+= "Ваши пароли не совпадают";
}

else 
{
    document.querySelector("#welcomeMsg").innerHTML+= "Добро пожаловать в систему, " + firstName.value + "!!!";
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    password.value = '';
    checkPassword.value = '';
}

}