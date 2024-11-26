import React from 'react'
import Header from '../header/page'
import Footer from '@/components/Footer/Footer'
import Subscribe from '@/components/Subscribe/Subscribe'
import YouTubePage from '@/components/YouTube/YouTube'

export default function page() {
  return (
    <div>
      <Header />
      <Subscribe />
      <Footer />
      <YouTubePage />
    </div>
  )
}
