const form = document.getElementById("user-name");
const output = document.getElementById("output");

form.addEventListener("click", function(checkresult) {

    checkresult.preventDefault();

  const Fname = document.getElementById("fname").value;
  const Mname = document.getElementById("mname").value;
  const Lname = document.getElementById("lname").value;
  const Sports = document.querySelectorAll('input[name="sports[]"]:checked');
  const selectedSports = [];
  Sports.forEach(function(input) {
    selectedSports.push(input.value);
  });
  const sportsOutput = selectedSports.length > 0 ? selectedSports.join(", ") : "No selected sports";

  const userArray = [];
  userArray.push(Fname);
  userArray.push(Mname);
  userArray.push(Lname);
  userArray.push(sportsOutput);

  const outputString = `
    <p>First Name: ${userArray[0]}</p>
    <p>Middle Name: ${userArray[1]}</p>
    <p>Last Name: ${userArray[2]}</p>
    <p>Sports: ${userArray[3]}</p>
  `;

  output.innerHTML = outputString;

});
