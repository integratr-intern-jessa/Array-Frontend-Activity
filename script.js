const form = document.getElementById("users-name");
const output = document.getElementById("output");

form.addEventListener("click", function(printUsersInfo) {

    printUsersInfo.preventDefault();

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

  const fullName = `${userArray[0]} ${userArray[1]} ${userArray[2]}`;

  const outputString = `
    <p>Full Name: ${fullName}</p>
    <p>Sports: ${userArray[3]}</p>
  `;

  output.innerHTML = outputString;
});
