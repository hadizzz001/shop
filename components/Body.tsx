// "use client"; 
import { fetchTemp } from '@/utils'
import { useState, useEffect } from "react";

 
const Body = async () => { 
    const [allTemp, setTemp] = useState<any>()

    const a = async () => {
        const b = await fetchTemp()
        setTemp(b) 
    }
    useEffect(() => {
        a()
    }, [])

    return (

        <div>


            <div className="container-fluid mb-10">
                <div className="row row-grid">


                    {allTemp && allTemp?.length > 0 ? (

                        allTemp.map((post: any) => (


                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 slide slide-product">
                                <img
                                    className="w-100 h-100"
                                    src={post.img}
                                />
                                <div className="details color-primary">
                                    <span className="title-1" style={{ fontWeight: "600", fontSize: "27px" }}>
                                        {post.title}
                                    </span>
                                    <div className="actions">
                                        <a href={`/post?title=${post.title}&type=${post.title}&desc=${post.description}`}>
                                            <div className="btn btn-1 mr-2 btn-bg-gray">Benefits</div>
                                        </a>
                                        <a href={`/reservation/?type=${post.title}`} >
                                            <div className="btn btn-2">Quote</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))


                    ) : (
                        <div className='home___error-container'>
                            <h2 className='text-black text-xl dont-bold'>...</h2>

                        </div>
                    )

                    } 

                </div>
            </div>

        </div>

    )
}

export default Body