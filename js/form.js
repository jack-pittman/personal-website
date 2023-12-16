function handleSubmit() {
    if (validateForm()) {
        sendEmail();
    } else {
        alert('Please fill in all required fields.');
    }
}

function validateForm() {
    var email = document.getElementById('email-box').value;
    var subject = document.getElementById('subject-box').value;
    var description = document.getElementById('description-box').value;

    // Check if any of the required fields are empty
    if (email.trim() === '' || subject.trim() === '' || description.trim() === '') {
        return false;
    }

    // Add additional validation logic if needed

    // All required fields are filled
    return true;
}

function sendEmail() {
    var email = document.getElementById('email-box').value;
    var subject = document.getElementById('subject-box').value;
    var description = document.getElementById('description-box').value;

    var mailtoLink = 'mailto:jackpittman2020@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(description + '\n\n' + email);

    // Open the default email client
    //window.open(mailtoLink);
    window.location.href = mailtoLink; // Use window.location.href to navigate to the mailto link

}