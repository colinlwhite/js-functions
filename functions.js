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

