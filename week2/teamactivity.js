function calc(){
    let inputValue = document.querySelector('#inputId').value;
    let outputValue = 0;
    for (i=0; i <= inputValue; i++){
        outputValue += i;
    }
    let result = document.querySelector('#output') 

    result.textContent = outputValue;

}

let button = document.querySelector('#button-1');
button.addEventListener('click', calc);

function addValue(){
    let input1 = Number(document.querySelector('#inputId').value);
    let input2 = Number(document.querySelector('#inputId-2').value);
    console.log(typeof input1);
    console.log(typeof input2);
    let outputValue2 = input1 + input2;
    let result2 = document.querySelector('#output2');
    result2.textContent = outputValue2;
    console.log(outputValue2);
}

let button2 = document.querySelector('#button-2');
button2.addEventListener('click', addValue);

function subtractValue(){
    let input1 = Number(document.querySelector('#inputId').value);
    let input2 = Number(document.querySelector('#inputId-2').value);
    console.log(typeof input1);
    console.log(typeof input2);
    let outputValue2 = input1 - input2;
    let result2 = document.querySelector('#output2');
    result2.textContent = outputValue2;
    console.log(outputValue2);
}

let button3 = document.querySelector('#button-3');
button3.addEventListener('click', subtractValue);