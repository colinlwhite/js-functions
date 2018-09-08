// input = animal ex. fish 
// output = animal product ex. fish sticks 

function nuggetizer(animal) {
    return `${animal} stix`;
}

const nuggetizer2 = (animal) => {
    return `${animal} jerky`
};

console.log('deer: ', nuggetizer2('deer'));


console.log('fish: ', nuggetizer('fish'));
console.log('fish: ', nuggetizer('cat')); // cat stix
console.log('fish: ', nuggetizer('bear'));  // bear stix 




// CLASS CHALLENGE 1 

const nomnom = (person, food) => {
    return `${person} devoured ${food}`;
};

const bearSticks = nuggetizer('bear');

console.log(nomnom('colin', bearSticks)); // colin devoured bear sticks 


// Function numberAdder that takes in a number and returns the number plus 3. so input = 22 output = 25
// ES5 

function numberAdder(numberOne) {
    return numberOne + 3;
};

console.log(numberAdder(22));

// ES6 

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = docuement.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
}; 

const numberAdder1 = (nums) => {
     const finalNumber = nums + 3;
     printToDom(`<h2>${finalNumber}</h2>`, 'allTheNumbers'); 
 };

console.log('num: ', numberAdder1(22)); // 25 


numberAdder1(22);
numberAdder1(2);
numberAdder1(4);




