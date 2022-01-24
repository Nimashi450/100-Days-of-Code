// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

personal = {
    name: "nimashi",
    age: 26,
    country: "Sri Lanka"
}

function logData(){
    let message
    message = personal.name + " is " + personal.age + " years old and lives in " + personal.country
    console.log(message)
}

logData()