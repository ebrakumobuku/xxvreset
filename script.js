async function fetchMessage() {
    document.getElementById("motivationMessage").textContent = "Fetching...";
    
    try {
        const response = await fetch("https://api.example.com/get-message"); // Replace with your API
        const data = await response.json();
        document.getElementById("motivationMessage").textContent = data.message;
    } catch (error) {
        document.getElementById("motivationMessage").textContent = "Stay strong! You got this.";
    }
}

// Load a message as soon as the page opens
fetchMessage();
