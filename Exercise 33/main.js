// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. 
// Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
let ordinal_array = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. 
// Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
for (let ordinal_Number of ordinal_array) {
    let ordinal_Ending;
    if (ordinal_Number === 1) {
        ordinal_Ending = 'st';
    }
    else if (ordinal_Number === 2) {
        ordinal_Ending = 'nd';
    }
    else if (ordinal_Number === 3) {
        ordinal_Ending = 'rd';
    }
    else {
        ordinal_Ending = 'th';
    }
    console.log(`${ordinal_Number}${ordinal_Ending}`);
}
export {};
// for (let i = 0; i < ordinal_array.length; i++) {
//     if (ordinal_array[i] === 1) {
//         console.log(`${ordinal_array[i]}st`);
//     }
//     else if (ordinal_array[i] === 2) {
//         console.log(`${ordinal_array[i]}nd`);
//     }
//     else if (ordinal_array[i] === 3) {
//         console.log(`${ordinal_array[i]}rd`);
//     }
//     else if (ordinal_array[i] === 4) {
//         console.log(`${ordinal_array[i]}th`);
//     }
//     else if (ordinal_array[i] === 5) {
//         console.log(`${ordinal_array[i]}th`);
//     }
//     else if (ordinal_array[i] === 6) {
//         console.log(`${ordinal_array[i]}th`);
//     }
//     else if (ordinal_array[i] === 7) {
//         console.log(`${ordinal_array[i]}th`);
//     }
//     else if (ordinal_array[i] === 8) {
//         console.log(`${ordinal_array[i]}th`);
//     }
//     else if (ordinal_array[i] === 9) {
//         console.log(`${ordinal_array[i]}th`);
//     }
// }
