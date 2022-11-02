import React,{useState} from 'react'
import * as Fa from "react-icons/fa";

function TweetEdit({data,toggle,func}) {
    const [formDataa,setData] =useState()
    const [content,setContent] = useState()

    function handleChange(event) {
        const name=event.target.name;
        const value=event.target.value;
        setData({
        ...formDataa,
        // user_id:2,
        // media_vid: data.media_vid,
        // category_id: data.category_id,
        // media_img: data.media_img,
        [name]: value,
        })
        }
        function handleSubmit(event){
        
            fetch(`http://localhost:3000/posts/${data.id}`, {
                method: "PATCH",
                headers: {
                  "content-Type": "application/json",
              },
                body: JSON.stringify(formDataa),
              }).then(res=>res.json()).then(data=>{
                console.log(data);
              })
              console.log(formDataa);
              
              }
  return (
    <div className={toggle ? 'editOn' :' editHidden'}>
        <div>
        <div className="userInfo flex flex-row space-x-3 pt-2 mb-3 ">
            <h2 className='text-xl font-bold'>Edit-Post</h2>
            <p className='font-light text-gray-600 underline'>Make changes below and repost</p>
        </div>
        <form onSubmit={handleSubmit}>
            <input name='title' type="text" onChange={handleChange} placeholder='Title' className='w-full  bg-transparent text-md border-b text-gray-500 px-3 outline-none' />
            <textArea name='content' onChange={handleChange} rows="4" placeholder='Type your new content. . . . .' className='border-b w-full  bg-transparent text-md text-gray-500 p-3 outline-none' />
            <button type='submit' className='flex items-center text-[#12A5D7]'><Fa.FaTelegramPlane  className=' text-4xl cursor-pointer  '/>update</button>
        </form>
        </div>
      </div>
  )
}

export default TweetEdit
