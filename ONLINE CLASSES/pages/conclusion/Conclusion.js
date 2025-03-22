document
  .getElementById("reportForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }
    document.getElementById('send-btn').addEventListener("click",function() {
    
      
    });
   

    alert("Thank you for your idea.We appreciate it.");


  });

document.addEventListener("DOMContentLoaded", function () {
  const revealButton = document.getElementById("revealButton");
  const hiddenMessage = document.getElementById("hiddenMessage");

  revealButton.addEventListener("click", function () {
    if (hiddenMessage.style.display === "none") {  
      hiddenMessage.style.display = "inline";
      revealButton.textContent = "Read Less";
    } else {
      hiddenMessage.style.display = "none";
      revealButton.textContent = "Read More";
    }
  });
});
