"use client" 
import Body from '@/components/Body';  
import AutoCarousel from '@/components/AutoCarousel';
import Review from '@/components/Review';
import Rate from '@/components/Rate';
import 'swiper/css'; 
  
 


export default  function Home() {
 

  return (
    <main  className="overflow-hidden"> 
      <Body/>
      <AutoCarousel />
      <Review />
      <Rate />
    </main>
  )
}


