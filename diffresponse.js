  // Get the input element and the answer element
  const inputElement = document.getElementById("text_a");
  const answerElement = document.getElementById("answer");

  // Function to handle form submission
  function handleFormSubmission() {
    // Get the value of the input field
    const inputValue = inputElement.value;

    // Update the answer element's innerHTML with the input value
    answerElement.innerHTML = `Please rephrase your question as lky has a few ${inputValue} in his books.`;
  }

  // Add an event listener to listen for form submission
  document.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    handleFormSubmission(); // Call the function to handle form submission
  });