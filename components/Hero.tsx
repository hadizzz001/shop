"use client";
import Image from 'next/image'
import CustomButton from './CustomButton'
import { useRouter } from 'next/navigation'
import { useDrawerContext } from 'app/context/store';
import useLocalStorage from '@/hooks/useLocalStorage'
import { useState, useEffect } from 'react';

const Hero = () => {


  const router = useRouter();
  const handleScroll = () => {
    router.push('/blog/view');
  }

  const { open, setOpen } = useDrawerContext()
  const [value, setValue] = useLocalStorage("lang", "")
  const [lang, setLang] = useState(value)

  return (

     <div>
      
     </div>
  )
}

export default Hero