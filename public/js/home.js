async function callAll() {
    var response = await fetch("/teachers/allTeachers");
    const result = await response.json();
    let arr = result.msg;
    var div_element = document.getElementById("repeat_teachers");
    for (let i = 0; i < arr.length; i++) {
        let somediv = document.createElement("div");
        let pName = document.createElement("p");
        let pAge = document.createElement("p");
        let pSubjects = document.createElement("p");
        let pEmail = document.createElement("p");
        pName.textContent = "Name: " + arr[i].Name;
        pAge.textContent = "Age: " + arr[i].Age;
        pSubjects.innerHTML = "Subjects: " + JSON.stringify(arr[i].Subjects);
        pEmail.textContent = "Email: " + arr[i].Email;
        somediv.appendChild(pName);
        somediv.appendChild(pAge);
        somediv.appendChild(pSubjects);
        somediv.appendChild(pEmail);
        div_element.appendChild(somediv);
    }
}
callAll();
