import React from 'react'
import NavBar from '../components/NavBar'
import * as Io from "react-icons/io"
import * as Fa from "react-icons/fa";
import ShareContent from '../components/ShareContent';
import Tweet from '../components/Tweet';
function LandingPage() {

  function ListItem({word,path,icon}){
    return(
      <li onClick={path} className='cursor-pointer flex flex-row space-x-3 text-[1.3rem] text-gray-700 font-semibold  w-full px-4 py-2 rounded-lg hover:bg-[#3080ED] hover:text-white'>
        {icon} <div>{word}</div>
      </li>
    )
  }
  return (
    <div className='mx-3'>
      <NavBar/>
      <section id="body" className='grid grid-cols-[440px,940px,440px] justify-between gap-3 mt-4 '>
        <section id="leftBar" className='h-[90vh] bg-[#e3ebfa] rounded-xl flex flex-col justify-between py-10'>
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
        <section id='middle' className=' h-[90vh] space-y-4'>
          <ShareContent/>

          <section className="tweets bg-[#e3ebfa] h-[70vh] rounded-xl ">
          <Tweet/>
          </section>

        </section>
        <section id="leftBar" className=' h-[90vh] bg-[#e3ebfa] rounded-xl '>
          
        </section>
      </section>
    </div>
  )
}

export default LandingPage
