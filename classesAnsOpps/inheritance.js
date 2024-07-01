class User {
    constructor(username){
        this.username =username;
    }
    logMe(){
        console.log(`username is${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email;
        this.password =password;
    }

    addCources(){
        console.log(`new corse added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chia@jkhd", "54554")
chai.logMe()

const masalachai = new User("masalachai")
masalachai.logMe()

