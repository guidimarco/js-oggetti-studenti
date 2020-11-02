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

    // console.log("Vers 1.0");
    // stampNameSurname(students);

    // console.log("Vers 2.0");
    // stampNameSurnameTwo(students);

    // console.log("Vers 3.0");
    // rivedere perche stampa l'eta
    // stampNameSurnameThree(students);

    console.log("Vers 4.0");
    stampNameSurnameFour(students);

    // // PART 3 - VERSION 1
    // // empty var for user student
    // var userStudent = {};
    //
    // console.log("*** PARTE 3 ***");
    //
    // // ASK NAME AND PUSH IN THE OBJ
    // // ask and add
    // var nome = prompt("Inserisci il nome:");
    // userStudent["name"] = nome;
    //
    // // ASK NAME AND PUSH IN THE OBJ
    // var cognome = prompt("Inserisci il cognome:");
    // userStudent["surname"] = cognome;
    //
    // // ASK NAME AND PUSH IN THE OBJ
    // var age = parseInt(prompt("Inserisci la tua età:"));
    // userStudent["age"] = age;
    //
    // console.log("Nuovo studente:");
    // console.log(userStudent);
    //
    // // ADD NEW STUDENT INTO THE STUDENTS ARRAY
    // students.push(userStudent);
    //
    // console.log("Classe aggiornata:");
    // console.log(students);

    // PART 3 - VERSION 2: add info after
    // ask name + surname + age
    var nome = prompt("Inserisci il nome:");
    var cognome = prompt("Inserisci il cognome:");
    var age = parseInt(prompt("Inserisci la tua età:"));

    var userStudent = {
        "name" : nome,
        "surname" : cognome,
        "age" : age
    }

    // console-print
    console.log("*** PARTE 3 ***");
    console.log("Nuovo studente:");
    console.log(userStudent);

    // ADD NEW STUDENT INTO THE STUDENTS ARRAY
    students.push(userStudent);

    // console-print
    console.log("Classe aggiornata:");
    console.log(students);




}); // END document code


// <1-fold SSSSS ALL FUNCTION SSSSS

// #2-fold SSSSS stamp name and surname SSSSS
// ALGORITHM cycle each student and stamp name + surname
function stampNameSurname(array) {
    // LOCAL VAR
    var currentStudent;
    var studentName = ""; // string

    for (var i = 0; i < array.length; i++) {
        currentStudent = array[i];
        studentName = "";

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
};

// #/2-fold EEEEE stamp name and surname EEEEE

// #2-fold SSSSS stamp name and surname SSSSS
// ALGORITHM cycle each student and stamp name + surname
function stampNameSurnameTwo(array) {
    // LOCAL VAR
    var currentStudent;
    var studentName = []; // array

    for (var i = 0; i < array.length; i++) {
        currentStudent = array[i];
        studentName = [];

        // cycle every student (obj) in search of name + surname
        for (var key in currentStudent) {
            if (key == "name") {
                studentName.push(currentStudent[key]);
            } else if (key == "surname") {
                studentName.push(currentStudent[key]);
            }
        }

        console.log(studentName.join(" "));
    }
};

// #/2-fold EEEEE stamp name and surname EEEEE

// #2-fold SSSSS stamp name and surname SSSSS
// ALGORITHM cycle each student and stamp name + surname
function stampNameSurnameThree(array) {
    // LOCAL VAR
    var currentStudent;
    var studentName = []; // array

    for (var i = 0; i < array.length; i++) {
        currentStudent = array[i];
        studentName = [];

        // cycle every student (obj) in search of name + surname
        for (var key in currentStudent) {
            switch (key) {
                case key: name
                    studentName.push(currentStudent[key]);
                    break;
                case key: surname
                    studentName.push(currentStudent[key]);
                    break;
            }
        }

        console.log(studentName.join(" "));
    }
};

// #/2-fold EEEEE stamp name and surname EEEEE

// #2-fold SSSSS stamp name and surname SSSSS
// ALGORITHM cycle each student and stamp name + surname
function stampNameSurnameFour(array) {
    // LOCAL VAR
    var currentStudent;

    for (var i = 0; i < array.length; i++) {
        currentStudent = array[i];
        console.log(currentStudent.name + " " + currentStudent.surname);
    }
};

// #/2-fold EEEEE stamp name and surname EEEEE

// </1-fold> EEEEE ALL FUNCTION EEEEE
