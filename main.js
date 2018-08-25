const bananaDiv = document.getElementById('banana');
bananaDiv.innerHTML = 'im a banana';

let counter = 0; 
counter = counter + 1;
counter += 1;
counter++;
// counter = 3

console.log('counter: ', counter);

const greetingElement = document.getElementById('greeting');
const firstName = 'Colin'; 
const lastName = 'White';
//greetingElement.innerHTML = 'Hello my name is ' + firstName + ' ' + lastName;

greetingElement.innerHTML = `Hello my name is ${firstName} ${lastName}`;



// OBJECT SHORTHAND NOTATION 

let name = 'callan'; 
let age = '1000000000000';

// let person = {
//     name: name,
//     age: age
// };

let person = {
    name,
    age
};

console.log('person: ', person.name);

// 

