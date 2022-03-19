let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    //alert("Clicked Add Row"); // Replace this line with your code.
    let grid = document.getElementById("grid"); // Table's name is grid in the html
    let row = grid.insertRow(-1); // Add at the end of the table
    numRows++; // Add one row to the counter
    if (numCols <= 0) {
        numCols = 1;
    }
    for (let j = 0; j < numCols; j++) { // For each column needed
        let cell = row.insertCell(-1); // Add it to the end of the row
        cell.innerHTML = " "; // Maybe add blankness to the cell? I don't know
    }
}

// Add a column
function addC() {
    //alert("Clicked Add Col"); // Replace this line with your code.
    let grid = document.getElementById("grid"); // Table's name is grid in the html
    numCols++; // Add one row to the counter
    if (numRows <= 0) {
        numRows = 1;
    }
    for (let j = 0; j < numRows; j++) {
        let cell = grid.children[j].insertCell(-1); // Add cell to the last position in row
        cell.innerHTML = " ";
    }
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Sets global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value; // Gets color name
    console.log(colorSelected); // Output to website console
    // Just sets a global var for which color is selected. 
    // Use colorSelected global var within the fillU fillAll and onClick for the boxes
    // to actually change box colors.
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}