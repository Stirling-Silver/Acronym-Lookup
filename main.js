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
  } else if (name === "CSS") {
    document.getElementById("Acronym").innerHTML = "Cascading Style Sheets";
  } else if (name === "JS") {
    document.getElementById("Acronym").innerHTML = "JavaScript";
  } else if (name === "HTML") {
    document.getElementById("Acronym").innerHTML = "HyperText Markup Language";
	} else if (name === "BOGO") {
    document.getElementById("Acronym").innerHTML = "Buy one, get one";
	} else if (name === "LASER") {
    document.getElementById("Acronym").innerHTML = "Light Amplification by Stimulated Emission of Radiation";
	} else if (name === "PS") {
    document.getElementById("Acronym").innerHTML = "PostScript";
	} else if (name === "P.S") {
    document.getElementById("Acronym").innerHTML = "PostScript";
	} else if (name === "P.S.") {
    document.getElementById("Acronym").innerHTML = "PostScript";
	} else if (name === "PIN") {
    document.getElementById("Acronym").innerHTML = "Personal Identification Number";
	} else if (name === "RIP") {
    document.getElementById("Acronym").innerHTML = "Rest In Peace";
	} else if (name === "VIN") {
    document.getElementById("Acronym").innerHTML = "Vehicle Idntification Number";
	} else if (name === "YOLO") {
    document.getElementById("Acronym").innerHTML = "You Only Live Once";
	} else if (name === "ZIP") {
    document.getElementById("Acronym").innerHTML = "Zone Improvement Plan";
	} else if (name === "CAPTCHA") {
    document.getElementById("Acronym").innerHTML = "Conpletely Automated Public Turing test to tell Computers and 
	Humans Apart";
	} else if (name === "CD-ROM") {
    document.getElementById("Acronym").innerHTML = "Compact Disc Read-Only Memory";
	} else if (name === "DVD") {
    document.getElementById("Acronym").innerHTML = "Digital versatile Disc";
	} else if (name === "GIF") {
    document.getElementById("Acronym").innerHTML = "Graphics Interchange Format";
	} else if (name === "JPEG") {
    document.getElementById("Acronym").innerHTML = "Joint Photographic Experts Group";
	} else if (name === "JSON") {
    document.getElementById("Acronym").innerHTML = "JavaScript Object Notation";
	} else if (name === "PNG") {
    document.getElementById("Acronym").innerHTML = "Portable Network Graphics";
	} else if (name === "RAM") {
    document.getElementById("Acronym").innerHTML = "Random Access Memory";
	} else if (name === "SIM") {
    document.getElementById("Acronym").innerHTML = "Subscriber Identity Module";
	} else if (name === "URL") {
    document.getElementById("Acronym").innerHTML = "Uniform Resource Locator";
	} else if (name === "AWOL") {
    document.getElementById("Acronym").innerHTML = "Absent Without Leave";
	} else if (name === "NATO") {
    document.getElementById("Acronym").innerHTML = "North Atlantic Treaty Organization";
	} else if (name === "OSHA") {
    document.getElementById("Acronym").innerHTML = "Occupational Safety and Health Administration";
	} else if (name === "SWAT") {
    document.getElementById("Acronym").innerHTML = "Special Weapons And Tactics";
  } else {
    document.getElementById("Acronym").innerHTML = "??????";
  }
  
}
