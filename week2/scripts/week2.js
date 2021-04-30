// let firstName = 'Santiago';
// let lastName = 'Montoya';
// let iNumber = '11111111';

// let student1 = {
//     firstName: 'Santiago',
//     lastName: 'Montoya',
//     iNumber: '11111111',
// }

// let student2 = {
//     firstName: 'Sant',
//     lastName: 'Mont',
//     iNumber: '22222221',
// }

// let students = [];

// students.push(student1);
// students.push(student2);

// // localStorage.setItem("students", JSON.stringify(students));
// let students = JSON.parse(localStorage.getItem("students"));

// let student3 = {
//     firstName: 'nt',
//     lastName: 'ont',
//     iNumber: '33332221'
// }

// students.push(student3);

// localStorage.setItem("students", JSON.stringify(students));

// function log(variableName) {
//     console.log(variableName);
// }

function getName() {
    let name = document.querySelector('#name').value;
    let outputDiv = document.querySelector('#output').textContent = name;
}

let button = document.querySelector('button');
button.addEventListener('click', getName);