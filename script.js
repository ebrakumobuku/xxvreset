// Initialize Supabase
const { createClient } = supabase
const supabaseUrl = "https://your-supabase-url.supabase.co";
const supabaseKey = "your-anon-key";
const db = createClient(supabaseUrl, supabaseKey);

document.getElementById("resume-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let jobTitle = document.getElementById("job-title").value;
    let experience = document.getElementById("experience").value;
    let jobDesc = document.getElementById("job-description").value;

    // Save data to Supabase
    const { data, error } = await db
        .from("resumes")
        .insert([{ name, email, job_title: jobTitle, experience, job_description: jobDesc }]);

    if (error) {
        document.getElementById("output").innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    } else {
        document.getElementById("output").innerHTML = `<p>Resume generated! Check your email.</p>`;
    }
});
