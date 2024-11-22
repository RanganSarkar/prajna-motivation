// Array of motivational quotes
const quotes = [
    "You are stronger than you think.",
    "Every day is a fresh start.",
    "Believe in yourself and all that you are.",
    "You’ve got this!",
    "Keep going, one step at a time.",
    "You are loved and appreciated.",
    "Take a deep breath. You’re doing amazing.",
    "Progress is progress, no matter how small."
];

// Function to display a random quote
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}

// Call the function to display a quote
displayRandomQuote();
