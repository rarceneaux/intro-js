// const bouncer = (age) =>{
//   if (age >= 21) {
//     console.log('DRINK (at the bar')
//   } else {
//     console.log('Shame');
//   }
//   };
// bouncer(12);
// bouncer(93);

// const me = 'martin';
// console.log(me.length);

// Objects

// const myObject = {
//   name: 'Raymond',
//   age: 39 
// }
// console.log(myObject.name);
// // 

// Challenge
// create a function that takes in an employee,
//if the employees firstName starts with an M then add a key=status and value='vip'
//if the employees firstName does not start with an M then add a key=status and value='peasant'

const findemployeeStatus  = (employee) => {
  if (employee.name.charAt(0).toLowerCase() === 'm'){
    employee.status = 'vip';
  } else {
    employee.status = 'peasant'
  } 
  console.log(`${employee.name} is a total ${employee.status}` );
  return employee;
}

const person = {
  name: 'Michael',
  status: '',
}

const person1 = {
  name: 'Lester',
  status: '',
}

findemployeeStatus(person)
findemployeeStatus(person1)

findemployeeStatus({
  name: prompt('Enter Employee Name'),
  status: '',
})