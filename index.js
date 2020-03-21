const pets = [
    {name: "Max", type: "dog", bornOn: 2018},
    {name: "Angel", type: "cat", bornOn: 2015},
    {name: "Jasper", type: "dog", bornOn: 2016}
];

const getAge1 = (pet) =>{
    return new Date().getFullYear() - pet.bornOn;
}

//foreach function
pets.forEach(pet => pet.age=getAge1(pet))
console.log("pets With Age", pets);


//Filter Function return array
const dogs = pets.filter(pet => pet.type === "dog")
console.log("dogs", dogs);


//Find Function
let jasper;
jasper = pets.find(pet => pet.name === "Jasper");
console.log(`Jasper is ${jasper.age} years old`);
