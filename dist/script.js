"use strict";
// var a = "Kacem"

// // a = 3
// a = "sarra"
// var b : string
// b = "Sarra"
// var c : number = 9
// c = 7
// alert("Hello TypeScript")
// var d : number = 9
// var p : string = "Kacem"
// var s : number = 22
// var check : boolean = true
// check = "false"
// var t : object = [22, "defde", true, 333, 333]
// var d : number[] = [3,2,2,8,9, true]
// var t : boolean[] = [true, false, true, "Sarra"]
// fusion
// var g : (string | boolean)[] = ["Sarra", "Kacem", true, false] 
// var ages : (number | string)[] = [3,2,2, 'kerjgkerlj','frefer', true]
// var t : [string, boolean] = ["Sarra", true]
// var somme : (a : number,b : number)=> boolean =(a,b)=>{
//     if (a + b > 5) {
//         return true
//     } else {
//         return false
//     }
// }
// var user : {name : string, age : number} = {name : "Sarra", age :99}
// interface User{
//     name : string,
//     age : number
// }
// var a : User = {name : "Kacem", age : 24}
// var b : User = {name : "Maymouna", age : 10}
// type strinum = string | number
// var a : strinum  = "Maymouna"
// var b : strinum  = "Sarra"
// var c : strinum  = "Mahmoud"
// type User = {
//     name : string,
//     age : number
// }
// var a : User = {name : "Kacem" , age : 88}
// interface Car{
//     brand : string,
//     model : number,
//     color? : string
// }
// var karhabetsarra : Car = {brand : "Range Rover", model : 2026}
// interface User{
//     name : string,
//     age? : number
// }
// var a : User = {name : "Maymouna", age : 22}
// var b : number | undefined = a.age
// var b : number = a.age!
// var b : number = a.age ?? 0
// var bookingStatus = "Pending"
// bookingStatus = "Accepted"
// if (bookingStatus === "Accepted") {
//     console.log("Mar7bé bik")
// } else {
//     console.log("Nchala mara o5ra")
// }
// enum status{
//     pending = "pending",
//     accepted = "accepted",
//     rejected = "rejected"
// }
// var bookingStatus = status.pending
// bookingStatus = status.accepted
// if (bookingStatus === status.accepted) {
//     console.log("Mar7bé bik")
// } else {
//     console.log("Marra o5ra")
// }
class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
var a = new User("Sarra", 6);
console.log(a);
//# sourceMappingURL=script.js.map