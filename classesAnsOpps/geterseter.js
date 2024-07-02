class User {
    constructor(email,password){
        this.email = email
        this.password=password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return this._password.toUpperCase()
    } 
    set password(value){
        this._password = value
    }
}

const ehatasham = new User("ehatasham@gcom","2jb1gc3")
console.log(ehatasham.password);
console.log(ehatasham.email);