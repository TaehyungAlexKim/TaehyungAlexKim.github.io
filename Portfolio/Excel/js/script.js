(function () {
  document.addEventListener("keydown", function (e) {
    const keyCode = e.keyCode;
    //console.log("pushed key " + e.key);

    if (keyCode == 13) {
      // Enter key
      var textboxValue = document.getElementById("textbox").value;
      if (textboxValue.indexOf("=sum") != -1) {
        textboxValue = textboxValue.toUpperCase();
      }

      if (
        typeof selectedRow == "number" &&
        typeof selectedCol == "number" &&
        typeof textboxValue == "string"
      ) {
        // insert textboxValue in array.
        tblArray[selectedRow][selectedCol] = textboxValue;
        // insert textboxValue in TD
        var tdId = document.getElementById(selectedRow + 1 + "_" + (selectedCol + 1));
        tdId.innerHTML = textboxValue;

        //Recalculate
        recalculate();
      }
    }
  });
})();

//*****************************************************************
//Start Create Table

function createSpreadsheet() {
  document.getElementById("SpreadsheetTable").innerHTML = buildTable(TBLROWS, TBLCOLUMNS);
}

// ***************************************************
// function builds the table based on rows and columns
function buildTable(rows, columns) {
  // start with the table declaration
  var divHTML = "";

  divHTML = "<table border='1' cellpadding='0' cellspacing='0' class='Table'>";

  // next do the column header labels
  divHTML += "<tr><th></th>";

  for (var j = 0; j < columns; j++)
    divHTML += "<th id='th" + j + "'>" + String.fromCharCode(j + 65) + "</th>";

  // closing row tag for the headers
  divHTML += "</tr>";

  // now do the main table area
  for (var i = 1; i <= rows; i++) {
    divHTML += "<tr>";
    // ...first column of the current row (row label)
    divHTML += "<td id='" + i + "_0' class='BaseColumn'>" + i + "</td>";

    // ... the rest of the columns
    for (var j = 1; j <= columns; j++)
      divHTML += "<td id='" + i + "_" + j + "' class='AlphaColumn' onclick='clickCell(this)'></td>";

    // ...end of row
    divHTML += "</tr>";
  }

  // finally add the end of table tag
  divHTML += "</table>";

  //alert(divHTML);
  return divHTML;
}

// *******************************************
// event handler fires when user clicks a cell
function clickCell(ref) {
  if (selectedTdId != "" && selectedThId != "" && selectedTd0Id != "") {
    // reset the selected border style
    selectedTdId.style.border = "";
    selectedThId.style.background = "";
    selectedTd0Id.style.background = "";
  }

  var rcArray = ref.id.split("_");
  //store row and col
  selectedRow = parseInt(rcArray[0]) - 1;
  selectedCol = parseInt(rcArray[1]) - 1;
  // Load 2D Array's value
  var arrayValue = tblArray[selectedRow][selectedCol];
  // show the value on textbox
  document.getElementById("textbox").value = arrayValue;

  //selected cell change the border line
  selectedTdId = document.getElementById(selectedRow + 1 + "_" + (selectedCol + 1));
  selectedTd0Id = document.getElementById(selectedRow + 1 + "_0");
  selectedThId = document.getElementById("th" + selectedCol);
  selectedTdId.style.border = "2px solid rgb(52, 112, 224)";
  selectedThId.style.background = "#E5E8E8";
  selectedTd0Id.style.background = "#E5E8E8";

  //focus textbox
  document.getElementById("textbox").focus();
}

//************************************************************************
//End Create Table

// Creating a JavaScript 2d array

tblArray = [];

var TBLROWS = 20;
var TBLCOLUMNS = 10;

// for the selected border style
var selectedTdId = "";
var selectedThId = "";
var selectedTd0Id = "";

generate2DArray();
//generate 2d array
function generate2DArray() {
  for (var i = 0; i < TBLROWS; i++) {
    tblArray[i] = [];
    for (var j = 0; j < TBLCOLUMNS; j++) tblArray[i][j] = "";
  }
}

var selectedRow = "";
var selectedCol = "";

// ********************************************************
// determines if user entered a formula such as =SUM(A1:B2)
// returns an array with formula components
function getFormula(tbValue) {
  var pattern = /[:|\(|\)]/;
  var ar = tbValue.split(pattern);
  var sum = ar[0].toUpperCase();

  if (ar.length < 3) return null;
  else if (sum !== "=SUM") return null;
  else return ar;
}

// ******************************************
// traverse the 2d array looking for formulas
// and then recalculate cell values
// tblArray is the 2d JS array
function recalculate() {
  for (var i = 0; i < TBLROWS; i++) {
    for (var j = 0; j < TBLCOLUMNS; j++) {
      // check to see if table element is a formula
      if (tblArray[i][j].indexOf("=SUM") !== -1) {
        // apply the formula for cell at row/column i/j
        calculateCell(i, j);
      }
    }
  }
}

// ***********************************************************************
// if we find a formula, parse it to find the from (row and column) and
// the to (row and column) and then perform the calculation by getting all
// the numeric values from the 2d array and generating a total
// parse the formula with a call to getFormula
// ... finally take the calculated total and insert into the HTML table
function calculateCell(row, column) {
  // begin by getting the formula parts
  var tokenArray = getFormula(tblArray[row][column]);

  // tokenArray[1] and tokenArray[2] contain the from and to references
  // need more validation if this was a production level app

  if (tokenArray !== null) {
    var fromColumn = tokenArray[1].substr(0, 1);
    var fromRow = tokenArray[1].substr(1, tokenArray[1].length - 1);

    var toColumn = tokenArray[2].substr(0, 1);
    var toRow = tokenArray[2].substr(1, tokenArray[2].length - 1);

    // assign the actual row/column index values for the tblArray
    var fromRowIndex = parseFloat(fromRow) - 1;
    var fromColIndex = fromColumn.charCodeAt(0) - 65;

    var toRowIndex = parseFloat(toRow) - 1;
    var toColIndex = toColumn.charCodeAt(0) - 65;

    var sumTotal = 0;

    for (var i = fromRowIndex; i <= toRowIndex; i++) {
      for (var j = fromColIndex; j <= toColIndex; j++) {
        // make sure we have a number for addition
        // blank handling
        if (isFloat(tblArray[i][j]) && tblArray[i][j] != "") {
          sumTotal += parseFloat(tblArray[i][j]);
        } else if (
          tblArray[i][j].indexOf("=SUM") != -1 &&
          document.getElementById(parseFloat(i) + 1 + "_" + (parseFloat(j) + 1)).innerHTML != ""
        ) {
          // If there are already exist the Sum formula, take <TD>'s value not a Array's value
          sumTotal += parseFloat(
            document.getElementById(parseFloat(i) + 1 + "_" + (parseFloat(j) + 1)).innerHTML
          );
        }
      }
    }

    // we now have the total... insert into spreadsheet cell
    // ... get the cell id
    var cellID = row + 1 + "_" + (column + 1);
    var ref = document.getElementById(cellID);
    ref.innerHTML = sumTotal;
  }
}

// ***********************************************
// determines if this is an acceptable float value
function isFloat(s) {
  var ch = "";
  var justFloat = "0123456789.";

  for (var i = 0; i < s.length; i++) {
    ch = s.substr(i, 1);

    if (justFloat.indexOf(ch) == -1) return false;
  }
  return true;
}

// ***********************************************
// Function Clear Button
function clearButton() {
  var r = confirm("If you press OK, All data will be deleted.\nPlease chekc again.");
  if (r == true) {
    //grid table
    createSpreadsheet();
    //empty tblArray
    generate2DArray();
    //empty txtbox
    document.getElementById("textbox").value = "";
  }
}

//*************************************************************************************************************************************** */
