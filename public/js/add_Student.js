async function add_Student_func() {

    console.log("runing");
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const grades = document.getElementById("grades").value;
    const password = document.getElementById("password").value;

    let grades_array = grades.split(',');
    grades_array = grades_array.map(grade => grade.trim());

    const raw = JSON.stringify({
        "Name": name,
        "Age": age,
        "Grades": grades_array,
        "Password": password
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };
    var response = await fetch("/students/addStudent", requestOptions)
    const result = await response.json();
    console.log(result);
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("grades").value = "";
    document.getElementById("password").value = "";
}