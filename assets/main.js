$("document").ready(function() {
    // PART 1
    // student obj
    var student = {
        "name" : "Mario",
        "surname" : "Rossi",
        "age" : 30
    };

    // stamp
    console.log("*** PARTE 1 ***");
    console.log(student);
    console.log("Nome: " + student.name);
    console.log("Cognome: " + student["surname"]);
    console.log("Età: " + student.age);

    // PART 2
    // array of students (obj)
    var students = [
        student,
        {
            "name" : "Elisa",
            "surname" : "Bianchi",
            "age" : 22
        },
        {
            "name" : "Antonio",
            "surname" : "Verdi",
            "age" : 25
        }
    ];

    console.log("*** PARTE 2 ***");

    // ALGORITHM cycle each student and stamp name + surname
    for (var i = 0; i < students.length; i++) {
        var currentStudent = students[i];
        // currentStudent: name + surname
        var studentName = "";

        // cycle every student (obj) in search of name + surname
        for (var key in currentStudent) {
            if (key == "name") {
                studentName += currentStudent[key] + " ";
            } else if (key == "surname") {
                studentName += currentStudent[key];
            }
        }
        console.log(studentName);
    }

    // PART 3
    // empty var for user student
    var userStudent = {};

    console.log("*** PARTE 3 ***");

    // ASK NAME AND PUSH IN THE OBJ
    // ask and add
    var nome = prompt("Inserisci il nome:");
    userStudent["name"] = nome;

    // ASK NAME AND PUSH IN THE OBJ
    var cognome = prompt("Inserisci il cognome:");
    userStudent["surname"] = cognome;

    // ASK NAME AND PUSH IN THE OBJ
    var age = parseInt(prompt("Inserisci la tua età:"));
    userStudent["age"] = age;

    console.log("Nuovo studente:");
    console.log(userStudent);

    // ADD NEW STUDENT INTO THE STUDENTS ARRAY
    students.push(userStudent);

    console.log("Classe aggiornata:");
    console.log(students);


}); // END document code


// <1-fold SSSSS ALL FUNCTION SSSSS

// #2-fold SSSSS function SSSSS

// #/2-fold EEEEE function EEEEE

// </1-fold> EEEEE ALL FUNCTION EEEEE
