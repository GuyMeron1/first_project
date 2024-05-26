async function add_Teacher_func() {
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const subjects = document.getElementById("subjects").value;
    const email = document.getElementById("email").value;

    let subjects_array = subjects.split(',');
    subjects_array = subjects_array.map(subjects => subjects.trim());

    const raw = JSON.stringify({
        "Name": name,
        "Age": age,
        "Subjects": subjects_array,
        "Email": email
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
    };

    var response = await fetch("/teachers/addTeacher", requestOptions)
    const result = await response.json();
    console.log(result);

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("subjects").value = "";
    document.getElementById("email").value = "";
}

document.addEventListener('DOMContentLoaded', function () {
    const emailOptions = document.querySelectorAll('.email-option');
    emailOptions.forEach(button => {
        button.addEventListener('click', function () {
            const emailInput = document.getElementById('email');
            const currentEmail = emailInput.value;
            const emailOption = this.textContent;
            emailInput.value = currentEmail + emailOption;
       });
});
});
