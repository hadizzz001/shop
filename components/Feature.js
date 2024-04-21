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
      src={isMobile ? 'https://res.cloudinary.com/duppvjinz/image/upload/v1713684310/vucgss7numl5vsct8j17.jpg' : 'https://res.cloudinary.com/duppvjinz/image/upload/v1712835088/yac6eqgyeqicl7yidib2.webp'}
      width="0" // Adjust the width as needed for the phone image
      height="0" // Adjust the height as needed for the phone image
      sizes="100vw"
      className="w-full h-auto"
    />





    </>
  )
}