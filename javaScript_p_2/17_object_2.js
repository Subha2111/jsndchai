// const tinderUser =  new Object()
const tinderUser={}

// console.log(tinderUser);

tinderUser.id ="123tmai"
tinderUser.name ="Suvo"
tinderUser.isLoggedin = false

console.log(Object.keys(tinderUser));
console.log(Object.values);
console.log(Object.entries);

console.log(tinderUser.hasOwnProperty('name'));

// console.log(tinderUser);

const regularUser = {
    email : "Some@gmail.com",
    fullname:{
        userfullname:{
            firstname : "Suvo",
            lastName:"Manna"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastName);


obj1={1:"A",2:"B",3:"C"}
obj2={4:"D",5:"E",6:"F"}

obj3={...obj1,...obj2}
// console.log(obj3);

arr =[
    {1:"A"},
    {2:"B",3:"C"}
]




