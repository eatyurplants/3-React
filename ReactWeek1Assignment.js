class Student {
    constructor(name, email, community){
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(student){
        //checks array for extant email and returns a boolean to "studentexists"
        let studentexists = this.students.some(studentToReg => studentToReg.email === student.email);
        if (!studentexists){  //if the student does not exist
            this.students.push(student);  //add the student to the array
            console.log(`Registering ${student.email} to the bootcamp ${this.name}.`);
        } else {  //student already registered, do not add
            console.log(`*****${student.email} is already registered to ${this.name}.*****`);
        }
        return (this.students); //returns array of students in bootcamp
    }
}
