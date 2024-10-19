import List from "./List.jsx"

function App() {
  

  return (
    <>

    {/* For Conditionals file */}
      <Conditionals 
      loggedIn = {true}
      />

      <Conditionals 
      loggedIn = {false}
      />

    {/* For Age file */}
      <Age 
      age = {24}
      />

      <Age 
      age = {42}
      />

    {/* For Authentication file*/}
      <Authentication 
      userType = "new user"
      tryingToLogin = {true}
      username 
      />

      <Authentication 
      userType = "existing user"
      tryingToLogin = {true}
      username = "Femi"
      />

      <List 
      
      />
      
    </>
  )
}

export default App
