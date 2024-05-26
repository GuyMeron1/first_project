async function login_Student_func() {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    const raw = JSON.stringify({
        "Name": name,
        "password": password
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    var response = await fetch("students/login", requestOptions);
    const result = await response.json();
    const ltl = document.getElementById("ltl");
    ltl.innerHTML = result.message;
    console.log(result);
}