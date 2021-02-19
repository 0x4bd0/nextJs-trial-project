import Head from 'next/head'

export const getStaticProps = async() => {

    const tmp = await fetch('https://jsonplaceholder.typicode.com/posts')
    let posts = await tmp.json()
    if(posts.length > 0) {
        posts = posts.splice(0,20)
    } else {
        posts = []
    }

    return {
        props : {
            posts
        }
    }
}

const Projects = ({posts}) => {
    return ( 
        <>
        <Head>
        <title>Projects</title>
        </Head>
        <div>
            <h1>Projects :</h1>
            {
                posts.map(item=>(
                    <div className="postsContianer" key={item.id}>
                        <p className="postsTitle">{item.title}</p>
                        <p className="postsBody">{item.body}</p>
                    </div>
                ))
            }
        </div>
        </>

     );
}
 
export default Projects;