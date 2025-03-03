document.addEventListener("DOMContentLoaded", function() {
    const jobTypeDropdown = document.getElementById("jobType");
    const skillsDropdown = document.getElementById("skills");

    // Define skills for each job type
    const skillsByJob = {
        "Tech": ["JavaScript", "Python", "SQL", "Cybersecurity", "Cloud Computing"],
        "Healthcare": ["Patient Care", "Medical Terminology", "Emergency Response", "Phlebotomy", "Surgical Assistance"],
        "Finance": ["Accounting", "Financial Analysis", "Tax Preparation", "Investment Management", "Risk Assessment"],
        "Creative": ["Graphic Design", "Content Writing", "Video Editing", "Social Media Marketing", "Photography"],
        "General": ["Customer Service", "Sales", "Team Leadership", "Time Management", "Communication"]
    };

    // Update skills dropdown when job type is selected
    jobTypeDropdown.addEventListener("change", function() {
        const selectedJob = jobTypeDropdown.value;
        skillsDropdown.innerHTML = ""; // Clear previous options

        if (selectedJob in skillsByJob) {
            skillsByJob[selectedJob].forEach(skill => {
                let option = document.createElement("option");
                option.value = skill;
                option.textContent = skill;
                skillsDropdown.appendChild(option);
            });
        }
    });

    document.getElementById("generate").addEventListener("click", function() {
        const jobType = document.getElementById("jobType").value;  
        const name = encodeURIComponent(document.getElementById("fullName").value);
        const exp = encodeURIComponent(document.getElementById("experience").value);
        const skills = Array.from(skillsDropdown.selectedOptions).map(option => encodeURIComponent(option.value)).join(", ");
        const desc = encodeURIComponent(document.getElementById("selfDescription").value);

        let template = "";

        if (jobType === "Tech") {
            template = "tech.html";
        } else if (jobType === "Healthcare") {
            template = "healthcare.html";
        } else if (jobType === "Finance") {
            template = "finance.html";
        } else if (jobType === "Creative") {
            template = "creative.html";
        } else if (jobType === "General") {
            template = "general.html";
        }

        if (template) {
            window.location.href = `/templates/${template}?name=${name}&exp=${exp}&skills=${skills}&desc=${desc}`;
        } else {
            alert("Please select a job type!");
        }
    });
});
