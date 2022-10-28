import React,{useState,useEffect} from 'react'

function Login({onLogin}) {
  const [formData,setData] = useState({});
  const[data,setUser]=useState('');
  //const navigate = useNavigate();
  useEffect(()=>{
    fetch('https://bookameal-backend.herokuapp.com/users')
    .then(res=>res.json())
    .then(data=>setUser(data))
   },[])
    function handleChange(event) {
    const name=event.target.name;
    const value=event.target.value;
    setData({
    ...formData,
    [name]: value,
    })
    }

    function handleSubmit(event) {
          fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
        },
          body: JSON.stringify(formData),
        })
    }
  return (
    <div className='flex flex-col  m-auto w-screen h-screen items-center justify-center'>
      <form onSubmit={()=>onLogin({
    "username": "sid",
    "email": "jovan@gmail.com",
    "first_name": "jovan",
    "last_name": "sid",
    "user_type": "student",
    "password_confirmation": "qwerty",
    "password": "qwerty"
    
})} action="" className='flex flex-col space-y-10 md:w-[450px] '>
        <input name='username' type="text" placeholder='Username' className=' border border-black p-4 rounded-md bg-[#F5F7FB] text-black' />
        <input name='password' type="password" placeholder='Password' className='border border-black p-4 rounded-md bg-[#F5F7FB] text-blac' />
        <div className='flex flex-row items-center justify-between'>
          <button type='submit' className='bg-[#3080ED] px-12 py-2 rounded-[30px] text-white font-bold'>Login</button>
          <div className='text-[#3080ED] font-bold'>Forgot password?</div>
        </div>
        <p className='font-bold text-lg text-start'>Do not have an Account? <span className='text-sm text-[#3080ED]'>Create New</span></p>
      </form>

    </div>
  )
}

export default Login
