import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'


function Login({onLogin, }) {

const [action,setAction] = useState(true);
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setErrors] = useState([""]);
const [isLoading, setIsLoading] = useState(false);
const navigate=useNavigate();

function handleAction(){
  setAction(!action)
}

function handleSubmit(e){
  e.preventDefault();
  setIsLoading(true);
  fetch("http://127.0.0.1:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  }).then((r) => {
    setIsLoading(false);
    if (r.ok) {
      r.json().then((user) => onLogin(user))
      navigate('/Landing')
      alert('Login Successfull !...')
    } else {
      r.json().then((err) => setErrors(err.errors));
    }
  });
}
  
  return (
    <div className='flex flex-col  m-auto w-screen h-screen items-center justify-center'>

      <form onSubmit={handleSubmit} action="" className='flex flex-col space-y-10 md:w-[450px] '>
        <input name='username' type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} required className=' border border-black p-4 rounded-md bg-[#F5F7FB] text-black' />
        <input name='password' type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} required className='border border-black p-4 rounded-md bg-[#F5F7FB] text-blac' />

        <div className='flex flex-row items-center justify-between'>
        <button type='submit' className='bg-[#3080ED] px-12 py-2 rounded-[30px] text-white font-bold'   >{action?'Login' :'Delete'}</button>
          <div className='text-[#3080ED] font-bold'>Forgot password?</div>
        </div>
        <p className='font-bold text-lg text-start'>Do not have an Account? <span className='text-sm text-[#3080ED]'>Create New</span></p>
      </form>

    </div>
  )
}
export default Login
