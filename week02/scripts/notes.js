const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];


const ul = document.getElementById('grade');

// for loop
for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        const li = document.createElement('li');
        let grade = `${studentReport[i]}`;
        li.textContent = grade;
        ul.appendChild(li);
    }
}

// while loop
let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        const li = document.createElement('li');
        let grade = `${studentReport[i]}`;
        li.textContent = grade;
        ul.appendChild(li);
    }
    i++;
}

// forEach loop
studentReport.forEach(grade => {
    if (grade < LIMIT) {
        const li = document.createElement('li');
        let gradeReport = `${grade}`;
        li.textContent = gradeReport;
        ul.appendChild(li);
    }
})

// for...in loop
for (const i in studentReport) {
    if (studentReport[i] < LIMIT) {
        const li = document.createElement('li');
        let grade = `${studentReport[i]}`;
        li.textContent = grade;
        ul.appendChild(li);
    }
}

const days = document.getElementById('days-of-the-week');
const longName = { weekday: 'long' };

const today = new Date();
let todayString = new Intl.DateTimeFormat('en-US', longName).format(today);
document.getElementById('days-of-the-week').innerHTML = `Today is ${todayString}.`;

for (let i = 1; i <= DAYS; i++) {
    let nextDay = new Date();
    nextDay.setDate(today.getDate() + i);
    let nextDayString = new Intl.DateTimeFormat('en-US', longName).format(nextDay);
    let day = document.createElement('li');
    day.textContent = nextDayString;
    days.appendChild(day);
}