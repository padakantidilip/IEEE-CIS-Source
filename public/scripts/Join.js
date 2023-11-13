function submitForm() {
    document.getElementById('student-form').style.display = 'none';
    document.getElementById('success-message').style.display = 'block';
    event.preventDefault(); 
}

function goBack() {
    document.getElementById('student-form').style.display = 'block';
    document.getElementById('success-message').style.display = 'none';
}