class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`);
    }

    // static creatId(){
    //     return `123`
    // }
}

const eha = new User("eha")
// console.log(eha.creatId());

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email;

    }
}

const iphone = new Teacher("iphone", "iphoem@yhugud")
console.log(iphone.creatId())