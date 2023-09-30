  // Get the input element and the answer element
  const inputElement = document.getElementById("text_a");
  const answerElement = document.getElementById("answer");

  // Function to handle form submission
  function handleFormSubmission() {
    // Get the value of the input field
    const inputText = inputElement.value;
    if(inputText===""){
      document.getElementById("answer").innerHTML=`Your input is blank`;
    }
    else if(inputText.toLowerCase().indexOf("school")>-1){
			document.getElementById("answer").innerHTML=" try keyword with school, primary, secondary, raffles institution ";
		}

    // Update the answer element's innerHTML with the input value
    else{
    answerElement.innerHTML = `I do not understand ' ${inputText} ', `;
  }
  }
  // Add an event listener to listen for form submission
  document.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    handleFormSubmission(); // Call the function to handle form submission
  });