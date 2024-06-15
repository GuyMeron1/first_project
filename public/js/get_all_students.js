async function get_All_Students() {
    const token = localStorage.getItem('token');
    const myHeaders = new Headers();
    myHeaders.append("authorization", `bearer ${token}`);
    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };
    const response = await fetch("/students/all", requestOptions);
    const result = await response.json();
    console.log(result);
    const studentsList = document.getElementById("students-list");
    if (response.status === 200) {
        result.forEach(student => {
            const studentDiv = document.createElement("div");
            studentDiv.classList.add("student-card");

            const nameElement = document.createElement("p");
            nameElement.classList.add("student-detail");
            nameElement.textContent = student.Name;

            const ageElement = document.createElement("p");
            ageElement.classList.add("student-detail");
            ageElement.textContent = `Age: ${student.Age}`;

            const gradesElement = document.createElement("p");
            gradesElement.classList.add("student-detail");
            gradesElement.textContent = `Grades: ${student.Grades.join(', ')}`;

            studentDiv.appendChild(nameElement);
            studentDiv.appendChild(ageElement);
            studentDiv.appendChild(gradesElement);

            studentsList.appendChild(studentDiv);
        });
    } else {
        studentsList.textContent = result.message;
    }
}
window.onload = get_All_Students;
