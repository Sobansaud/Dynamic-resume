// Function to generate the resume
function generateResume(event: Event) {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const about = (document.getElementById('about') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => skill.trim());
    const experience = (document.getElementById('experience') as HTMLInputElement).value.split(',').map(exp => exp.trim());
    const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
    const hobbies = (document.getElementById('hobbies') as HTMLInputElement).value.split(',').map(hobby => hobby.trim());

    const resumeContent = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>About:</strong> ${about}</p>
        <h4>Education</h4>
        <p>${education}</p>
        <h4>Skills</h4>
        <ul>${skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
        <h4>Experience</h4>
        <ul>${experience.map(exp => `<li>${exp}</li>`).join('')}</ul>
        <p><strong>LinkedIn:</strong> <a href="${linkedin}" target="_blank">${linkedin}</a></p>
        <h4>Hobbies</h4>
        <p>${hobbies.join(', ')}</p>
    `;

    document.getElementById('resume').innerHTML = resumeContent;
    document.getElementById('resume-output')!.classList.remove('hidden');
}

// Event listener for form submission
document.getElementById('resume-form')!.addEventListener('submit', generateResume);
