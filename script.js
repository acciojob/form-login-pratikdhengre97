function getFormvalue() {
    // Prevent form submission
    event.preventDefault();

    // Get input values
    const firstName = document.querySelector('input[name="fname"]').value.trim();
    const lastName = document.querySelector('input[name="lname"]').value.trim();

    // Display full name
    alert(firstName + " " + lastName);

    return false;
}
