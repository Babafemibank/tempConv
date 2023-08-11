/*console.log('i like pizza!');
console.log('i really love pizza!');
/*window.alert('i really love pizza!');
let age = 17;
meet = age + 5
console.log('usman is'
, meet , "years old");
let firstName = 'usman';
let age = 20;
let student = false;
document.getElementById('p1').innerHTML = "hello " + firstName;
document.getElementById('p2').innerHTML = 'you are ' + age + ' years old.';
document.getElementById('p3').innerHTML = 'enrolled? ' + student;
let userName = window.prompt('what is your name?');
console.log('your name is : ' + userName);
document.getElementById('button').onclick =
function () {
    username = document.getElementById('yourName').value;
    console.log(username);
    document.getElementById('yourame').innerHTML = username;
};
const PI = 3.14159;
let radius;
let circumference;
radius = window.prompt('enter your radius');
radius = Number(radius);
circumference = 2 * PI * radius;
console.log('the circumference of the circle is ' + circumference)
let a;
let b;
let c;
a = window.prompt("enter side A");
b = window.prompt('enter side B');
a = Number(a);
b = Number(b);
c = Math.pow(a, 2) + Math.pow(b, 2);
c = Math.sqrt(c);
console.log(c);



document.getElementById('subM').onclick =
function() {
a = document.getElementById(forA).value;
a = Number(a); 
b = document.getElementById(forB).value;
b = Number(b); 
c = Math.pow(a, 2) + Math.pow(b, 2);
c = Math.sqrt(c);
c = getElementById(cC).innerHTML = 'side c' + c;
}

let count = 0;
document.getElementById("decreaseBtn").onclick = function(){

count -=1;
document.getElementById("countLabel").innerHTML = count;


}
document.getElementById("resetBtn").onclick = function(){


    count =0;
    document.getElementById("countLabel").innerHTML = count;

    
}
document.getElementById("increaseBtn").onclick = function(){

    count +=1;
    document.getElementById("countLabel").innerHTML = count;


    
const  checkbutton = document.getElementById('subBtn');
const checkbox = document.getElementById('checkBtn');
checkbutton.onclick = function() {
    if (checkbox.checked){
        console.log('you are a student');
    }
    else{
        console.log('you are not a student');
    }
}


usman();
function usman(){
    let age = 22;
    let bame = 'babafemi';
    console.log('hello ' + bame + ' you are ' + age + ' years old')
}
let area;
let width;
let height;
width = window.prompt('enter the width of the triangle');
height =window.prompt('enter the height of the triangle');
area = getArea(width, height);
console.log('the area is ' + area);
function getArea(width, height){
    let reult = width * height;
    return reult;
}
checkWinner(true);
function checkWinner(lose) {
    lose? console.log('you win'): console.log('you lose!')
}
const  answer = Math.floor(Math.random()*10 + 1);
let guesses = 0;
document.getElementById('subBtn').onclick = function(){
let guess =  document.getElementById('guessesS').value
guesses+=1; 
if (guess==answer){
    alert(answer + ' is the answer, it took you ' + guesses + " guesses");
}
else if(guess < answer){
    alert('too small');
}
else{
    alert('too large');
}
}*/ 
function forCelcius(temp){
    return (temp - 32) * 5/9;
}
function forFarenheit(temp) {
    return temp * 9/5 + 32;
    
}
 document.getElementById('subBtn').onclick = function() {
if (document.getElementById('cbutton').checked){
    temp = document.getElementById('degree').value;
temp = Number(temp);
temp = forCelcius(temp);
    document.getElementById('change').innerHTML = temp + '°C';
}
else if(document.getElementById('fbutton').checked){
    temp = document.getElementById('degree').value;
    temp = Number(temp);
    temp = forFarenheit(temp);
    document.getElementById('change').innerHTML = temp + '°F';
}
else{
    document.getElementById('change').innerHTML = 'please select a unit.';
}
 }
let temp;










