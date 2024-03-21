const user = {
    userName : "Utkarsh",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function()
    {
        console.log(this);
    }
}

console.log(user.getUserDetails());



function User(username, logincount, isLoggedIn)
{
    this.username = username;
    this.logincount = logincount;
    this.isLoggedIn= isLoggedIn;

    return this
}


const UserOne =new User("John Doe",10 ,true );

console.log(UserOne);