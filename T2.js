//3. Declare variables to store your first name, last name, marital status, 
//country and age in multiple lines

var first="Shanmuga";
var last="Priya";
var age= 21;
var maritalstatus="Single";
var country="India";
console.log(first)
console.log(last)
console.log(age)
console.log(maritalstatus)
console.log(country)
//_____________________________________________________________________
//4. Declare variables to store your first name, last name, marital status, country and 
//age in a single line

console.log(" I am " + first + last + " from " +  country  +  " My  Age is " + age + " I  am  "  + maritalstatus)
//__________________________________________________________________________
//6. Convert the string to integer

//Parseint
//Number
var ttr=parseInt("1234str")
var str= Number("100");
console.log(typeof ttr)
console.log(typeof str)
//____________________________________________________________________________
// 5. SQUARE OF A NUMBER
//Math.pow function
function mul(a,b){
    return Math.pow (a,b)
}
console.log(mul(6,2))//36
//_________________________________________________________________________
//Exponention method
let numa=6;
let numb=2;
console.log(numa ** numb)//36
//__________________________________________________________________________
//6. Swapping Two number third variable4==

let e=5;
let f=10;
// let temp=e;
//e=f;
//f=temp;
//console.log(e)//10
 //console.log(f)//5

 //Without third variable

 [e,f] = [f,e];
 console.log(e + "," + f) //10,5
//_________________________________________________________________________


 //7. ADDING three number
 let n1=5;
let n2= 10;
let n3= 5;
console.log(n1 + n2 + n3)//20
//_________________________________________________________________________

//8.Celsious to fahrenheit conversion

let ce=26;
let fh=120;
let fa=(ce * (9/5) + 32);
//fahrenheit to celsious conversiom
let cl=(fh-32)*(5/9);

console.log(fa);//78.80000000000001
console.log(cl);//48.88888888888889
//________________________________________________________________________________________________________

//9 Meter to miles

let meter=5000;
console.log(meter * 0.00062137); //3.10685
//_________________________________________________________________________________________________________

//10 Pounds to kg
let pounds=100;
let pounds2=50;
//1st method
console.log(pounds*0.454); //45.4
//2nd method
console.log(pounds2 / 2.2046);//22.679851220175994
//________________________________________________________________________________________________________
//11. Batting a average
//Batting average = Number of times the player has scored a hit / Number of official times player is3
let hit=78;
let balls=80;
console.log(Math.round(hit/balls));//1
console.log(hit/balls); //0.975
//________________________________________________________________________________________________________
//12 Average of 5 test scores
let f1=60;
let f2=70;
let f3=78;
let f4=80;
let f5= 90;

let average= (f1 + f2 + f3 + f4 + f5 )/5;
console.log(average); //75.6
//________________________________________________________________________________________________________
//13. Power of a number
function mul(x,y ){
    return Math.pow (x,y)
}
console.log(mul(2,4)) //16
//_________________________________________________________________________________________________________
//14. Simple interest

function si(p,t,r) {
    return (p*t*r)/100
} 
console.log(si(1000,5,10)) //500
//___________________________________________________________________________________________________________
//15. Area of equilateral triangle

function ar(ab){
    return (1.73 * ab * ab)/4
}
console.log(ar(20)); // 173
//____________________________________________________________________________________________________________
//16. Area of isosceleous triangle

function iso(ba,he){
    return (1 * ba * he)/2
}
console.log(iso(10,5));//25
//____________________________________________________________________________________________________________

//17. Volume of sphere

function vol(sph){
    return (4/3 * 3.14 * (sph*sph*sph))
}
console.log(vol(5))//523.3333333333334
//_____________________________________________________________________________________________________________

//18.Volume of prism
 // we need height and area of rectangle

let height=13;
let l=9;
let w=7;
let arc= l * w; //area of rectangle
console.log(height*arc); //819 cubic centimeters
//______________________________________________________________________________________________________________

//19. Calculate discount by actual cost and sold cost

function discount(actual,sold){
    return (((actual-sold)/actual) * 100 + "%")
}
console.log(discount(120,90))//25%
//____________________________________________________________________________________________________________
//20. Given radius find area diameter circumference

let radius=6;
let diameter= 2 * radius;
let circumference= 2 * 3.14 * radius;
let area= 3.14 * radius * radius;
console.log(" Diameter : " + diameter ) //Diameter : 12
console.log(" Circumference :" +  circumference) // Circumference :37.68
console.log(" Area :" + area) //Area : 113.03999999999999
//_______________________________________________________________________________________________________________

//Arithmetic operation

let x1=90;
let x2=70;
console.log(x1 + x2);//160
console.log(x1-x2);//20
console.log(x1 * x2);//6300
console.log(x1/x2);//1.2857142857142858
console.log(x1%x2);//20
if(x1>x2){
    console.log("x1 is greater than x2")
}
else {
    console.log("x1 is lesser than x2")
}
if(x1==x2){
    console.log("x1 is equal to x2")
}
else{
    console.log("x1 is not equal to x2")
}
//_______________________________________________________________________________________________________________________

//Display the asterisk pattern as shown below(No loop needed):

 var cj="*****";
console.log(cj);
console.log(cj);
console.log(cj);
console.log(cj);
console.log(cj);
//________________________________________________________________________________________________________________________

//Electricity bill
function bill(units){
    if(units<=100){ 
    return units*10
    }
    else if(units>100 && units<=200){
        return (100 * 10)
            + (units - 100)
                  * 15;
    }
    else if(units>200 && units<=300){
        return (100 * 10) + (100 * 15) + (units - 200)  * 20;
    }
    else if (units > 300)
    {
        return (100 * 10)
            + (100 * 15)
            + (100 * 20)
            + (units - 300)
                  * 25;
    }

}
console.log(bill(100))//1000
console.log(bill(150))//1750
console.log(bill(267))//3840
console.log(bill(500))//9500
//___________________________________________________________________________________________________________________
//Program to calculate cgpa

var ds=9.5;
var m2=7.5;
var cs=8.0;
var vlsi=9.2;
var en=7.9;

let per=(ds+m2+cs+vlsi+en)/5.0;
let cgpa=9.5*per;
console.log(cgpa)//79.99
//________________________________________________________________________________________________________________