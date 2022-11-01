import React,{useState} from 'react'
// import * as Io from "react-icons/io"
import * as Fa from "react-icons/fa";
// import Axios from 'axios'
function ShareContent({user}) {
    const [formDataa,setData] =useState()
    const [mediaOn,setMediaOn] = useState(false)
    const [mediaVidOn,setMediaVidOn] = useState(false)
    function handleChange(event) {
        const name=event.target.name;
        const value=event.target.value;
        setData({
        ...formDataa,
        user_id:user.id,
        [name]: value,
        })
        }

        function handleToggle(){
            setMediaOn(!mediaOn)
        }
        function handleToggle2(){
            setMediaVidOn(!mediaVidOn)
        }
    function uploadFile(files){
        const formData=new FormData()
        formData.append("file",files[0])
        formData.append("upload_preset","sidneyjobdata")
        formData.append("cloud_name", "dfd8vbjzj")
        fetch("https://api.cloudinary.com/v1_1/dfd8vbjzj/image/upload",{
            method: "POST",
            body: formData
        }).then(res=>res.json()).then(data=>{
            setData({...formDataa,media_img:data.url})
            // console.log(formDataa);
        })   
    }
    function handleSubmit(event){
        event.preventDefault()
        fetch("https://localhost3000/posts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
          },
            body: JSON.stringify(formDataa),
          }).then(res=>res.json()).then(data=>console.log(data))
        //   console.log(formDataa);
          }
  return (
    <div className='w-full  h-44  bg-[#e3ebfa] rounded-xl pb-3'>
        <form onSubmit={handleSubmit}  className='p-2 px-5'>
            <div className='flex space-x-5'>
            <input type="text" placeholder='Title' onChange={handleChange} name='title' className='border w-[200px] px-2 bg-transparent border-b-gray-400 outline-none' />
            <div className=' text-gray-500'>
                Category:
            <select name="category" onChange={handleChange}  className=' w-16 text-center outline-none bg-transparent border border-none'>
                <option className='' value="Fun">Fun</option>
                <option value="Fun">Ruby</option>
                <option value="Fun">React</option>
            </select>
            </div></div>
            <textArea name='content' onChange={handleChange} rows="1" placeholder='Type your content. . . . .' className='w-full  bg-transparent text-md text-gray-500 p-3 outline-none' />
            <div className='flex flex-row'>
                <input className={mediaOn ? "on" :'off'} type="file"  onChange={(event)=>{
                    uploadFile(event.target.files)
                }} />
                <input className={mediaVidOn ? "on" :'off'} type="file" onChange={(event)=>{
                    uploadFile(event.target.files)
                }} />
            </div>
        
        <div className='mx-5 flex flex-row justify-between'>
            <div className='flex flex-row space-x-3'>
                <div className='border h-fit border-gray-500 rounded-full p-2'>
                    <Fa.FaRegImages onClick={handleToggle} className=' text-xl  text-gray-600 cursor-pointer'/>
                </div>
                <div className='border h-fit border-gray-500 rounded-full p-2'>
                    <Fa.FaVideo onClick={handleToggle2}  className=' text-xl text-gray-600 cursor-pointer'/>
                </div>
            </div>
            <button className='border-gray-500 ' type='submit'><Fa.FaTelegramPlane  className=' text-4xl cursor-pointer text-[#3080ED]'/></button>  
        </div>
        </form>
      
    </div>
  )
}

export default ShareContent;
