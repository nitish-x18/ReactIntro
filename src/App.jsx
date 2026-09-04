import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Header from './components/Header'

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

  //FRAGMENTS--->>>
  // return (
  //   <>
  //     <h1>1</h1>
  //     <h2>2</h2>
  //     <h3>3</h3>
  //     <h6>inside the fragment we return multiple tags</h6>
  //   </>
  // )

  //COMPONENTS--->>>
  // return (
  //   <>
  //     <Navbar />
  //     <Footer />
  //   </>
  // )

  // const name = "Nitish"

  // return (
  //   <>
  //     <Card username={name}/>
  //     <Card username='harsh'/>
  //   </>
  // )

  //   const users = [
  //   {
  //     "name": "Rahul Sharma",
  //     "age": 24,
  //     "city": "Chandigarh",
  //     "profileimage": "https://i.pravatar.cc/150?img=12",
  //     "profession": "Software Developer"
  //   },
  //   {
  //     "name": "Priya Singh",
  //     "age": 22,
  //     "city": "Delhi",
  //     "profileimage": "https://i.pravatar.cc/150?img=47",
  //     "profession": "UI/UX Designer"
  //   },
  //   {
  //     "name": "Arjun Verma",
  //     "age": 27,
  //     "city": "Mumbai",
  //     "profileimage": "https://i.pravatar.cc/150?img=11",
  //     "profession": "Backend Developer"
  //   },
  //   {
  //     "name": "Sneha Kapoor",
  //     "age": 25,
  //     "city": "Bangalore",
  //     "profileimage": "https://i.pravatar.cc/150?img=44",
  //     "profession": "Product Manager"
  //   },
  //   {
  //     "name": "Vikash Kumar",
  //     "age": 23,
  //     "city": "Pune",
  //     "profileimage": "https://i.pravatar.cc/150?img=33",
  //     "profession": "Frontend Developer"
  //   }
  // ]

  //   return(
  //     <>
  //       <div className='p-10'>
  //         {users.map(function(elem, ind){
  //           return <Card key={ind} name={elem.name} age={elem.age} city={elem.city} profileimg={elem.profileimage} prof={elem.profession}/>
  //         })}
  //       </div>
  //     </>
  //   )

  // // DATA HANDLING USING API--->>>
  // const [data, setData] = useState([])

  // const getData = async function(){
  //   const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=100")
  //   // console.log(response)
  //   setData(response.data)
  //   console.log(data)
  // }

  // //show data without using onClick event-->>
  // // useEffect(() => {
  // //   getData()
  // // }, [])
  

  // return (
  //   <>
  //     <div className='m-8'>
  //       <button onClick={getData}className='bg-emerald-950 text-white rounded px-5 py-3 active:scale-90'>Get Data</button>
  //       <div className='p-8 bg-gray-950 mt-2'>
  //         {data.map( (elem, idx)=>{
  //           return <div key={idx}className='bg-gray-300 flex justify-between items-center p-2 rounded m-2'>
  //             <img className='h-30'src="{elem.download_url}" alt="" />
  //             <h1 className='text-black'>{elem.author}</h1>
  //           </div>
  //         })}
  //       </div>
  //     </div>
  //   </>
  // )

  //REACT ROUTER DOM--->>>
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </div>
  )

}

export default App