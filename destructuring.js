/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
//let john = ages[0];
//let mary = ages[1];
//let joe = ages[2];

let  [john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring objects
let jobs = {
    mike: "Designer",
    jill: "Developer",
    alicia: "accountant",
};

let { mike, jill, alicia } = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japonese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage: "english",
    secondLanguade: "french",
    thirdLanguage: "spanish",
    fourthLanguage: "japonese",
};
let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others);

let favoriteFoods = {
    ju: "pizza",
    nicadio:"pasta",
    dina: "vegetarian",
    clayton: "steak",
};

let {ju, nicadio, ...rest} = favoriteFoods;
console.log(ju);
console.log(nicadio);
console.log(rest);