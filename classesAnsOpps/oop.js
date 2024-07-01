//object litrel
// const user = {
//     userName: "Ehatasham",
//     loginCount: 9,
//     signedIn : true,
//     getUserDetails: function(){
//         // console.log("Got user details from database");
//     //console.log(`userName: ${this.userName}`);
//     console.log(this);
// }
// }
// console.log(user.userName);
// console.log(user.getUserDetails());


//constructer function

function user(username,loginCouunt,isLoggedIn){
        this.username = username;
        this.loginCouunt = loginCouunt;
        this.isLoggedIn= isLoggedIn;
        this.greeting = function(){
            console.log(`welcomr${this.username}`);
        }
         return this
}

const userOne = new user("ehatsham",5,true)
const useTwo = new user("hussain",5,false)
console.log(userOne.constructor);
console.log(useTwo);