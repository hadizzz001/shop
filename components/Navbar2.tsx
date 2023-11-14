"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage'
import { useDrawerContext } from 'app/context/store';
import { useRouter } from 'next/navigation'


function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const router = useRouter()

  const { open, setOpen } = useDrawerContext()
  const [value, setValue] = useLocalStorage("lang", "")
  const [lang, setLang] = useState(value)
  if (!lang) {
    setLang('en')
    setValue('en')
  }

  const saveToLocalStorage = (e: any) => {
    if (lang == 'en') {
      setLang('ar')
      setValue('ar')
    }
    else {
      setLang('en')
      setValue('en')
    }
    if(typeof window !== "undefined")
    window.location.href = "/"
  }

  console.log("local is : ", lang)
  return (
    <div style={{backgroundColor:"#731b1a", paddingTop:"3em"}}>
      <nav className="w-full bg-white top-0 left-0 right-0 z-10" style={{padding:"2em"}}>
        <div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between md:block">

              <Link href="/" className='flex justify-center items-center'>
                <Image src="https://res.cloudinary.com/dixtwo21g/image/upload/v1699910478/next/ll1k5mlcahbayj0uds3p.png" sizes="100vw" alt='Logo' width={200} height={18} className='object-contain' />
              </Link>
              <div className="md:hidden">
                <button
                style={{borderColor: "transparent !important"}}
                  className="p-2 text-gray-700 rounded-md outline-none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none" 
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center  md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                }`}
            >


              {(lang === 'en') ? (
                open.map((item: any, index: any) => (
                  <div key={index}>
                    {item.en?.map((c: any, i: any) => (
                      <div key={i}>
                        {c.nav?.map((a: any, j: any) => (
                          <div key={j}>
                            <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                              <li className="text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-blue-900  border-blue-900  md:hover:text-red-600 md:hover:bg-transparent">
                                <Link href="/" onClick={() => setNavbar(!navbar)}>
                                  {a.t1}
                                </Link>
                              </li>
                              <li className="text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-600  border-blue-900  md:hover:text-red-600 md:hover:bg-transparent">
                                <Link href="/about" onClick={() => setNavbar(!navbar)}>
                                  {a.t2}
                                </Link>
                              </li>
                              <li className="text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-600  border-blue-900  md:hover:text-red-600 md:hover:bg-transparent">
                                <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                                  {a.t3}
                                </Link>
                              </li>
                              <li className="text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-600  border-blue-900  md:hover:text-red-600 md:hover:bg-transparent">
                                <Link href="https://triple-dash.netlify.app/" target='_blank' onClick={() => setNavbar(!navbar)}>
                                  {a.t4}
                                </Link>
                              </li>
                              {/* <div className='px-6' style={{textAlign:'center'}}>
                                <input type="button" value={(lang === null) ? 'en' : lang} onClick={saveToLocalStorage} />
                                <Image src="/lang.svg" width={30} height={30} alt="lang" style={{display:'inline'}}/>
                              </div> */}
                            </ul>
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
                        {c.nav?.map((a: any, j: any) => (
                          <div key={j}>
                            <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                              <li className="text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-blue-900  border-blue-900  md:hover:text-red-600 md:hover:bg-transparent">
                                <Link href="/" onClick={() => setNavbar(!navbar)}>
                                  {a.t1}
                                </Link>
                              </li>
                              <li className="text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-600  border-blue-900  md:hover:text-red-600 md:hover:bg-transparent">
                                <Link href="/about" onClick={() => setNavbar(!navbar)}>
                                  {a.t2}
                                </Link>
                              </li>
                              <li className="text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-600  border-blue-900  md:hover:text-red-600 md:hover:bg-transparent">
                                <Link href="/blog/view" onClick={() => setNavbar(!navbar)}>
                                  {a.t3}
                                </Link>
                              </li>
                              <li className="text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-600  border-blue-900  md:hover:text-red-600 md:hover:bg-transparent">
                                <Link href="https://triple-dash.netlify.app/" target='_blank' onClick={() => setNavbar(!navbar)}>
                                  {a.t4}
                                </Link>
                              </li>
                              {/* <div className='px-6' style={{textAlign:'center'}}>
                                <input type="button" value={(lang === null) ? 'en' : lang} onClick={saveToLocalStorage} />
                                <Image src="/lang.svg" width={30} height={30} alt="lang" style={{display:'inline'}} />
                              </div> */}
                            </ul>

                          </div>
                        ))}
                      </div>
                    ))}

                  </div>
                ))
              )}





            </div>
          </div>

        </div>


      </nav>

    </div>

  );
}

export default NavBar;