// TODO: Ans 1
// 1. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with there type.
// let myStr = "Umang";
// let myBool = true;
// let myVar = undefined;
// let myNull = null;

// console.log(`${myStr} , ${myBool} , ${myVar} , ${myNull}`);


//TODO: ANS 2
// 2. Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.
// let fname = "Umang";
// let lname = "Pincha";
// let maritalStatus =  "single";
// let country = "India";
// let age = 26;
// console.log(`First name : ${fname}\nLast name : ${lname}
// Marital Status: ${maritalStatus}\nCountry:${country}\nAge:${age}`);


// TODO: ANS 3
// 3. Decalre a varibale and assign value to it and change all the string characters to capital letters using toUpperCase() method.
// let myStr = "umang pincha";
// console.log(myStr.toUpperCase());


// TODO: ANS 4
// 4. Check if the string contains a word Script using includes() method.
// let myStr = "Umang Pincha";
// console.log(myStr.includes("Script"));

// TODO: ANS 5
// 5. Split the string into an array using split() method
// let str = 'I write Code.';
// let words = str.split(' ');
// console.log(words);


// TODO: ANS 6
// 6. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
// const myStr = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' 
// console.log(myStr.split(','));


// TODO: ANS 7
// 7. Use lastIndexOf to determine the position of the last occurrence of a script.
// const myStr = 'Facebook, Google, Microsoft, Apple, IBM';
// console.log(myStr.lastIndexOf('Google'));


// TODO: ANS 8
// 8. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.
// const myStr = 'You cannot end a sentence with because because because is a conjunction'
// console.log(myStr.search('because'));


// TODO: ANS 9
// 9. Use trim() to remove any trailing whitespace at the beginning and the end of a string.
// const myStr = " I write code    ";
// console.log(myStr.trim());

// TODO: ANS 10
// 10. Boolean value is either true or false.
//     - Write three JavaScript statement which provide truthy value.
//     - Write three JavaScript statement which provide falsy value.

//Truthy Values
// if (true)
// if ({})
// if ([])
// if (42)

// Falsy values
// if(undefined)
// if(null)
// if(false)
// if(0)
// if('')
// if(NaN)

// TODO: ANS 11
// 11. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//     - 4 > 3
//     - 4 >= 3
//     - 4 < 3
//     - 4 <= 3
//     - 4 == 4
//     - 4 === 4
//     - 4 != 4
//     - 4 !== 4
//     - 4 != '4'
//     - 4 == '4'
//     - 4 === '4'
//     - Find the length of python and jargon and make a falsy comparison statement.
// 1) true
// 2) true
// 3) false
// 4) false
// 5) true
// 6) true
// 7) false
// 8) false
// 9)  true 
// 10) false
// const myStr = 'python';
// const myStr1 = 'jargon';
// console.log(myStr.length==0);
// console.log(myStr1.length==0);




// // TODO: ANS 12
// 12. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

// let year = new Date().getFullYear();
// console.log(year);

// let month = new Date().getMonth();
// console.log(month);

// let date = new Date().getDate();
// console.log(date);

// let day = new Date().getDay();
// console.log(day);

// let hours = new Date().getHours();
// console.log(hours);

// let minutes = new Date().getMinutes();
// console.log(minutes);

// let now = new Date().getSeconds();
// let bseconds = new Date(1970 , 1 , 1);
// console.log(bseconds-now);


// TODO: Ans 13
// 13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// const base =   prompt("Enter base");
// const height = prompt("Enter height");
// const area = (0.5 * base * height);
// console.log(area);


// TODO: Ans 14 
// 14. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
// const x1=2;
// const x2=6;
// const y1=2;
// const y2=10;
// const result = (y2-y1)/(x2-x1);
// console.log(result);

// TODO: ANS 15
// 15. Calculate the slope, x-intercept and y-intercept of y = 2x -2
// The equation is in y=mx+b form. So, the m is the slope and the b is the y-intercept.
// slope = 2
// y-intercept = 2


// TODO: ANS 16
// 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// let radius =  prompt("Enter radius : ");
// const pi = 3.14;
// let areaOfCircle = (pi*radius*radius);
// let cirCircle = (2*pi*radius); 



// TODO: ANS 17
// 17. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

// let myDate = new Date('2022-08-31');
// console.log(myDate);



// TODO: ANS 18
// 18. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// let age = prompt("Enter your age:");
// if(age >= 18){
//     console.log("You are old enough to drive");
// }
// else{
//     let waitingPeriod = 18 - age;
//     console.log(`You have to wait for ${waitingPeriod} years to drive`);
// }


// TODO: ANS 19
// 19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
// let num = 10;
// let result =  num % 2 === 0 ? console.log("Even"):console.log("Odd");;


// TODO: ANS 20
// 20. Write a code which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

// let num = 30;
// if (num>=80 && num<=100) {
//     console.log("A");
// } 
// else if(num>=70 && num<=89){
//     console.log("B");
// }
// else if(num>=60 && num<=69){
//     console.log("C");
// }
// else if(num>=50 && num<=59){
//     console.log("D");
// }
// else if(num>=0 && num<=49){
//     console.log("F");
// }

// TODO: ANS 21
// 21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

// let month = "May"
// if (month=="September"||month=="October"||month=="November") {
//     console.log("Autumn");    
// } 
// else if(month=="December"||month=="January"||month=="February"){
//     console.log("Winter");   
// }
// else if(month=="March"||month=="April"||month=="May"){
//     console.log("Spring");   
// }
// else{
//     console.log("Summer");  
// }



// TODO: ANS 22 , 23
// 22. Write a program which tells the number of days in a month.
// 23. Write a program which tells the number of days in a month, now consider leap year.

// let month = 8;
// let year = 2020;
// let leap = 0;
// if(year%400 === 0){
//     leap = 1;
// }
// if (year%100 === 0) {
//     leap = 0;
// }
// if (year%4 === 0) {
//     leap = 1;
// }
// if(month === 2){
//     console.log(28 + leap); 
//     return;
// }
// let list = [1,3,5,7,8,10,12];
// if(list.includes(month)){
//     console.log("31 days");
//     return;
// }
// else{
//     console.log("30 Days");
//     return;
// }

// TODO: ANS 24 IN SEPERATE FILE


// TODO: ANS 25
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// shoppingCart.unshift("Meat");
// console.log(shoppingCart);
// shoppingCart.push("Sugar")
// console.log(shoppingCart);
// shoppingCart.pop();
// console.log(shoppingCart);
// shoppingCart[2] = "Green Tea";
// console.log(shoppingCart);

// TODO: ANS 26 IN SEPERATE FILE


// TODO: ANS 27
// 27. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
//sorting
// ages.sort();
//Min,Max
// const min = ages[0];
// const max = ages[ages.length - 1];
// console.log(`Min : ${min} , Max : ${max}`);

// Median
// const mid = Math.floor(ages.length/2);
// const median = ages.length%2!=0?ages[mid]:(ages[mid-1] + ages[mid])/2; 
// console.log(median);
// let initialValue = 0;

// // Average
// const sum = ages.reduce((previousValue , currentValue)=>(previousValue+currentValue) , initialValue);
// const average = sum / ages.length
// console.log(average);

// // Range
// const range = max-min;
// console.log(`Range: ${range}`);

// // Compare

// const c1 = min-average;
// const c2 = max-average;
// const result = Math.abs(c1-c2);
// console.log(result);


// TODO: ANS 28
// 28. Use for loop to iterate from 0 to 100 and print only prime numbers

// for (var n = 0; n <= 100; n++) {
//     var prime = true;
//     for(var j = 2 ; j<n ;j++){
//         if(n%j==0){
//             prime=false;
//             break;
//         }
//     }
//     if(n>=2 && prime){
//         console.log(n);
//     }
// }


// TODO: ANS 29
// 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// let even = 0;
// let odd = 0 ;
// for(let i=0;i<=100;i++){
//     if(i%2==0){
//         even = even+i; 
//     }
//     else{
//         odd =  odd+i;
//     }
// }

// console.log(`Even:${even} , Odd:${odd}`);

// TODO: ANS 30
// 30. Write a script which generates a random hexadecimal number.
// const random_hex_color_code = () => {
//     let n = (Math.random() * 0xfffff * 1000000).toString(16);
//     return '#' + n.slice(0, 6);
//   };
// console.log(random_hex_color_code())

// TODO: ANS 31
// const webTech = ["Web Developement","ML","DL","UI/UX"];
// const mernStack = ["Angular","Node Js","react","HTML","CSS"];
// console.log(webTech.sort());
// console.log(mernStack.sort());


// TODO: ANS 32
const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands"
];

// Q1

// countryList.forEach(element => {
//     if(element.includes('land')){
//         console.log(element);
//     }
// });

// Q2
// var longest = countryList.reduce(
//     function (a, b) {
//         return a.length > b.length ? a : b;
//     }
// );

// console.log(longest);

// Q3
// myArray = [];
// countryList.forEach(element => {
//     if(element.includes('land')){
//         myArray.push(element);
//     }
// });
// console.log(myArray);

// Q4
// myArray = [];
// countryList.forEach((element) => {
//     if(element.length == 4){
//         myArray.push(element);
//     }
// })
// console.log(myArray);

// Q5
// myArray = [];
// countryList.forEach((element) => {
//     if (element.split(" ").length >= 2) {
//         myArray.push(element);
//     }
// })

// console.log(myArray);

// Q6
// myArray = [];
// countryList.reverse();
// countryList.forEach((element) => {
//     myArray.push(element.toUpperCase());
// })

// console.log(myArray);



// TODO: ANS 33
// 33. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
//     - The same groups apply to both men and women.
//     - Underweight: BMI is less than 18.5
//     - Normal weight: BMI is 18.5 to 24.9
//     - Overweight: BMI is 25 to 29.9
//     - Obese: BMI is 30 or more
// let weight = prompt("Enter Weight");
// let height =  prompt("Enter height");
// let bmi = weight/(height * height); 
// if(bmi < 18.5){
//     console.log("Underweight");
// }
// else if(bmi >= 18.5 && bmi <= 24.9){
//     console.log("Normal weight");
// }
// else if(bmi >= 25 && bmi <= 29.9){
//     console.log("Overweight");
// }
// else{
//     console.log("Obese");
// }


// 34. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

// linear eq general form = y=mx+c
// m =  -a/b
// y = -c/b
// function solveLinEquation(a,b,c) {
//     m = (-a/b);
//     y = (-c/b);
//     let x =  ((y-c)/m);
//     console.log(`x:$(x) , y:$(y)`);
// }
// let a = prompt("Enter a : ");
// let b = prompt("Enter b : ");
// let c = prompt("Enter c : ");
// solveLinEquation(a,b,c);


// 35. Write a functions which checks if all items are unique in the array.

// const isUnique = (arr) => {
//     return arr.length === new Set(arr).size
// }

// console.log(isUnique([1,1,2,3]));
// console.log(isUnique([1,2,3]));

