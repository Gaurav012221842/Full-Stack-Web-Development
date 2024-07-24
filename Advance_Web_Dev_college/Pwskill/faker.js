// Install the Faker library
// npm install faker

// Import the Faker library
const faker = require('faker');

// Define the number of fake documents to generate
const numberOfDocuments = 1000;

// Array to store fake data
let fakeData = [];

// Loop to generate fake data
for (let i = 0; i < numberOfDocuments; i++) {
    fakeData.push({
        "name": faker.name.firstName(),
        "age": faker.random.number({ min: 18, max: 70 })
    });
}

// Output the list of fake data
console.log(fakeData);
