import React,{useState,useEffect} from 'react'
import * as Io from "react-icons/io"
import * as Fa from "react-icons/fa";
import Axios from 'axios'
function ShareContent({user}) {
    const [formDataa,setData] =useState()
    function handleChange(event) {
        const name=event.target.name;
        const value=event.target.value;
        setData({
        ...formDataa,
        [name]: value,
        })
        }

    function uploadFile(files){
        const formData=new FormData()
        formData.append("file",files[0])
        formData.append("upload_preset","sidneyjobdata")
        formData.append("cloud_name", "dfd8vbjzj")
        fetch("https://api.cloudinary.com/v1_1/dfd8vbjzj/image/upload",{
            method: "POST",
            body: formData
        }).then(res=>res.json()).then(data=>console.log(data))

        
    }
  return (
    <div className='w-full  h-44  bg-[#e3ebfa] rounded-xl pb-3'>
        <form >
            <textArea rows="2" placeholder='Share your content. . . . .' className='w-full h-full bg-transparent text-xl text-gray-500 p-5 outline-none' />
            <input type="file" onChange={(event)=>{
                uploadFile(event.target.files)
            }} />
        </form>
        <div className='mx-5 flex flex-row justify-between'>
            <div className='flex flex-row space-x-3'>
                <div className='border h-fit border-gray-500 rounded-full p-2'>
                    <Fa.FaPlus className=' text-xl  text-gray-600 cursor-pointer'/>
                </div>
                <div className='border h-fit border-gray-500 rounded-full p-2'>
                    <Fa.FaRegImages className=' text-xl text-gray-600 cursor-pointer'/>
                </div>
            </div>
            <div className=' border-gray-500  p-2'>
            <Fa.FaTelegramPlane className=' text-4xl cursor-pointer text-[#3080ED]'/>
            </div>
        </div>
      
    </div>
  )
}

export default ShareContent
