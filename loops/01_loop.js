// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//   //  console.log(num);
// }

// const greetings = "hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet} welcome `)
// }

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "Amarica")
// map.set('Ch', "China")
//  // map.set('USA', "Amarica") /// not in map
//  // console.log(map);
// //  for (const [key,value] of map) {
// //     console.log(key, ':-' , value);
// //  }

const myObject = {
    js: 'javascript',
    cpp: 'cpplus',
    rb: "ruby",
    sw: "swift",
}
// for (const key in myObject) {
//   console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// const arr = ["js","cpp","java"]
// for (const key in arr) {
//   console.log(arr[key]);
// }

const map = new Map()
map.set('IN', "India")
map.set('USA', "Amarica")
map.set('Ch', "China")
// for(const key in map){
//   console.log(key);
// }

const coding = ["js","cpp","java", "html", "react"]
// coding.forEach( function(items) {
//   console.log(items);
// })
// coding.forEach((val) => {
//   console.log(val);
// })
// function printMe(val){
//   console.log(val);
// }
// coding.forEach(printMe)


// coding.forEach((item, index , arr)=>{
//   console.log(item,index,arr);
// })
const myCoding = [
  {
    languageName : "java Script",
    languageFileName : "js"
  },
  {
    languageName : "java",
    languageFileName : "jc"
  },
  {
    languageName : "c plus",
    languageFileName : "cpp"
  },
]
myCoding.forEach((item) =>{
  console.log(item.languageName);
})