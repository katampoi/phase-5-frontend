import React from 'react'
import useState from 'react'



function Login({ onLogin, error }){

const [action,setAction] = useState(true);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [errors, setErrors] = useState([]);
const [isLoading, setIsLoading] = useState(false);



function handleAction(){
  setAction(!action)
}
function submitHandler(e){
  e.preventDefault();
  setIsLoading(true);
  fetch("", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((r) => {
    setIsLoading(false);
    if (r.ok) {
      r.json().then((user) => onLogin(user))
      // navigate('/LandingPage')
      alert('Login Successfull !...')
    } else {
      r.json().then((err) => setErrors(err.errors));
    }
  });




  return (
    <div className='flex flex-col  m-auto w-screen h-screen items-center justify-center'>

      <form action="" className='flex flex-col space-y-10 md:w-[450px] '>
        <input type="email" placeholder='Email' className=' border border-black p-4 rounded-md bg-[#F5F7FB] text-black' onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder='Password' className='border border-black p-4 rounded-md bg-[#F5F7FB] text-blac' onChange={(e) => setPassword(e.target.value)} required/>
        <div className='flex flex-row items-center justify-between'>
          <button type='submit' className='bg-[#3080ED] px-12 py-2 rounded-[30px] text-white font-bold'   >Login</button>
          <button type='submit' classNameName='log' id='logIn'>{action?'Login' :'Delete'}</button>
          <div className='text-[#3080ED] font-bold'>Forgot password?</div>
        </div>
        <p className='font-bold text-lg text-start'>Do not have an Account? <span className='text-sm text-[#3080ED]'>Create New</span></p>
      </form>

    </div>
  )
}
}
export default Login
