// JavaScript Code
// Button Event Listener

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let name = document.getElementById("char-in").value;

  if (name === "RSVP") {
    document.getElementById("Acronym").innerHTML =
      "Répondez s'il vous plaît / Please Reply";
  } else if (name === "ASAP") {
    document.getElementById("Acronym").innerHTML = "As Soon As Possible";
  } else if (name === "LMK") {
    document.getElementById("Acronym").innerHTML = "Let Me Know";
  } else if (name === "DOB") {
    document.getElementById("Acronym").innerHTML = "Date Of Birth";
  } else if (name === "TBA") {
    document.getElementById("Acronym").innerHTML = "To Be Announced";
  } else if (name === "TBC") {
    document.getElementById("Acronym").innerHTML = "To Be Confirmed";
  } else if (name === "ETA") {
    document.getElementById("Acronym").innerHTML = "Estimated Time Of Arrival";
  } else if (name === "IMO") {
    document.getElementById("Acronym").innerHTML = "In My Opinion";
  } else if (name === "N/a") {
    document.getElementById("Acronym").innerHTML =
      "Not Available / Not Applicable";
  } else if (name === "N/A") {
    document.getElementById("Acronym").innerHTML =
      "Not Available / Not Applicable";
  } else if (name === "n/a") {
    document.getElementById("Acronym").innerHTML =
      "Not Available / Not Applicable";
  } else if (name === "AKA") {
    document.getElementById("Acronym").innerHTML = "Also Known As";
  } else if (name === "DIY") {
    document.getElementById("Acronym").innerHTML = "Do It Yourself";
  } else {
    document.getElementById("Acronym").innerHTML = "??????";
  }
}
