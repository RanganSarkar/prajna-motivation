// Function to fetch a random quote from an API and display it
async function fetchRandomQuote() {
    const response = await fetch('https://api.quotable.io/random'); // API endpoint
    const data = await response.json(); // Parse the JSON data from the response

    // Display the quote on the page
    document.getElementById("quote").innerText = `"${data.content}" - ${data.author}`;
}

// Call the function to fetch and display the quote
fetchRandomQuote();

