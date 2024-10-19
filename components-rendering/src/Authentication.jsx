function Authentication(props){

    if(props.userType === "new user" && props.tryingToLogin){
        return(
            <h1>You are a new user. You need to sign up.</h1>
        )
    }else{
        return(
            <h1>You are an existing user with username {props.username}</h1>
        )
    }
}

Authentication.defaultprops = {
    username: "No username"
}

export default Authentication