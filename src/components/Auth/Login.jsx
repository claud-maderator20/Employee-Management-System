import React, { useState } from 'react'

const Login = ({handleLogin}) => {



  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e)=>{
    e.preventDefault();
    handleLogin(email,password);
    setEmail("");
    setPassword("");
  }


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form onSubmit={(e)=>{
                submitHandler(e);
            }}
             className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
                required 
                className=' text-white font-medium outline-none bg-transparent border-2 border-emerald-600 px-6 py-2 text-lg rounded-full placeholder:text-gray-400' type="email"  placeholder='Enter your Email' />
                <input
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value);
                }}
                 required 
                 className=' text-white font-medium outline-none bg-transparent border-2 border-emerald-600 px-6 py-2 text-lg rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter your password' />
                <button  className=' mt-7 text-white font-semibold outline-none border-none hover:bg-emerald-700 bg-emerald-600 px-8 py-2 text-lg rounded-full w-full placeholder:text-white'>Log In</button>
            </form>
      </div>
    </div>
  )
}

export default Login
