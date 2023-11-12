"use client";
import Image from 'next/image' 
import { useDrawerContext } from 'app/context/store';
import useLocalStorage from '@/hooks/useLocalStorage'
import { useState, useEffect } from 'react';

const Hero1 = () => {


    const { open, setOpen } = useDrawerContext()
    const [value, setValue] = useLocalStorage("lang", "")
    const [lang, setLang] = useState(value)

 

    return (

        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
            {(lang === 'en') ? (
            open.map((item: any, index: any) => (
              <div key={index}>

                {item.en?.map((c: any, i: any) => (
                  <div key={i}>
                    {c.hero2?.map((a: any, j: any) => (
                      <div key={j}>
                        <h1 className='hero__title'>{a.title}</h1>
                        <p className='hero__subtitle'>{a.par}</p> 
                        <hr />
                      </div>
                    ))}
                  </div>
                ))}

              </div>
            ))
          ) : (
            open.map((item: any, index: any) => (
              <div key={index}>
                {item.ar?.map((c: any, i: any) => (
                  <div key={i}>
                    {c.hero2?.map((a: any, j: any) => (
                      <div key={j}>
                        <h1 className='hero__title'>{a.title}</h1>
                        <p className='hero__subtitle'>{a.par}</p> 
                      </div>
                    ))}
                  </div>
                ))}

              </div>
            ))
          )}  
            </div>

            <div className='hero__image-container'>
                <div className="hero__image">
                    <Image src="/hero3.png" sizes="100vw" alt="hero" fill className='object-contain' />

                </div> 
            </div>

        </div>
    )
}

export default Hero1