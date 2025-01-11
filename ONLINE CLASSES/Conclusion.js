document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }

    
    alert('Thank you for your idea.We appreciate it.');
  });

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Select the button and hidden message elements
    const revealButton = document.getElementById('revealButton');
    const hiddenMessage = document.getElementById('hiddenMessage');

    // Add an event listener to the button
    revealButton.addEventListener('click', function () {
        // Toggle visibility of the hidden message
        if (hiddenMessage.style.display === 'none') {
            hiddenMessage.style.display = 'inline';  // Show the message
            revealButton.textContent = 'Read Less';  // Change button text
        } else {
            hiddenMessage.style.display = 'none';  // Hide the message
            revealButton.textContent = 'Read More';  // Change button text back
        }
    });
});