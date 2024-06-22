// const appleUser = new Object() ----singleton object
const appleUser = {} // ---- non-singleton object

appleUser.id ="123abc"
appleUser.name ="Ehata"
appleUser.isloggedIn = false

// console.log(appleUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ehatasham",
            lastname: "Hussain"

        }
    }
}
  //  console.log(regularUser.fullname.userfullname.lastname);

  const obj_1 = {1: "a", 2: "b"}
  const obj_2 = {3: "a", 4: "b"}
//   const obj_3 = Object.assign(obj_1,obj_2)       //merge in obj_1
//   const obj_4 = Object.assign({},obj_1,obj_2)    // merge in null obj{}
//   console.log(obj_4);

const obj_3 = {...obj_1,...obj_2}
// console.log(obj_3);

// console.log(Object.keys(appleUser));
// console.log(Object.values(appleUser));
// console.log(Object.entries(appleUser));

console.log(appleUser.hasOwnProperty('islogged')); //----check wheather the data having this data result in boolean
