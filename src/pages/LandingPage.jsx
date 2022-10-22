import React from 'react'
import NavBar from '../components/NavBar'

function LandingPage() {
  return (
    <div className=''>
      <NavBar/>
      <section id="body" className='grid grid-cols-[440px,940px,440px] justify-between gap-3 mt-4'>
        <section id="leftBar" className='w-[440px] h-[90vh] bg-red-900'>

        </section>
        <section id='middle' className='bg-blue-900 '>

        </section>
        <section id="leftBar" className=' h-[90vh] bg-red-900 '>

        </section>
      </section>
    </div>
  )
}

export default LandingPage
