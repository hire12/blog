import React from 'react'
import Blog from '@/components/Blog/Blog'
import Header from '../header/page'
import Subscribe from "@/components/Subscribe/Subscribe";
import Footer from '@/components/Footer/Footer';
import YouTubePage from '@/components/YouTube/YouTube';


export default function page() {
  return (
    <div>
        <Header />
        <Blog />

        <YouTubePage />
        <Subscribe />
        <Footer />
    </div>
  )
}
