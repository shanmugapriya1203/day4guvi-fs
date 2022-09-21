//TASK
//1st question
//How to compare two json have the same properties witout order ?
//Here we use stringify method
//When sending data to a web server, the data has to be a string.
//Convert a JavaScript object into a string with JSON.stringify().

//HERE IS THE CODE

var obj1 = {
    name: "person 1",
    age: 5
};
var obj2={
    age: 5,
    name: "person 1",
};
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); //OUTPUT FALSE



//_________________________________________________________________________
//2nd question

var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send(); 
request.onload= function(){
    var  res =JSON.parse(request.response);
    for(var i=0;i<res.length;i++) {
       
        //2ND QUESTION
       console.log(res[i].flag);
    }

    
//3RD QUESTION
       for(var i=0;i<res.length;i++) {
    console.log("  Country name : " +  res[i].name, " , Region : " + res[i].region,   " , Sub Region : " + res[i].subregion, " , Population : " + res[i].population)
       }
};