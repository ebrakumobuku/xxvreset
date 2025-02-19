// Fetch a new motivational quote from Quotable API
async function getQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random?tags=success|mindfulness|productivity");
        const data = await response.json();
        document.getElementById("quote").textContent = data.content;
    } catch (error) {
        document.getElementById("quote").textContent = "Stay focused and keep pushing forward!";
    }
}

// Load a quote when the page loads
window.onload = getQuote;
