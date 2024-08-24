// Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs, 
// such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.
function creat_car(manufacturer, model, ...options) {
    let carDetails = {
        manufacturer: manufacturer,
        model: model,
        ...Object.fromEntries(options)
    };
    return carDetails;
}
let car = creat_car('Toyota', 'Corolla 2024', ['Color', 'Blue'], ['Year', '2024']);
console.log(car);
export {};
// options.forEach(option => {
//     let [key,value] = option.split(':')
//     car [key.trim()] = value.trim()
// });
