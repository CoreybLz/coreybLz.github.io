document.getElementById('text-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

// MAKE EM DANCE
var oowboyImages = document.querySelectorAll('.oowboyStyling');
oowboyImages.forEach(function(image) {
    image.classList.add('dance');
});

// Gemini Nano prompt
const canCreate = await window.ai.canCreateTextSession();

if (canCreate !== "no") {
  const session = await window.ai.createTextSession();

  // Prompt the model
  var textPrompt = document.getElementById('text-input').value;
  var result = await session.prompt(textPrompt);
}

// Display the results
var resultDiv = document.getElementById('results');
resultDiv.innerHTML = result + '</p>';

// Remove the dance animation
oowboyImages.forEach(function(image) {
    image.classList.remove('dance');
});
});


