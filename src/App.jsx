import React, { useState } from 'react'

const App = () => {

  // let a = 1;
  // let User = "Nitish"

  // const print = ()=>{
  //   console.log("Hello")
  // }

  // useState HOOK----->>>
  // const [a, setA] = useState(10)
  // const changeNum = ()=>{
  //   setA(20)
  // }

  // const [user, setuser] = useState("Nitish")
  // const changeUser = ()=>{
  //   setuser("Change ho gya")
  // }

  // return (
  //   <div>
  //     <h2>Hello From React User: {user}, {a}</h2>
  //     {/* <button onClick={print}>Click Me</button> */}
  //     {/* <button onClick={changeNum}>Click Me</button> */}
  //     <button onClick={changeUser}>Click Me</button>
  //   </div>
  // )

  // const [a, setA] = useState(0);

  // const increment = ()=>{
  //   setA(a+10)
  // }

  // return (
  //   <div>
  //     <h3>Number is: {a}</h3>
  //     <button onClick={increment}>Increment</button>
  //     <button onClick={()=>setA(a-10)}>Decrement</button>
  //   </div>
  // )

  // return (
  //   <div>
  //     <h1 className='bg-pink-700 text-xl'>Jai Mata Di</h1>
  //     <h2>Hello Guysss</h2>
  //   </div>
  // )

  
  // //FORM HANDLING--->>>
  // const [userName, setuserName] = useState('')

  // const submitHandler = (e)=>{
  //   e.preventDefault()

  //   console.log(userName)
  //   console.log("Submitted")

  //   setuserName('')
  // }

  // return (
  //   <div>
  //     <form onSubmit={(e)=>{
  //       submitHandler(e)
  //     }}>
  //       <input 
  //       value={userName}
  //       onChange={(e)=>{
  //         setuserName(e.target.value)
  //       }}
  //       className="px-2 py-4 m-4 font-semibold bg-blue-50 rounded text-black" type="text" placeholder='Enter Your Name'/>
  //       <button className='px-2 py-2 text-xl font-bold bg-emerald-400 rounded flex m-4 text-black'>Submit</button>
  //     </form>
  //   </div>
  // )

}

export default App