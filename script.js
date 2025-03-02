document.getElementById("generate-btn").addEventListener("click", async function () {
    const jobType = document.getElementById("job-type").value; // Get job type
    if (!jobType) {
        alert("Please select a job type!");
        return;
    }

    try {
        const response = await fetch(`/templates/${jobType}.html`);
        if (!response.ok) throw new Error("Template not found");
        
        const templateHTML = await response.text();
        document.getElementById("resume-container").innerHTML = templateHTML;
    } catch (error) {
        alert("Error loading resume template. Please try again.");
        console.error(error);
    }
});
