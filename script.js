async function fetchMotivation() {
    try {
        const response = await fetch("https://api.openai.com/v1/threads/runs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                assistant_id: "YOUR_ASSISTANT_ID",
                instructions: "Generate a short, uplifting motivational message."
            })
        });

        const data = await response.json();
        document.getElementById("message-box").innerText = data.choices[0].message.content;
    } catch (error) {
        document.getElementById("message-box").innerText = "Stay strong! You got this!";
    }
}
