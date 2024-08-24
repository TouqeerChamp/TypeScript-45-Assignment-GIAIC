//Conditional Tests: Write a series of conditional tests. 
//Print a statement describing each test and your prediction for the results of each test. 
//Your code should look something like this:

let car = 'corolla';
let shezore = 'mini truck';

                                           // FIVE TRUE TEST

console.log('TEST 01: Car is Equal to Corolla')
console.log(car == 'corolla')

console.log('TEST 02: Corolla is Equal to Car')
console.log('corolla' == car)

console.log('TEST 03: Car is Not Equal to Shezore')
console.log(car !== 'shezore')

console.log('TEST 04: Car is Equal to Car')
console.log( car == car)

console.log('TEST 05: Corolla is Equal to Corolla')
console.log("corolla" == 'corolla')

                                         // FIVE FALSE TEST

console.log('TEST 01: Car is Equal to Shezore')
console.log(car == 'shezore')

console.log('TEST 02: Shezore is Equal to Car')
console.log('shezore' == car)

console.log('TEST 03: Shezore is Not Equal to Shezore')
console.log('shezore' !== 'shezore')

console.log('TEST 04: Car is Not Equal to Car')
console.log( car !== car)

console.log('TEST 05: Car is Equal to Mini Truck')
console.log(car == 'mini truck')