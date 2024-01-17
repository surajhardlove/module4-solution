
// Example array of names
const names = ["John", "Jane", "Bob", "Alice", "Jerry"];

// Loop through the names
for (let i = 0; i < names.length; i++) {
    // Check if the first letter is 'j' or 'J'
    if (names[i][0].toLowerCase() === 'j') {
        console.log("Goodbye " + names[i]);
    } else {
        console.log("Hello " + names[i]);
    }
}
