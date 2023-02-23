'use strict'


for (let i = 1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0)
    console.log('FizzBuzz');
    else if (i % 5 == 0)
    console.log('buzz');
    else if (i % 3 == 0)
    console.log('fizz')
    else console.log(i);
}


for (let i = 1; i <= 100; i++){
    let element = document.createElement('li')
    element.innerText = "";
    if(i % 3 === 0 ) {element.innerText += "Fizz";}
    if(i % 5 === 0 ) {element.innerText += "Buzz";}
    if(element.innerText === ""){element.innerText = i;}
    document.getElementById('output').appendChild(element);
    element.classList.add(`class-${element.innerText}`)
  }  