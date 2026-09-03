import React, { useState } from 'react'

const App = () => {

  // let a = 1;
  // let User = "Nitish"

  const print = ()=>{
    console.log("Hello")
  }

  const [a, setA] = useState(10)
  const changeNum = ()=>{
    setA(20)
  }

  const [user, setuser] = useState("Nitish")
  const changeUser = ()=>{
    setuser("Change ho gya")
  }

  return (
    <div>
      <h2>Hello From React User: {user}, {a}</h2>
      {/* <button onClick={print}>Click Me</button> */}
      {/* <button onClick={changeNum}>Click Me</button> */}
      <button onClick={changeUser}>Click Me</button>
    </div>
  )
}

export default App