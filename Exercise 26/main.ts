// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, 
// and write an if-else chain.
// • If the alien’s color is green, 
// print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, 
// print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.


let alien_Color = 'green';

if (alien_Color === 'green') {
    console.log('The player just earned 5 points for shooting the alien.');
}else{
    console.log('The player just earned 10 points.');
}

// Another Version
alien_Color = 'green';

if (alien_Color === 'yellow') {
    console.log('Player just earned 5 points.');
}else{
    console.log('The player just earned 10 points.');
}