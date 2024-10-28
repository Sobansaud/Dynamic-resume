// Function to generate the resume
function generateResume(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var about = document.getElementById('about').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value.split(',').map(function (skill) { return skill.trim(); });
    var experience = document.getElementById('experience').value.split(',').map(function (exp) { return exp.trim(); });
    var linkedin = document.getElementById('linkedin').value;
    var hobbies = document.getElementById('hobbies').value.split(',').map(function (hobby) { return hobby.trim(); });
    var resumeContent = "\n        <h3>".concat(name, "</h3>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Contact:</strong> ").concat(contact, "</p>\n        <p><strong>About:</strong> ").concat(about, "</p>\n        <h4>Education</h4>\n        <p>").concat(education, "</p>\n        <h4>Skills</h4>\n        <ul>").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "</ul>\n        <h4>Experience</h4>\n        <ul>").concat(experience.map(function (exp) { return "<li>".concat(exp, "</li>"); }).join(''), "</ul>\n        <p><strong>LinkedIn:</strong> <a href=\"").concat(linkedin, "\" target=\"_blank\">").concat(linkedin, "</a></p>\n        <h4>Hobbies</h4>\n        <p>").concat(hobbies.join(', '), "</p>\n    ");
    document.getElementById('resume').innerHTML = resumeContent;
    document.getElementById('resume-output').classList.remove('hidden');
}
// Event listener for form submission
document.getElementById('resume-form').addEventListener('submit', generateResume);
