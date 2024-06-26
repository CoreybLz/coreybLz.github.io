document.getElementById('text-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

// Gemini Nano prompt
const canCreate = await window.ai.canCreateTextSession();

if (canCreate !== "no") {
  const session = await window.ai.createTextSession();

  // Prompt the model
  var textPrompt = document.getElementById('text-input').value;
  var result = await session.prompt(textPrompt);
}

    // Display the results
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = result + '</p>';
});


