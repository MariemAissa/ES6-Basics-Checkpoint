const pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];

const getAge1=(pet) => {
    return new Date().getFullYear() - pet.bornOn;
}

//map function
const petsWithAge=pets.map((pet) => {
    pet.age=getAge1(pet);
    return pet;
})
console.log("petsWithAge", petsWithAge);


//Filter Function
const dogs=pets.filter((pet) => {
  return pet.type === "dog"
})
console.log(dogs);


//Find Function
let jasper;
jasper=pets.find((pet) =>{
  return pet.name === "Jasper";
})
console.log(`Jasper is ${jasper.age} years old`);
