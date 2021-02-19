import Link from 'next/link'
const NotFound = () => {
    return (
        <div className="notFound">
            <h1>Woops...</h1>
            <p>The page that you've requested does not exist.</p>
            <Link href="/"><a>Take me home !</a></Link>
        </div>
      );
}
 
export default NotFound;