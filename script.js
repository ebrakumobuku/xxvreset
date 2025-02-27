// Initialize Supabase client
const SUPABASE_URL = "YOUR_SUPABASE_URL";           // Replace with your Supabase URL
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";   // Replace with your Supabase Anon Key
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.getElementById("resume-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    // Collect user input from the form
    const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        location: document.getElementById("location").value,
        jobTitle: document.getElementById("job-title").value,
        summary: document.getElementById("summary").value,
        experience: document.getElementById("experience").value,
        education: document.getElementById("education").value
    };

    // Save user data to Supabase in the "resumes" table
    const { data, error } = await supabase
      .from('resumes')
      .insert([{
          name: userData.name,
          email: userData.email,
          phone: userData.phone,
          location: userData.location,
          job_title: userData.jobTitle,
          summary: userData.summary,
          experience: userData.experience,
          education: userData.education
      }]);

    if(error) {
        document.getElementById("resume-container").innerText = "Error saving data: " + error.message;
        return;
    }

    // Determine the template based on the job title
    let templateFile = selectTemplate(userData.jobTitle);

    // Fetch the chosen template from the templates folder
    fetch(`templates/${templateFile}`)
      .then(response => response.text())
      .then(templateHTML => {
          // Populate the template with user data
          let finalHTML = populateTemplate(templateHTML, userData);
          document.getElementById("resume-container").innerHTML = finalHTML;
      })
      .catch(err => {
          document.getElementById("resume-container").innerText = "Error loading template: " + err.message;
      });
});

function selectTemplate(jobTitle) {
    const title = jobTitle.toLowerCase();
    if(title.includes("engineer") || title.includes("developer") || title.includes("tech") || title.includes("it")) {
        return Math.random() < 0.5 ? "tech1.html" : "tech2.html";
    } else if(title.includes("doctor") || title.includes("nurse") || title.includes("health")) {
        return Math.random() < 0.5 ? "healthcare1.html" : "healthcare2.html";
    } else if(title.includes("accountant") || title.includes("finance") || title.includes("business")) {
        return Math.random() < 0.5 ? "finance1.html" : "finance2.html";
    } else if(title.includes("designer") || title.includes("creative") || title.includes("marketing")) {
        return Math.random() < 0.5 ? "creative1.html" : "creative2.html";
    } else {
        return Math.random() < 0.5 ? "general1.html" : "general2.html";
    }
}

function populateTemplate(template, data) {
    return template
        .replace(/\[NAME\]/g, data.name)
        .replace(/\[JOB_TITLE\]/g, data.jobTitle)
        .replace(/\[EMAIL\]/g, data.email)
        .replace(/\[PHONE\]/g, data.phone)
        .replace(/\[LOCATION\]/g, data.location)
        .replace(/\[SUMMARY\]/g, data.summary)
        .replace(/\[EXPERIENCE\]/g, data.experience)
        .replace(/\[EDUCATION\]/g, data.education);
}
