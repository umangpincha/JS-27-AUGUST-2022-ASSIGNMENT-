//Ans 24. 
// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

exports.countries = ["USA","INDIA","GERMANY","VENICE"];

console.log(this.countries);

if (this.countries.includes("Ethiopia")) {
    console.log("ETHOPIA");
}
else{
    this.countries.push("Ethiopia")
}
console.log(this.countries);


