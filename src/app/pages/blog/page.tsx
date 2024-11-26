import React from 'react'
import Blog from '@/components/Blog/Blog'
import Header from '../header/page'
import Subscribe from "@/components/Subscribe/Subscribe";
import Footer from '@/components/Footer/Footer';


export default function page() {
  return (
    <div>
        <Header />
        <Blog />
        <Subscribe />
        <Footer />
    </div>
  )
}
