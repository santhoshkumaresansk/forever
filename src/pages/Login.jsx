import React, { useState } from 'react';
import Title from '../components/Title';

const Login = () => {
  const [useremail,setuseremail] =useState('')
  const [userpass,seruserpass] =useState('')
  const [pagestate,setpagestate] = useState('login')
  const handlemail =(event) =>{
    setuseremail(event.target.value)
  }
  const handlepass =(event)=>{
    seruserpass(event.target.valur)
  }
  const pd =(e)=>{
    e.preventDefault()
  }
  return (
    <form onSubmit={pd}  action="">
    <div className='w-40% gap-4 flex flex-col justify-center items-center'>
      {
        pagestate=='login'?<Title text1={'Login'} text2={'Here'} />:<Title text1={'Signup'} text2={'Here'} />
      }
      {
        pagestate == 'signup' ?<input className='border w-1/2 md:w-1/4 p-2' type="text" placeholder='enter your name' required  />:''
      }
        
        <input className='border w-1/2 md:w-1/4 p-2' placeholder='enter your email' required type="email" onChange={handlemail} value={useremail} />
        <input type="text" className='border w-1/2 md:w-1/4 p-2' required placeholder='enter your password' onChange={handlepass} value={userpass} />
        {
          pagestate == 'login' ?  <div className='md:w-1/4 w-1/2 flex justify-between'>
        
          <p className='cursor-pointer'>Forget Password ?</p>
          <p className='cursor-pointer' onClick={()=>setpagestate('signup')}>Create account</p>
        </div> :  <div className='md:w-1/4 w-1/2 flex justify-between'>
        
        <p className='cursor-pointer' onClick={()=>setpagestate('login')}>Already have account ?</p>
        <p className='cursor-pointer'></p>
      </div>
        }
      
        <div>

          <button className='bg-green-950 p-2 w-25 text-white cursor-pointer'>{pagestate=='login'?'SignIn':'SignUp'}</button>
        </div>
    </div>
    </form>
  );
}

export default Login;
