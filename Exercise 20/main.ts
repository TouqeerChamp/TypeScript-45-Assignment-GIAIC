// Think of something you could store in a array. For example, you could make a list of mountains,
//  rivers, countries, cities, languages, or anything else you’d like. 
//  Write a program that creates a list containing these items.




let countries:string[] = ["Pakistan", "Palestine", "Saudia Arabia", "Iran", "Iraq"];

console.log('\nList Of Country:\n');

for (let i = 0; i < countries.length; i++) {

   console.log(countries[i]);
}








let countriess:string[] = ["Pakistan", "Palestine", "Saudia Arabia", "Iran", "Iraq"];

console.log('\nList Of Country:\n');

countriess.forEach(country => {
   console.log(country);
});