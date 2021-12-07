const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

/*
### Individual Bonus calculation
let employeeBonus = 0;
let baseBonus = 0;

// No bonus can be above 13% or below 0% total.
if(employeeBonus > 0 && employeeBonus < .13)
if(rating <= 2) {
    employeeBonus = 0;
} 
if(rating === 3) {
    base bonus of .04 * employees[i].annualSalary
} 
employees[i].reviewRating === 4 {
    baseBonus = .06 * employees[i].annualSalary
} 
employees[i].reviewRating === 5 {
    base bonus = .1 * employees[i].annualSalary
} 
If employeeNumber.length === 4 {
    * additional .05
} 
console.log('they have been with the company for longer than 15 years');
- However, if annualSalary > $65,000 they should have their bonus adjusted down 1%.
*/

function calculateBonus(employeeArray) {

}