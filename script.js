document.getElementById('text-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default behavior
        document.getElementById('submit-button').click(); // Manually trigger form submission
    }
});

document.getElementById('text-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

// MAKE EM DANCE
var oowboyImages = document.querySelectorAll('.oowboyStyling');
oowboyImages.forEach(function(image) {
    image.classList.add('dance');
});

// RAINBOWWWWW
var headerText = document.getElementById('headerText');
    headerText.classList.add('rainbowText');

// Gemini Nano prompt
const canCreate = await window.ai.canCreateTextSession();

if (canCreate !== "no") {
  const session = await window.ai.createTextSession();

  // Prompt the model
  var textPrompt = document.getElementById('text-input').value;
  var result = await session.prompt(textPrompt);

  // Format the result into paragraphs
  var formattedResult = result.split('\n').map(line => `<p>${line.trim()}</p>`).join('');
}

// Display the results
var resultDiv = document.getElementById('results');
resultDiv.innerHTML = formattedResult;

// Remove the dance animation
oowboyImages.forEach(function(image) {
    image.classList.remove('dance');
    });

headerText.classList.remove('rainbowText');
});