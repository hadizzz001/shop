import Link from "next/link";

export default function Features() {
  return (
    <>  
      <section>
        <div className="max-w-12xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">

            {/* Items */}
            <div className="max-w-sm mx-auto gap-8 md:grid-cols-2 lg:flex xs:grid sm:grid lg:gap-16 items-start md:max-w-2xl lg:max-w-none container" data-aos-id-blocks>

              {/* 1st item */}
              <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]" style={{maxWidth:"400px"}}>
                <h4 className="h4 mb-2 mt-10">Need a unique design?</h4>
                <p className="text-lg  text-center">Our expert team of designers can create anything you want. Your vision, our design expertise!</p>
                <div>
                <Link href="/contact">
                  <button type="button" class="klaviyo_submit_button mt-10" style={{padding:"1.5em"}}>Contact Us!</button>
                </Link>
                </div>
              </div>

              {/* 2nd item */}
              <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]" style={{maxWidth:"400px"}}>
                <h4 className="h4 mb-2 mt-10">Questions?</h4>
                <p className="text-lg  text-center">Want to order in bulk?</p>
                <div>
                <Link href="/contact">
                  <button type="button" class="klaviyo_submit_button mt-10" style={{padding:"1.5em"}}>Do you have any questions?</button>
                </Link>
                </div>
              </div>

              {/* 3rd item */}
              <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]" style={{maxWidth:"400px"}}>
                <h4 className="h4 mb-2 mt-10" >Place Your Order</h4>
                <p className="text-lg  text-center">Do you have franchisees and want to boost your brand's online reputation?</p>
                <div>
                <Link href="/contact">
                  <button type="button" class="klaviyo_submit_button mt-10" style={{padding:"1.5em"}}>Come and talk to us!</button>
                </Link>
                </div>
              </div>


            </div>

          </div>
        </div>
      </section>
    </>
  )
}