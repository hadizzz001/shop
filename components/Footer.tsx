'use client'
import { footerLinksAr, footerLinksEn } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { useDrawerContext } from 'app/context/store'
import useLocalStorage from '@/hooks/useLocalStorage'
import { useState, useEffect } from 'react'

const Footer = () => {
  const { open, setOpen } = useDrawerContext()
  const [value, setValue] = useLocalStorage("lang", "")
  const [lang, setLang] = useState(value)
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
        <div className='flex flex-col justify-start items-start gap-6'>
          <Image src="https://res.cloudinary.com/dixtwo21g/image/upload/v1696414180/new%20items/wix7gyjekmhxln5ywjiv.png" alt='logo' width={118} height={18} className='object-contain' />
          {
          // (lang === 'en') ? (
            open.map((item: any, index: any) => (
              <div key={index}>

                {item.en?.map((c: any, i: any) => (
                  <div key={i}>
                    {c.footer?.map((a: any, j: any) => (
                      <div key={j}>
                        <p className='text-base text-gray-700'>Triple Win Solution <br />{a.par}</p> 
                      </div>
                    ))}
                  </div>
                ))} 
              </div>
            ))
          // ) : (
          //   open.map((item: any, index: any) => (
          //     <div key={index}>
          //       {item.ar?.map((c: any, i: any) => (
          //         <div key={i}>
          //           {c.footer?.map((a: any, j: any) => (
          //             <div key={j}>
          //               <p className='text-base text-gray-700'>Triple Win Solution <br />{a.par}</p> 
          //             </div>
          //           ))}
          //         </div>
          //       ))}
          //     </div>
          //   ))
          // )
          }
        </div>

        {
        // (lang === 'en') ? (
        <div className='footer__links'>
        
          {footerLinksEn.map((link:any) => (
            <div key={link.title} className='footer__link'>
              <h3 className='font-bold'>{link.title}</h3>
              {link.links.map((item:any) => (
                <Link key={item.title} href={item.url} target='_blank' className='text-gray-500'>
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        
        </div>
        // ): (
        //   <div className='footer__links'>
        
        //   {footerLinksAr.map((link:any) => (
        //     <div key={link.title} className='footer__link'>
        //       <h3 className='font-bold'>{link.title}</h3>
        //       {link.links.map((item:any) => (
        //         <Link key={item.title} href={item.url} className='text-gray-500'>
        //           {item.title}
        //         </Link>
        //       ))}
        //     </div>
        //   ))}
        
        // </div>
        // )
        }







      </div>
      <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
        <div className='footer__copyrights-link'>

          {
          // (lang === 'en') ? (
            open.map((item: any, index: any) => (
              <div key={index}>

                {item.en?.map((c: any, i: any) => (
                  <div key={i}>
                    {c.footer?.map((a: any, j: any) => (
                      <div key={j}>
                        <Link href='' className='text-gray-500'>
                          {a.privacy}
                        </Link>
                        <Link href='' className='text-gray-500'>
                        {a.term}
                        </Link>
                      </div>
                    ))}
                  </div>
                ))} 
              </div>
            ))
          // ) : (
          //   open.map((item: any, index: any) => (
          //     <div key={index}>
          //       {item.ar?.map((c: any, i: any) => (
          //         <div key={i}>
          //           {c.footer?.map((a: any, j: any) => (
          //             <div key={j}>
          //               <Link href='' className='text-gray-500 p-5'>
          //                 {a.privacy}
          //               </Link>
          //               <Link href='' className='text-gray-500'>
          //               {a.term}
          //               </Link>
          //             </div>
          //           ))}
          //         </div>
          //       ))}
          //     </div>
          //   ))
          // )
        }



        </div>

      </div>


    </footer>
  )
}

export default Footer