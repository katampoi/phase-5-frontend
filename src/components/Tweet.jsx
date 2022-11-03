
import React,{useState, useEffect} from 'react'
// import * as Io from "react-icons/io"
import * as Fa from "react-icons/fa";
import TweetEdit from './TweetEdit';


function Tweet({data, id}) {
  const [dislikes, setDislikes] = useState('0')
  const [likes, setLikes] = useState('2')
  useEffect(loadLikes, [data, setLikes, setDislikes])
  const [editToggle,setEditToggle]= useState()
  


  function loadLikes() {
    fetch(`http://127.0.0.1:3000/posts/${id}`)
    .then(res => res.json())
    .then(post => {
      setDislikes(post.dislike)
      setLikes(post.like)})
    }

  function handleAddLike(){
    fetch(`http://127.0.0.1:3000/posts/${id}/like`,{
      method: "PATCH",
      headers: {
        'content-Type':'application/json'
      }
    })
    .then(res => res.json())
    .then(post => setLikes(post.like))
// const [editToggle,setEditToggle]= useState()


  function toggle(){
      setEditToggle(!editToggle)
  }

  function handleAddDislike(){
    fetch(`http://127.0.0.1:3000/posts/${id}/dislike`,{
      method: "PATCH",
      headers: {
        'content-Type':'application/json'
      }
    })
    .then(res => res.json())
    .then(post => setDislikes(post.dislike))
  }
  

  function Image({url}){
    return (
      <img className='rounded-xl  my-3 ' src={url} alt="" />
    )
  }
  function Video({url}){
    //ff
    return (
      <video height="500" controls  className='rounded-xl w-[750px] h-[400px] my-3'>
        <source src={url} type="video/mp4"/>
      
      </video>
    )
  }
  const load=(data) =>{
    if (data.media_vid) {
      return (<Video url={data.media_vid}/>)
    }else if(data.media_img){
      return (<Image url={data.media_img}/>)
    }else{
      return ``
    }
  }
  return (
    <div className=' p-3 w-full bg-white rounded-xl flex space-x-5 pr-8'>
      {/* <div>
      <Fa.FaHeart/>
      </div> */}
       
      <img src="https://media.istockphoto.com/photos/portrait-of-smiling-mixed-race-woman-looking-at-camera-picture-id1319763830?k=20&m=1319763830&s=612x612&w=0&h=ooguDiiKrPmsnN4MKQ7S1pIfddwAqXnqF7XW4MF6gM8=" alt="" className='w-[70px] h-[70px] object-cover rounded-full' />

      <div>
        <div className="userInfo flex flex-row space-x-3 pt-2 mb-3 ">
            <h2 className='text-xl font-bold'>Job Sidney</h2>
            <p className='font-light text-gray-600'>@jobsidney</p>
        </div>
        <p className=' w-full'>
        {data.content}

        </p>
        <div>{
          load(data)
        }
        </div>



        <TweetEdit data={data} toggle={editToggle} func={toggle} />
        <div className='flex flex-row justify-evenly mt-2 text-xl space-x-6 '>
            <div className='flex flex-row items-center space-x-1'>
                <Fa.FaHeart onClick={handleAddLike}/>
                <span className='text-sm'>{likes}</span>
            </div>
            <div className='flex flex-row items-center space-x-1'>
                <Fa.FaComment/>
                <span className='text-sm'>24</span>
            </div>
            <div className='flex flex-row items-center space-x-1'>
                <Fa.FaThumbsDown onClick={handleAddDislike}/>
                <span className='text-sm'>{dislikes}</span>
            </div>
            <div className='flex flex-row items-center space-x-1 '>
                <Fa.FaShare/>
            </div>
            <div className='flex flex-row items-center space-x-1'>
                <Fa.FaPencilAlt onClick={toggle} className='cursor-pointer'/>
            </div>
        </div>
        
       
        
      </div>
     
    </div>
  )
      }
}

export default Tweet