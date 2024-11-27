import React from 'react'
import Header from '../header/page'
import Footer from '@/components/Footer/Footer'
import Subscribe from '@/components/Subscribe/Subscribe'
import YouTubePage from '@/components/YouTube/YouTube'
import Contact from '@/components/contact/Contact'
import GetInTouch from '@/components/contact/GetinTouch'


export default function page() {
  return (
    <div>
      <Header />
      <GetInTouch />
      <Contact />
      {/* <YouTubePage /> */}
      <Subscribe />
      <Footer />
    </div>
  )
}
