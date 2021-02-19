export const getStaticPaths = async() => {
    const tmp = await fetch('https://jsonplaceholder.typicode.com/posts')
    let posts = await tmp.json()

    if(posts.length > 0) {
        posts = posts.splice(0,20)
    } else {
        posts = []
    }

    const paths = posts.map(item=> {
        return {
            params : {id:item.id.toString()},
        }
    })

    return {
        paths,
        fallback : false
    }
}


export const getStaticProps = async(context) => {

    const tmp = await fetch('https://jsonplaceholder.typicode.com/posts/'+context.params.id)
    let post = await tmp.json()

    return {
        props : {
            post
        }
    }
}


const Details = ({post}) => {
    console.log(post)
    return ( 
        <div className="detailsContainer">
            <h1>Project Details</h1>
            <div className="postsContianer" key={post.id}>
                        <p className="postsTitle">{post.title}</p>
                        <p className="postsBody">{post.body}</p>
                    </div>
        </div>
     );
}
 
export default Details;