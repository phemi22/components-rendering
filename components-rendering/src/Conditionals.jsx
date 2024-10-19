function Conditionals(props){

        if(props.loggedIn){
            return(
                <button>Logout</button>
            )
        }else{
            return(
                <button>Login</button>
            )
        }
}

export default Conditionals