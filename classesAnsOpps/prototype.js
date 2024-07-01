// let myName = "Ehatasham        "
// let myChannel = "code   "

// console.log(myName.truelength);


// let myHeros = ["thor","spiderman"]

// let myPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`spider power is ${this.spiderman}`);
//     }
// }

// Object.prototype.ehatasham = function(){
//     console.log(`ehatasham is there `);
// }
// Array.prototype.heyEha =  function(){
//     console.log(`ehatasham is there`)
// }

// // myPower.ehatasham( )
// // myHeros.ehatasham()
// // myHeros.heyEha()
// // myPower.heyEha()---- its not done because mypower is not array

// // inheritance
// const User = {
//     name: "chai",
//     email: "chai@gmail.com"
// }
// const Teacher = {
//     makeVideo: TextTrackCue
// }

// const TeachingSupport = {
//     isAvailable:false
// }

// const TASupport = {
//     makeAssignment: 'JS assignment',
//     fullTime : true,
//     __proto__: TeachingSupport
// }
// // Teacher.__proto__ = User

//modle syntax
// Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUserName = "ChaiAurCode   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`true length is ${this.trim().length}`);
}
anotherUserName.trueLength()

"    Ehatasham   ".trueLength()