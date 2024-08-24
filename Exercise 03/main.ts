// Name Cases: Store a person’s name in a variable, 
// and then print that person’s name in lowercase, uppercase, and titlecase.

let name: string = "MohammaD TouqeeR";

// # Print the name in lowercase
console.log(name.toLowerCase());

// # Print the name in uppercase
console.log(name.toUpperCase());

// # Print the name in titlecase 
console.log(name.split(' ').map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()).join(' '))

