
"18. Grades are computed using a weighted average. Suppose that the written test counts 70%,  lab exams 20% and assignments 10%."
"If Arun has a score of"
        "Written test = 81"
        "Lab exams = 68"
        "Assignments = 92"

"Arun’s overall grade = (81x70)/100 + (68x20)/100 + (92x10)/100 = 79.5"
"Write a program to find the grade of a student during his academic year."
"Program should accept the scores for written test, lab exams and assignments"
"Output the grade of a student (using weighted average)"



let written:number;
let lab:number;
let assignments:number;

function weightedAverage(w:number,l:number,a:number):number{
    let res:number =  (w*70 + l*20 + a*10) /100;
    return Number(res.toFixed(2))
}

written = 81;
lab =68;
assignments = 92

console.log(weightedAverage(written,lab,assignments))