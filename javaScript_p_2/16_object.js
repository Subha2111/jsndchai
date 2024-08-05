//object Literals
const mysym = Symbol("Key1")
const Jsuser ={
    [mysym]:"myKey1",
    name : "Suvo",
    age:21,
    location:"Kol",
    email:"Subho@gmail.com"
}


console.log(Jsuser["name"]);
console.log(Jsuser[mysym]);
Jsuser.email="subha@hotmail"
//Object.freeze(Jsuser)
Jsuser.email="Suvo@gmail.com"
console.log(Jsuser);


Jsuser.greeting = function(){
    console.log("Hello ");
}

console.log(Jsuser.greeting());



Jsuser.greetings2=function(){
    console.log(`Hello JS User , ${this.name}`);
}

console.log(Jsuser.greetings2);






