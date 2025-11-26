let age=21;

function displayAge() {
    console.log("Current Age:",age);
}

function changeAge() {
    age=25;
    console.log("Age Updated inside function to:", age)
}
displayAge();
changeAge();
displayAge();