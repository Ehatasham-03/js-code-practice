const User = {
    _email: 'ahdh@ytwfdg',
    _password: "gdyud",

    get email(){
return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}
const chai = Object.create(User)
console.log(chai.email);