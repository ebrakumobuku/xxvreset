document.getElementById("resumeForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    // Get user input
    const jobTitle = document.getElementById("jobTitle").value;
    const experience = document.getElementById("experience").value;
    const jobDescription = document.getElementById("jobDescription").value;

    // Simulate selecting a random template from a category
    const templates = {
        tech: ["templates/tech1.html", "templates/tech2.html"],
        healthcare: ["templates/healthcare1.html", "templates/healthcare2.html"],
        finance: ["templates/finance1.html", "templates/finance2.html"],
        creative: ["templates/creative1.html", "templates/creative2.html"],
        general: ["templates/general1.html", "templates/general2.html"]
    };

    // Determine category based on job title
    let category = "general"; // Default category
    if (jobTitle.toLowerCase().includes("developer") || jobTitle.toLowerCase().includes("engineer")) {
        category = "tech";
    } else if (jobTitle.toLowerCase().includes("nurse") || jobTitle.toLowerCase().includes("doctor")) {
        category = "healthcare";
    } else if (jobTitle.toLowerCase().includes("accountant") || jobTitle.toLowerCase().includes("finance")) {
        category = "finance";
    } else if (jobTitle.toLowerCase().includes("designer") || jobTitle.toLowerCase().includes("marketing")) {
        category = "creative";
    }

    // Randomly pick a template from the selected category
    const selectedTemplate = templates[category][Math.floor(Math.random() * templates[category].length)];

    // Load the selected resume template
    const response = await fetch(selectedTemplate);
    const resumeTemplate = await response.text();

    // Replace placeholders with user data
    let filledResume = resumeTemplate
        .replace("{{JOB_TITLE}}", jobTitle)
        .replace("{{EXPERIENCE}}", experience)
        .replace("{{JOB_DESCRIPTION}}", jobDescription);

    // Display resume
    document.getElementById("resumeOutput").style.display = "block";
    document.getElementById("resumeContent").innerHTML = filledResume;
});
