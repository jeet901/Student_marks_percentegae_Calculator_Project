function calculate() {

let subjects = ["math","science","english","computer","social"];
let subjectNames = ["Mathematics","Science","English","Computer","Social Studies"];

let marks = [];
let message = document.getElementById("message");


// Clear previous message
message.innerText = "";


// Get marks meassage
for (let i = 0; i < subjects.length; i++) {
    let value = document.getElementById(subjects[i]).value;

    if (value === "") {
        message.innerText = "Please enter marks for all subjects.";
        message.className = "error";
        return;
    }

    value = Number(value);

    if (value < 0 || value > 100) {
        message.innerText = "Marks must be between 0 and 100.";
        message.className = "error";
        return;
    }

    marks.push(value);
}


// Show table
document.getElementById("resultTable").style.display = "table";

let total = 0;
let overallPass = true;


// Subject-wise result
for (let i = 0; i < marks.length; i++) {

    total += marks[i];

    let status = marks[i] >= 50 ? "Pass" : "Fail";

    if (marks[i] < 50) overallPass = false;

    document.getElementById(subjects[i] + "Marks").innerText = marks[i];
    document.getElementById(subjects[i] + "Status").innerText = status;
}


// Calculate percentage
let percentage = total / 5;


// Grade
let grade = "";
if (percentage >= 90) grade = "A+";
else if (percentage >= 75) grade = "A";
else if (percentage >= 60) grade = "B";
else if (percentage >= 50) grade = "C";
else grade = "D";


// Display results
document.getElementById("total").innerText = "Total Marks: " + total;
document.getElementById("percentage").innerText = "Percentage: " + percentage.toFixed(2) + "%";
document.getElementById("grade").innerText = "Grade: " + grade;

document.getElementById("finalResult").innerText =
"Overall Result: " + (overallPass ? "PASS" : "FAIL");

message.innerText = "Result calculated successfully.";
message.className = "success";
}



//Reset Data
function resetData() {

let fields = ["math","science","english","computer","social"];

for (let i = 0; i < fields.length; i++) {
    document.getElementById(fields[i]).value = "";
}

document.getElementById("message").innerText = "";
document.getElementById("total").innerText = "";
document.getElementById("percentage").innerText = "";
document.getElementById("grade").innerText = "";
document.getElementById("finalResult").innerText = "";
document.getElementById("resultTable").style.display = "none";

}

