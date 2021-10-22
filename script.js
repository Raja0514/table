var button = document.getElementById("button");

button.addEventListener("click", displayDetails);

var row = 1;

function displayDetails() {
  var firstname = document.getElementById("fname").value;

  var lastname = document.getElementById("lname").value;

 var address = document.getElementById("address").value;

  var pincode = document.getElementById("code").value;

 var gender = document.getElementById("gender").value;

  var food = document.getElementById("food").value;

  var state = document.getElementById("state").value;

   var country = document.getElementById("country").value;

  if (
    !firstname ||
    !lastname ||
    !address ||
    !pincode ||
    !gender ||
    !state ||
    !country ||
    !food
  ) {
    alert("please fill the details ");
    console.log("working");
    return;
  }

  var tabledisplay = document.getElementById("display1");

  var newRow = tabledisplay.insertRow(row);

  var cell1 = newRow.insertCell(0);

  var cell2 = newRow.insertCell(1);

  var cell3 = newRow.insertCell(2);

  var cell4 = newRow.insertCell(3);

  var cell5 = newRow.insertCell(4);

  var cell6 = newRow.insertCell(5);

  var cell7 = newRow.insertCell(6);

  var cell8 = newRow.insertCell(7);

  cell1.innerHTML = firstname;

  cell2.innerHTML = lastname;

  cell3.innerHTML = address;

  cell4.innerHTML = pincode;

  cell5.innerHTML = gender;

  cell6.innerHTML = food;

  cell7.innerHTML = state;

  cell8.innerHTML = country;

  
  row++;
}
