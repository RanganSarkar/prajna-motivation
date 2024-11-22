// Array of motivational quotes
const quotes = [
      "You are stronger than you think.",
    "Every day is a fresh start.",
    "Believe in yourself and all that you are.",
    "You’ve got this!",
    "Keep going, one step at a time.",
    "You are loved and appreciated.",
    "Take a deep breath. You’re doing amazing.",
    "Progress is progress, no matter how small.",
    "The best way to predict the future is to create it.",
    "Difficult roads often lead to beautiful destinations.",
    "Don't watch the clock; do what it does. Keep going.",
    "You are capable of amazing things.",
    "Small progress is still progress.",
    "You are enough, just as you are.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Believe you can and you're halfway there.",
    "You don’t have to be great to start, but you have to start to be great.",
    "Your only limit is your mind."
];

// Function to display a random quote
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}

// Call the function to display a quote
displayRandomQuote();
