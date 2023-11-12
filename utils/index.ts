

export async function fetchTemp() {
    // const response = await fetch('https://enchanting-dusk-e6cd04.netlify.app/api/blog' );
    const response = await fetch('/api/post' , { next: { revalidate: 0 } }); 
    const result = await response.json(); 
    return result.posts;
}

export async function fetchTemp1() {

    // const response = await fetch('https://enchanting-dusk-e6cd04.netlify.app/api/blogs' );
    const response = await fetch('/api/blogs' , { next: { revalidate: 0 } }); 
    const result = await response.json(); 
    return result.posts;
}
