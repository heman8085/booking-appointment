document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    // Collect user details
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    // Store user details in local storage
    var userDetails = {
        'username': username,
        'email': email,
        'phone': phone
    };

    // Convert the userDetails object to a JSON string and store it in local storage
    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    // You can add further logic here, such as displaying a confirmation message

    // Clear the form
    document.getElementById('appointmentForm').reset();
});