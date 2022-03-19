let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    alert("Clicked Add Row"); // Replace this line with your code.
    numRows++; // Add one row to the counter
    if (numCols <= 0) { // If no columns at all
        numCols = 1; // Make it one column so at least one cell shows up
    }
    let grid = document.getElementById("grid"); // Table's name is grid in the html
    //for (let i = 0; i < numRows; i++) { // Not needed, just append grid's child?
        let tr = document.createElement("tr"); // Create row element
        for (let j = 0; j < numCols; j++) { // For each column needed
            let td = document.createElement("td"); // Make one cell
            tr.appendChild(td); // Add it to the row
        }
        grid.appendChild(tr); // Add full row to the grid.
                
    //}
}

// Add a column
function addC() {
    alert("Clicked Add Col"); // Replace this line with your code.
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