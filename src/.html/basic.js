var johnWeight=78;
var markWeight=92;
var johnHeight=1.69;
var markHeight=1.95;
var markBmi=(markWeight/markHeight**2);
var jhonBmi=(johnWeight/johnHeight**2);
console.log(markBmi);
console.log(jhonBmi);
var x=markBmi>jhonBmi;
console.log(x);
var johnHeight2=1.76;
var johnWeight2=85;
var markHeight2=1.88;
var markWeight2=95;
var markBmi2=(markWeight2/markHeight2**2);
var jhonBmi2=(johnWeight2/johnHeight2**2);
console.log(markBmi2);
console.log(jhonBmi2);
var y=markBmi2<jhonBmi2;
console.log(y);

console.log(`case 1:
mark bmi ${markBmi} 
john bmi ${jhonBmi}`);
if(markBmi>jhonBmi){
    console.log(`mark's bmi ${markbmi},is higher than john's bmi ${jhonBmi}`);
}else{
    console.log(`john'bmi ${jhonBmi} is higher than mark's bmi ${markBmi}`);
}
console.log(`case 2:
mark bmi ${markBmi2}
john bmi ${markBmi2}`);

if(markBmi2>jhonBmi2){
    console.log(`mark's bmi ${markBmi2},is higher than john's bmi ${jhonBmi2}`);
}else{
    console.log(`john's bmi ${jhonBmi2},is higher than mark's bmi ${markBmi2}`);
}



