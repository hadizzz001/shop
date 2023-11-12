"use client"; 



async function getData() {
    const res = await fetch("http://localhost:3000/api/post", { cache: 'no-store' }); 
    if (!res.ok) {
        throw new Error("Failed to fetch data")
    } 
    return res.json();
}

const Body = async () => {
    const posts = await getData();

    return (

        <div>


            <div className="container-fluid mb-10">
                <div className="row row-grid">

                    {
                        posts.map((post: any) => (


                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 slide slide-product">
                                <img
                                    className="w-100 h-100"
                                    src={post.img}
                                />
                                <div className="details color-primary">
                                    <span className="title-1" style={{ fontWeight: "600", fontSize:"27px" }}>
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
                    }
                </div>
            </div> 

        </div>

    )
}

export default Body