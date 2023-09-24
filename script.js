function displayAnswer(elementId) {
  var element = document.getElementById(elementId);
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
// Create the <p> element and assign the ID
var pElement = document.createElement("p");

if(pElement.id === "java"){
pElement.textContent = 'This is the answer for "Show Answer".';
}
  else if(pElement.id === "works"){
pElement.textContent = 'This is the answer for "everything works".';
}
// Append the <p> element to the dropdown content
var dropdownContent = document.getElementById("myDropdown");
dropdownContent.appendChild(pElement);