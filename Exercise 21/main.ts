//They think of something you could store in a TypeScript Object.
//Write a program that creates Objects containing these items.

interface Data {
    name : string;
    fatherName : string;
    cnic : number;
    isStudent : boolean;
    address : {
        home : number;
        street : number;
        city : string;
    }
}
let bio: Data = {
    name : 'Mohammad Touqeer',
    fatherName : 'Abdul Qadeer',
    cnic : 4220134855121,
    isStudent : true,
    address : {
        home : 7,
        street : 18,
        city : 'karachi',
    }
}
console.log(bio);
