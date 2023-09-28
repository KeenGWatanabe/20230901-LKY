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
    else if(inputText.toLowerCase().indexOf("thank you")>-1){
			document.getElementById("answer").innerHTML="You are welcome.不用客气。";
		}

    // Update the answer element's innerHTML with the input value
    else{
    answerElement.innerHTML = `I do not understand " ${inputText} ", perhaps you could rephrase your question or check your spelling.<br>Or email us what was your question for us to update an appropriate response.<br><a href="mailto:freemindson.co@gmail.com?&subject=ChatBot%20Enquiry&body=Thank%20you%20for%20your%20email%20to%20FreeMindson", target="_blank">email</a>`;
  }
  }
  // Add an event listener to listen for form submission
  document.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    handleFormSubmission(); // Call the function to handle form submission
  });