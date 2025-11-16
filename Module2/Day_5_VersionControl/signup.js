let users=["alice","shreya","vijay","sam"];

function signup(userName) {
    if(users.includes(userName)){
        return "User Already Registered, Please Login";
    } else {
        users.push(userName);
        return "Signup Successful, Please Login";
    }
}
console.log(signup("sam"));

function login(userName, password) {
    if (!users.includes(userName)) {
        return "User Not Found, Please Signup";
    } else if (password === "Emp@123") {
        return "Login Succesful...";
    } else {
        return "Wrong Password...";
    }
}