function changeBackgroundColor() {
    const colors = ["blue", "#32CD32", "#1E90FF", "#FFD700", "#D2691E"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

function getGreeting() {
    const hour = new Date().getHours();
    let greeting = "Hello!";
    if (hour >= 5 && hour < 12) {
        greeting = "Good Morning!";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Good Afternoon!";
    } else if (hour >= 18 && hour < 22) {
        greeting = "Good Evening!";
    } else {
        greeting = "Good Night!";
    }
    document.getElementById('greeting').textContent = greeting;
}

// Call the function on page load
window.onload = getGreeting;