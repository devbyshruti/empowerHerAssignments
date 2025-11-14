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
