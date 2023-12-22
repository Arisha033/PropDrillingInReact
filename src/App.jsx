import { useState } from 'react'
import { ReactDOM } from 'react'

// below process is known as prop drilling, we are passing state as prop from top component to bottom components till the component which actually need props comes.
// the following method is complicated and time consuming hence we use CONTEXT API to overcome this approach.
function App() {

  return (
    <>
      <Component1 />
    </>
  )
}

function Component1(){
  const [user, setUser] = useState("Alex Smith")

  return(
    <>
    <h1>{`Hello ${user}!`}</h1>
    <Component2 user={user} />
    </>
  )
}

function Component2({user}){

  return(
    <>
    <h1>This is component2.</h1>
    <Component3 user={user}/>
    </>
  )
}

function Component3({user}){

  return(
    <>
    <h1>This is component3.</h1>
    <Component4 user={user}/>
    </>
  )
}

function Component4({user}){

  return(
    <>
    <h1>This is component4.</h1>
    <Component5 user={user} />
    </>
  )
}

function Component5({user}){

  return(
    <>
    <h1>{`Hello ${user} from component5.`}</h1>
    </>
  )
}

export default App
