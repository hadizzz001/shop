export default function Features() {
  return (
    <section>
      <div className="max-w-12xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center ">
            <h2 className="sywCarousel__title br_text-2xl-serif md:br_text-3xl-serif">How it works?</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto gap-8 md:grid-cols-2 lg:flex xs:grid sm:grid lg:gap-16 items-start md:max-w-2xl lg:max-w-none container" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]" style={{maxWidth:"300px"}}>
              <svg fill="#ea6a2b" width="64px" height="64px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>number10</title> <path d="M16 3c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13zM17.757 22.536h-2.469v-9.305c-0.901 0.841-1.964 1.463-3.188 1.867v-2.234c0.644-0.211 1.344-0.612 2.099-1.202s1.273-1.278 1.555-2.064h2.003v12.938z"></path> </g></svg>
              <h4 className="h4 mb-2" style={{fontFamily: 'Frank Ruhl Libre,"PT Serif","Noto Serif","Noto Serif JP","Noto Serif KR","Noto Serif SC","Noto Serif TC",ui-serif,Georgia,Cambria,Times New Roman,Times,serif',fontSize: "1.75rem",lineHeight: '2.2rem',fontWeight: '400', textAlign:'center'}}>Choose Your Product</h4>
              <p className="text-lg  text-center" style={{ fontFamily:' Lato,Noto Sans,Noto Sans JP,Noto Sans KR,Noto Sans SC,Noto Sans TC,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"',fontSize: "1.1rem",lineHeight: "1.75rem",fontWeight: "400",letterSpacing: ".075em", textAlign:'center'}}>Explore our range and select the NFC SocialTap that suits your needs.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]" style={{maxWidth:"300px"}}>
              <svg fill="#ea6a2b" width="64px" height="64px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>number11</title> <path d="M16 3c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13zM20.342 20.426v2.297h-8.656c0.093-0.867 0.374-1.688 0.843-2.465 0.468-0.776 1.393-1.807 2.774-3.090 1.111-1.037 1.793-1.74 2.045-2.109 0.34-0.51 0.51-1.014 0.51-1.512 0-0.551-0.147-0.975-0.441-1.271s-0.7-0.444-1.219-0.444c-0.512 0-0.92 0.156-1.223 0.467s-0.478 0.827-0.523 1.549l-2.469-0.247c0.146-1.359 0.605-2.335 1.378-2.928s1.739-0.888 2.898-0.888c1.27 0 2.268 0.343 2.994 1.028s1.089 1.538 1.089 2.557c0 0.58-0.104 1.132-0.312 1.656s-0.537 1.074-0.988 1.647c-0.299 0.38-0.839 0.929-1.621 1.644-0.781 0.714-1.276 1.188-1.484 1.422s-0.376 0.463-0.505 0.686h4.91z"></path> </g></svg>
              <h4 className="h4 mb-2" style={{fontFamily: 'Frank Ruhl Libre,"PT Serif","Noto Serif","Noto Serif JP","Noto Serif KR","Noto Serif SC","Noto Serif TC",ui-serif,Georgia,Cambria,Times New Roman,Times,serif',fontSize: "1.75rem",lineHeight: '2.2rem',fontWeight: '400', textAlign:'center'}}>Select Design</h4>
              <p className="text-lg  text-center" style={{ fontFamily:' Lato,Noto Sans,Noto Sans JP,Noto Sans KR,Noto Sans SC,Noto Sans TC,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"',fontSize: "1.1rem",lineHeight: "1.75rem",fontWeight: "400",letterSpacing: ".075em", textAlign:'center'}}>Opt for a ready design or customize your own with our user-friendly design tool.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]" style={{maxWidth:"300px"}}>
              <svg fill="#ea6a2b" width="64px" height="64px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>number12</title> <path d="M16 3c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13zM18.995 21.357c-0.826 0.797-1.854 1.194-3.086 1.194-1.166 0-2.133-0.335-2.9-1.005-0.769-0.67-1.214-1.545-1.337-2.627l2.391-0.289c0.076 0.607 0.281 1.071 0.616 1.393 0.333 0.321 0.738 0.482 1.213 0.482 0.51 0 0.939-0.194 1.289-0.582 0.348-0.387 0.522-0.909 0.522-1.566 0-0.621-0.167-1.115-0.501-1.479-0.335-0.364-0.742-0.545-1.223-0.545-0.317 0-0.695 0.062-1.136 0.184l0.272-1.997c0.668 0.018 1.178-0.127 1.529-0.434s0.526-0.715 0.526-1.224c0-0.433-0.128-0.777-0.385-1.035-0.258-0.257-0.599-0.386-1.025-0.386-0.421 0-0.779 0.146-1.077 0.438s-0.479 0.72-0.544 1.281l-2.281-0.386c0.158-0.782 0.397-1.407 0.717-1.875s0.765-0.835 1.336-1.103 1.212-0.401 1.921-0.401c1.213 0 2.186 0.387 2.918 1.161 0.604 0.633 0.905 1.348 0.905 2.145 0 1.131-0.619 2.034-1.858 2.708 0.739 0.158 1.33 0.513 1.772 1.063 0.443 0.551 0.664 1.215 0.664 1.994 0.001 1.132-0.412 2.095-1.238 2.891z"></path> </g></svg>
              <h4 className="h4 mb-2" style={{fontFamily: 'Frank Ruhl Libre,"PT Serif","Noto Serif","Noto Serif JP","Noto Serif KR","Noto Serif SC","Noto Serif TC",ui-serif,Georgia,Cambria,Times New Roman,Times,serif',fontSize: "1.75rem",lineHeight: '2.2rem',fontWeight: '400', textAlign:'center'}}>Place Your Order</h4>
              <p className="text-lg  text-center" style={{ fontFamily:' Lato,Noto Sans,Noto Sans JP,Noto Sans KR,Noto Sans SC,Noto Sans TC,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"',fontSize: "1.1rem",lineHeight: "1.75rem",fontWeight: "400",letterSpacing: ".075em", textAlign:'center'}}>Securely place your order online and let us handle the rest.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]" style={{maxWidth:"300px"}}>
              <svg fill="#ea6a2b" width="64px" height="64px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>number13</title> <path d="M16.359 17.583v-4.405l-2.971 4.405h2.971zM16 3c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13zM20.344 19.739h-1.594v2.595h-2.391v-2.595h-5.281v-2.147l5.598-8.196h2.074v8.187h1.594v2.156z"></path> </g></svg>
              <h4 className="h4 mb-2" style={{fontFamily: 'Frank Ruhl Libre,"PT Serif","Noto Serif","Noto Serif JP","Noto Serif KR","Noto Serif SC","Noto Serif TC",ui-serif,Georgia,Cambria,Times New Roman,Times,serif',fontSize: "1.75rem",lineHeight: '2.2rem',fontWeight: '400', textAlign:'center'}}>Tap, Connect, Enjoy</h4>
              <p className="text-lg  text-center" style={{ fontFamily:' Lato,Noto Sans,Noto Sans JP,Noto Sans KR,Noto Sans SC,Noto Sans TC,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"',fontSize: "1.1rem",lineHeight: "1.75rem",fontWeight: "400",letterSpacing: ".075em", textAlign:'center'}}>Once your NFC SocialTap arrives, start tapping, connecBng, and experiencing the seamless
                future of networking!</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}