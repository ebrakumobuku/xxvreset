document.getElementById("generate").addEventListener("click", function() {
    const jobType = document.getElementById("jobType").value;  
    const name = encodeURIComponent(document.getElementById("fullName").value);
    const exp = encodeURIComponent(document.getElementById("experience").value);
    const skills = encodeURIComponent(document.getElementById("skills").value);
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
