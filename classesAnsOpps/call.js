function SetUserName(userName){
    //complex DB calls
    this.userName = userName
}

function creatUser(userName,email,password){
   SetUserName.call(this,userName)

    this.email = email
    this.password= password
}

const chai = new creatUser("chai","chai@google","123")
console.log(chai);