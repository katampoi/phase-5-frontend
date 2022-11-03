import React,{useState,useEffect} from 'react'
import NavBar from '../components/NavBar'
import * as Io from "react-icons/io"
import * as Fa from "react-icons/fa";
import ShareContent from '../components/ShareContent';
import Tweet from '../components/Tweet';
import CategoryCard from '../components/CategoryCard';
import TrendingCard from '../components/TrendingCard';
import LandingImage from '../components/LandingImage';
import UserCard from '../components/UserCard';
// import TweetEdit from '../components/TweetEdit';
function LandingPage({user}) {
  const classUser='min-h-[70vh] h-fit bg-[#e3ebfa] rounded-xl flex flex-col justify-between py-10';
  const classNoUser='h-[90vh]  bg-[#e3ebfa] rounded-xl flex flex-col justify-between py-10';
const [category,setCateg]=useState([])
const [tweete,setTweets]=useState([])

//  function categ({categ}){
//      categ.map(data=>(
//       <CategoryCard data={data}/>)
//     )
  
// }
// const data2=[
//   {
//     "user_id":1,
//     "title": 'ruby',
//     "category_id": 2,
//     "media_img":"https://res.cloudinary.com/dfd8vbjzj/image/upload/v1667126462/cld-sample-4.jpg",
//     "media_vid":null,
//     "content":"a single distinct meaningful element of speech or writing, used with others (or sometimes alone) to form a sentence and typically shown with a space on either side when written or printed. I don't like the word ‘unofficial’ sentence and typically shown with a space on either side when written or printed"
//   },
//   {
//     "user_id":1,
//     "title": 'ruby',
//     "category_id": 2,
//     "media_img":null,
//     "media_vid":"https://res.cloudinary.com/dfd8vbjzj/video/upload/v1667284501/1666489114898_db8bv6.mp4",
//     "content":"a little funny for you this week"
//   },{
//     "user_id":1,
//     "title": 'intern',
//     "category_id": 2,
//     "media_img":"https://res.cloudinary.com/dfd8vbjzj/image/upload/v1667126461/cld-sample.jpg",
//     "media_vid":null,
//     "content":"Pets day around"
//   },
//   {
//     "user_id":1,
//     "title": 'intern',
//     "category_id": 2,
//     "media_img":null,
//     "media_vid":"https://res.cloudinary.com/dfd8vbjzj/video/upload/v1667285345/1667217320615_h5ypsu.mp4",
//     "content":"get internship in this company"
//   },
//   {
//     "user_id":1,
//     "title": 'intern',
//     "category_id": 2,
//     "media_img":null,
//     "media_vid":null,
//     "content":"get internship in this company"
//   }
// ]
useEffect(()=>{
  fetch("http://localhost:3000/posts")
  .then(res=>res.json())
  .then(data=>setTweets(data))
},[])
   const categ = async () =>{
     const result = await fetch ('http://127.0.0.1:3000/categories')
     const jsonResult = result.json();
     setCateg(jsonResult);
   }
//  let categ=fetch("http://localhost:3000/categories").then(res=>res.json()).then(data=>data)

  function ListItem({word,path,icon}){
    
    return(
      <li onClick={path} className='cursor-pointer flex flex-row space-x-3 text-[1.3rem] text-gray-700 font-semibold  w-full px-4 py-2 rounded-lg hover:bg-[#E84F14] hover:text-white'>
        {icon} <div>{word}</div>
      </li>
    )
  }
  return (
    <div className='mx-3'>
      <NavBar user={user}/>
      <section id="body" className='grid grid-cols-[440px,840px,440px] justify-center gap-8 mt-4 '>
        
        <section className='space-y-4'>
          {user ? <UserCard user={user}/> : ''}
          <section id="leftBar" className={user ? classUser : classNoUser }>
            <ul className='px-10  space-y-2'>
              <ListItem word={'Home'} icon={<Io.IoIosHome  size={24}/>}/>
              <ListItem word={'Subscribe'} icon={<Fa.FaList size={24}/>}/>
            </ul>
            
            <div className=' text-gray-700 text-[1.2rem]  px-10'>
              <p>
              Join Us to have more fun. Create an account,subscribe to gain access to more fun content. 
              </p>

            </div>

          </section>
        </section>
        <section id='middle' className=' h-[90vh] space-y-4 '>
          {user ? <ShareContent user={user}/> : <LandingImage/>}

          <section className="tweets bg-[#e3ebfa] h-[70vh] rounded-xl p-10 px-14 space-y-6 scrollbar ">

          {
            tweete.map(tweet=><Tweet data={tweet}/>)
            
          }
            

          </section>

        </section>
        <section id="leftBar" className=' h-[90vh] bg-[#e3ebfa] rounded-xl px-10 py-5 space-y-5'>
          <div>
            <div className='flex flex-row items-end justify-between'>
              <h1 className='font-bold text-2xl text-[#FA510F]'>Top Category</h1>
              <h2 className='font-semibold underline text-[#101F3C] '>See All.</h2>
            </div>
            <div className='mt-4 space-y-4'>
          <CategoryCard data={{category_name:"React"}}/>
          <CategoryCard data={{category_name:"Ruby"}}/>
          <CategoryCard data={{category_name:"DevOps"}}/>
          <CategoryCard data={{category_name:"Data science"}}/>

            </div>
          </div>
          {/* Trending */}
          <div>
            <div className='flex flex-row items-end justify-between'>
              <h1 className='font-bold text-xl text-[#FA510F]'>Trending</h1>
            </div>
            <TrendingCard word={'a single distinct meaningful element of speech or writing, '}/>
            <TrendingCard word={'Moringa the school'}/>
            <TrendingCard word={'Get ready market jobs in big tech compnanies partnering with moringa'}/>
          </div>
          
        </section>
      </section>
    </div>
  )
}

export default LandingPage