// Implicit:

var numStudents = 16;

console.log(`There are ${numStudents} students.`)

// Explicit:

function addStudent(numStudents) {
    return Number(numStudents) + 1
}

console.log(addStudent(numStudents))

