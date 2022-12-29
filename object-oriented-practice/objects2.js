function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function() {
        console.log(this.email, 'has logged in');
    }
}

User.prototype.login = function() {
    this.online = true;
    console.log(this.email, 'has logged in');
}

User.prototype.logout = function() {
    this.online = false;
    console.log(this.email, 'has logged out');
}

function Admin(...args) {
    User.apply(this, args);
    this.role = 'super admin';
}

admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(u) {
    users = users.filter(user => {
        return user.email != u.email;
    });
};

let userOne = new User('joey@gmail.com', 'Joey');
let userTwo = new User('bob@gmail.com', 'Bob');
let admin = new Admin('troy@gmail.com', 'Troy');

let users = [userOne, userTwo, admin];

userTwo.login();