document.getElementById("generate-btn").addEventListener("click", async function () {
    const jobType = document.getElementById("job-type").value; // Get selected job category
    if (!jobType) {
        alert("Please select a job category before generating!");
        return;
    }

    try {
        const response = await fetch(`templates/${jobType}.html`); // Fetch the template
        if (!response.ok) throw new Error("Template not found");

        const templateHTML = await response.text();
        document.getElementById("resume-container").innerHTML = templateHTML;
    } catch (error) {
        alert("Error loading resume. Try again.");
        console.error(error);
    }
});
