import Image from 'next/image'
import { useEffect, useState } from 'react';


export default function Feature() {


   const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the screen size is mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Call the function initially
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <> 
 




<Image
      src={isMobile ? 'https://res.cloudinary.com/duppvjinz/image/upload/v1710874487/obtihy1lopxtbgybyycp.webp' : 'https://res.cloudinary.com/duppvjinz/image/upload/v1710874485/qlksgtnn1jiqc5m64rpr.webp'}
      width="0" // Adjust the width as needed for the phone image
      height="0" // Adjust the height as needed for the phone image
      sizes="100vw"
      className="w-full h-auto"
    />





    </>
  )
}