document.getElementById('text-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the value from the textarea
    var text = document.getElementById('text-input').value;

    // Display the submitted text
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<h2>Response:</h2><p>' + text + '</p>';
});
