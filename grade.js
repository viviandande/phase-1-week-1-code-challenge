
function checkGrades(studentsGrades){
    if(studentsGrades >= 79 && studentsGrades <= 100){
         return "A"
    }
    else if(studentsGrades >= 60 && studentsGrades <= 79){
        return "B"
    }
    else if(studentsGrades >= 49 && studentsGrades <= 59){
        return "C"
    }
    else if(studentsGrades >= 40 && studentsGrades <= 49){
         return "D"
    }
    else if(studentsGrades < 40){
        return "E"
    }
    else {
        return "Enter valid grade"
    }
}
//console.log(checkGrades(56))
function handleClick(event) {
    let marks = parseInt(document.getElementById("Marks").value)
    let grade = checkGrades(marks)
    //console.log(grade)
    document.getElementById("Grade").textContent = grade
}