import React from 'react'
import NavBar from '../components/NavBar'
import * as Io from "react-icons/io"
import * as Fa from "react-icons/fa";
import ShareContent from '../components/ShareContent';
import Tweet from '../components/Tweet';
import CategoryCard from '../components/CategoryCard';
import TrendingCard from '../components/TrendingCard';
import LandingImage from '../components/LandingImage';
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
      <section id="body" className='grid grid-cols-[440px,840px,440px] justify-center gap-8 mt-4 '>
        
        <section className='space-y-4'>
          <div className=' h-44 rounded-xl bg-[#e3ebfa]'>

          </div>
          <section id="leftBar" className='min-h-[70vh] h-fit bg-[#e3ebfa] rounded-xl flex flex-col justify-between py-10'>
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
        <section id='middle' className=' h-[90vh] space-y-4'>
          <ShareContent/>

          <section className="tweets bg-[#e3ebfa] h-[70vh] rounded-xl p-10 px-14 space-y-6 scrollbar ">
          <Tweet/>
          <Tweet/>
          <Tweet/>
          <Tweet/>
          <Tweet/>
          </section>

        </section>
        <section id="leftBar" className=' h-[90vh] bg-[#e3ebfa] rounded-xl px-10 py-5 space-y-5'>
          <div>
            <div className='flex flex-row items-end justify-between'>
              <h1 className='font-bold text-2xl'>Top Category</h1>
              <h2 className='font-semibold underline text-[#3080ED] '>See All.</h2>
            </div>
            <div className='mt-4 space-y-4'>
              <CategoryCard/>
              <CategoryCard/>
              <CategoryCard/>
              <CategoryCard/>
            </div>
          </div>

          {/* Trending */}
          <div>
            <div className='flex flex-row items-end justify-between'>
              <h1 className='font-bold text-xl'>Trending</h1>
            </div>
            <TrendingCard/>
            <TrendingCard/>
            <TrendingCard/>
          </div>
          
        </section>
      </section>
    </div>
  )
}

export default LandingPage
