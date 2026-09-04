import React from 'react'

function Card(props) {

    // console.log(props)

    //   return (
    //     <div className='font-bold text-xl'>UserName is {props.username}</div>
    //   )

    return (
        <>
            <div className='text-black inline-block m-5 rounded p-2 text-center bg-gray-300 h-60 w-50'>
                <img className='h-25 w-30 rounded mb-3 mx-auto' src="{props.profileimg}" alt="" />
                <h1>{props.name}</h1>
                <h2>{props.city}, {props.age}</h2>
                <h2 className='text-blue-800 font-semibold'>{props.prof}</h2>
                <button className='bg-emerald-400 px-4 m-2 text-black rounded font-semibold'>ADD</button>
            </div>
        </>
    )
}

export default Card