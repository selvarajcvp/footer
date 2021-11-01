var johnweight=78
var markWeight=92
var johnheight=1.69
var markHeight=1.95
var markBmi=math.round(markWeight/markHeight**2)
var jhonBmi=math.round(johnweight/johnHeight**2)
console.log(markBmi);

// const student_arr=[{name:"a",mark:"400",percentage:80},
// {name:"b",mark:"390",percentage:78},
// {name:"c",mark:"275",percentage:55},
// {name:"d",mark:"305",percentage:61}]
// const new_percentage_student_arr=student_arr.map((emp)=>{
//     emp.percentage=(student.mark<300 && student.mark>=400)?55:
//     (student.mark>=350 && student.mark<400)?75:
//     (student.mark>400)?95:80;
//     return emp;
//     })
// console.log("newpercentage array",new_mark_percentage_arr);