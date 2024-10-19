function Age(props){

        if(props.Age >= 30){

            return(
                <h1 className="yes">You can buy the house.</h1>
            )
        }else{
            return(
                <h1 className="no">You can only rent the house.</h1>
            )
        }
}

export default Age