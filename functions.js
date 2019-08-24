
// let firstName = 'Raymond';
// let lastName = 'Arceneaux';



// console.log (`${firstName } ${lastName}`);
// // es6
// const sayMyName = (first,last) => {
//   return (`${first} ${last}`);
// };
// // 
// console.log(sayMyName('Chandler','Arceneaux'))


// const nuggetizer = (animal) => {
//   return `nugget ${animal}`;
// }



// const humanenuggetizer = (animal) => {
//   return animal;
// }


// const spamFactory = (literallyAnythin) => {
//   return 'spam (lunch)';
// }

// console.log(nuggetizer('chicken'));
// console.log(nuggetizer('octopus'));
// console.log(nuggetizer('John Wark'));
// console.log(humanenuggetizer('chicken'));
// console.log(humanenuggetizer('octopus'));
// console.log(spamFactory('chicken'));


// const printToDom = (stringToPrint,divId) => {
//   const selectedDiv = document.getElementById(divId);
//   selectedDiv.innerHTML += stringToPrint;
// };

// printToDom('Raymond','output');
const printToDom = (toPrint) => {
  document.getElementById('output').innerHTML += toPrint;
};

let bandNumber = 1

const takeNumber = (bandName) => {
  printToDom(`<p>${bandNumber } ${bandName}</p>`);
  bandNumber++
};


takeNumber('Young Jezzy🏈');
takeNumber('Rick Ross');






