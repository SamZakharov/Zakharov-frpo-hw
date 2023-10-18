class Student {
    constructor(name, surname, birthYear) {
        this.name = name;
        this.surname = surname;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = new Array(25).fill(false);
    }

    present() {
        const index = this.attendance.findIndex(status => !status);
        if (index !== -1) {
            this.attendance[index] = true;
        }
    }

    absent() {
        const index = this.attendance.findIndex(status => !status);
        if (index !== -1) {
            this.attendance[index] = false;
        }
    }

    calculateAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    calculateAverageGrade() {
        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        const average = sum / this.grades.length;
        return average.toFixed(2);
    }

    summary() {
        const averageGrade = this.calculateAverageGrade();
        const attendancePercentage = this.attendance.filter(status => status).length / this.attendance.length;
        if (averageGrade > 90 && attendancePercentage > 0.9) {
            return "Молодец!";
        } else if (averageGrade > 90 || attendancePercentage > 0.9) {
            return "Хорошо, но можно лучше";
        } else {
            return "Неудачник!";
        }
    }
}


const student1 = new Student("Artme", "Koteluk", 1997);
const student2 = new Student("Victoria", "Gaponova", 1991);
const student3 = new Student("Sam", "Zalharov", 1995);


student1.grades = [95, 88, 92, 97, 89];
student2.grades = [90, 92, 87, 94, 91];
student3.grades = [60, 85, 87, 90, 91];


student1.present();
student1.present();
student1.absent();
student1.present();
student1.absent();

student2.present();
student2.present();
student2.present();
student2.present();
student2.present();

student3.present();
student3.absent();
student3.absent();
student3.absent();
student3.absent();



console.log(`${student1.name} ${student1.surname}, возраст: ${student1.calculateAge()} лет.`);
console.log(`Средний балл: ${student1.calculateAverageGrade()}`);
console.log(`Резюме: ${student1.summary()}`);

console.log(`${student2.name} ${student2.surname}, возраст: ${student2.calculateAge()} лет.`);
console.log(`Средний балл: ${student2.calculateAverageGrade()}`);
console.log(`Резюме: ${student2.summary()}`);
console.log(`${student3.name} ${student3.surname}, возраст: ${student3.calculateAge()} лет.`);
console.log(`Средний балл: ${student3.calculateAverageGrade()}`);
console.log(`Резюме: ${student3.summary()}`);