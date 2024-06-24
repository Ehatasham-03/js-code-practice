const myNumbers = [1,2,3,6,5,8,9,5,10]

// const newNumbs = myNumbers.map( (num) => num+10)
// console.log(newNumbs);


//chaining

const newNumb = myNumbers
                        .map( (num) => num * 10 )
                        .map( (num) => num +1)
                        .filter ((num) => num >= 40 && num <=100 )
    console.log(newNumb);