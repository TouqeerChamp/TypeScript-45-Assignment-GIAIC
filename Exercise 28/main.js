// Stages of Life: Write an if-else chain that determines a person’s stage of life.
// Set a value for the variable age, and then:
let age = 2;
// • If the person is less than 2 years old, print a message that the person is a baby.
if (age < 2) {
    console.log('The Person is a Baby');
}
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
if (age >= 2 && age < 4) {
    console.log('The Person is a Toddler');
}
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
if (age >= 4 && age < 13) {
    console.log('The Person is a Kid');
}
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
if (age >= 13 && age < 20) {
    console.log('The Person is a Teenager');
}
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
if (age >= 20 && age < 65) {
    console.log('The Person is an Adult');
}
// • If the person is age 65 or older, print a message that the person is an elder.
if (age >= 65) {
    console.log('The Person is an Elder');
}
export {};
