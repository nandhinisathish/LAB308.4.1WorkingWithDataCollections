
const csvString = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';
// const csvString = 'Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232;'

const rows = csvString.split('\n'); // Split by newline to get an array of rows

const data = rows.map(row => row.split(',')); // Split each row by comma

console.log(data);

const headers = data[0]; // Extract the first row as headers
const dataRows = data.slice(1); // Get the remaining rows dynamically

const arrayOfObjects = dataRows.map(row => {
    const obj = {};
    for (let i = 0; i < headers.length; i++) {
        obj[headers[i]] = row[i]; // Assign value to a dynamically named property
    }
    return obj;
});

console.log(arrayOfObjects);

const arrayAfterLastRowPop = arrayOfObjects.pop();//= arrayOfObjects.pop();
console.log('\n Removed last element from array of objects : '
    , arrayAfterLastRowPop);

// // Display each user object
// arrayOfObjects.forEach(obj => {
//     console.log(`\n After removing last element : `, obj);
// });
console.log(`\n After removing last element : `, arrayOfObjects);
const newInsertObject = { ID: "48", Name: "Barry", Occupation: "Runner", Age: "25" };

arrayOfObjects.splice(1, 0, newInsertObject);

// Display the modified array in the console
console.log(`\n After inserting an object at index 1 : `
    , arrayOfObjects);

const newAddObject = { ID: "7", Name: "Bilbo", Occupation: "None", Age: "111" };

arrayOfObjects.push(newAddObject);

// Display the modified array in the console
console.log(`\n After adding an object at last
     : `, arrayOfObjects);

const keyName = 'Age';

// Extract ages and convert to numbers
const ages = arrayOfObjects.map(obj => Number(obj[keyName]));

const sumOfAges = ages.reduce((sum, age) => sum + age, 0); // Calculate the sum of ages

console.log(`\n Sum Of Ages is '${sumOfAges}' `);

const averageAge = sumOfAges / arrayOfObjects.length;

console.log(`\n Average Age is '${averageAge}' `);

// const keyName = 'Age';
// let totalAge = 0;
// console.log(` arrayOfObjects length ${arrayOfObjects.length}`)

// for (let i = 0; i < arrayOfObjects.length; i++) {
//     console.log(`start totalAge of '${totalAge}' `);
//     totalAge = totalAge + Number(arrayOfObjects[i][keyName]);
//     console.log(`end totalAge of '${totalAge}' `);
// }
// console.log(`The totalAge of '${totalAge}' `);

// const averageAge = totalAge / arrayOfObjects.length;

// console.log(`The average of '${keyName}' is: ${averageAge}`);


const arrayOfObjectToCsv = function (arrayOfObjects) {

    const csvRows = [];

    const headers = Object.keys(arrayOfObjects[0]);

    csvRows.push(headers.join(','));

    // Loop to get value of each objects key
    for (const row of arrayOfObjects) {
        const values = headers.map(header => {
            const val = row[header]
            return `"${val}"`;
        });

        csvRows.push(values.join(','));
    }

    return csvRows.join('\n');
};


// Data passed as parameter 
const csvData = arrayOfObjectToCsv(arrayOfObjects);
console.log(`\n Converting array of objects back to CSV format : `
    , csvData); 