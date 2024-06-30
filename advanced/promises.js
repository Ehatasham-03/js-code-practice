const promiseOne = new Promise(function(resolve,reject){
    //Do and async task
    //DB calls, cryptography, Network Call
    setTimeout(() => {
        console.log('async task is complete');
    }, 1000);
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
}) 

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if (!error){
            resolve({username:"Ehatasham", password:"123"})
        }else{
            reject('Error : Something went wrong')
        }
    },2000)
})
promiseFour.then(() => {
    console.log(user);
    return user.username
}).then(function(username){
    console.log(username);
}).catch(function (error) {
    console.log(error);
    
}).finally(()=>{
    console.log("promise is either resolve or rejected");
}
)



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if (!error){
            resolve({username:"java", password:"123"})
        }else{
            reject('Error : js went wrong')
        }
    },1000)})

    async function consumedPromisefive(){
     try {
        const response =    await promiseFive
    console.log(response );
     } catch (error) {
        console.log(error);
     }
    }
    consumedPromisefive()

    async function getAllUsers(){
      try {
        const response = await fetch('https://sitebulb.com/hints/security/https-url-links-to-an-http-url/')
        const data = await response.json()
        console.log(data);
      } catch (error) {
        console.log("E:" , error);
      }
    }
    getAllUsers()

fetch('https://sitebulb.com/hints/security/https-url-links-to-an-http-url/').then((response) =>{
    return response.json
}).then((data) =>{
    console.log(data);
}).catch((error) => console.log(error))
