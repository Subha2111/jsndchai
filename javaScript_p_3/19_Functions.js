function sayName(){
    console.log("S");
}  


// sayName()

// function addnum (num1,num2){
//     console.log(num1+num2);
// }

function addnum(num1,num2){
    return num1+num2
}


resultr = addnum(3,4)
// console.log(resultr);
 

function loginUserMessage(UserName="Subhajit "){
    if(!UserName){
        console.log("Please Enter user Name ");
        return 
    }
    return `${UserName} just logged in `
}


console.log(loginUserMessage("Subho "));

console.log(loginUserMessage());




















