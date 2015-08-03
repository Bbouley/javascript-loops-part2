// add scripts

console.log("sanity check!");

var students = ['joe', 'carl', 'rachel', 'derek', 'lily'];

for (var i = 0; i < students.length; i++) {
  console.log(students[i]);
}

for (var i = 0; i < students.length-1; i++) {
  console.log(students[i]);
}

for (var i = 0; i < students.length; i+=2) {
  console.log(students[i]);
}

for (var i = students.length-1; i >= 0; i--) {
  console.log(students[i]);
}

for (var i = 0; i < students.length; i++) {
  if (students[0] === students[i]){
    console.log(students[0]);
  } else {
    console.log(students[i]);
    console.log(students[i]);
  }
}
