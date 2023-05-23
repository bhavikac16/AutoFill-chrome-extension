// Fetch the form element
const form = document.getElementById('dataForm');

// Add event listener for form submission
document.getElementById("submit").addEventListener('click',() => {
    event.preventDefault(); // Prevent form from being submitted

    // Extract the values from the form fields
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const fullName = firstName + ' ' + lastName;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const location = document.getElementById('location').value;
    const gender = document.getElementById('gender').value;
    const race = document.getElementById('race').value;
    const website = document.getElementById('website').value;
    const linkedin = document.getElementById('linkedin').value;
    const github = document.getElementById('github').value;
    const school = document.getElementById('school').value;
    const discipline = document.getElementById('discipline').value;
    const company_name = document.getElementById('company_name').value;
    const employment_title = document.getElementById('employment_title').value;

    const fileInput = document.getElementById('deck');
    const file = fileInput.files[0];
    // Extract other relevant form fields similarly

    // Create the JSON object
    const json = {
        "firstName": firstName,
        "lastName": lastName,
        "fullName": fullName,
        "email": email,
        "phone": phone,
        "location": location,
        "gender": gender,
        "race": race,
        "website": website,
        "linkedin": linkedin,
        "github": github,
        "school": school,
        "discipline": discipline,
        "company_name": company_name,
        "employment_title": employment_title,
        "deck": file
        // Add other extracted values to the JSON object
    };

    // Use the JSON object as needed
    console.log(json);

    // Reset the form after submission (optional)
    form.reset();
});
