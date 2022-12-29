class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login() {
        console.log(this.email, 'just logged in');
        return this;
    }
    logout() {
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore() {
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}

class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => {
            return u.email != user.email
        })
    }
}

let userOne = new User('joey@gmail.com', 'Joey');
let userTwo = new User('bob@gmail.com', 'Bob');
let admin = new Admin('troy@gmail.com', 'Troy');

userOne.login().updateScore().updateScore().logout();

let users = [userOne, userTwo, admin];

admin.deleteUser(userTwo);

// the 'new' keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constructor method

// utilizing 'return this;'
// we now have the ability to chain methods such as 'userOne.login().updateScore().logout();'

// now that there is an Admin class that is extended from User
// only Admins are allowed to use .deleteUser()