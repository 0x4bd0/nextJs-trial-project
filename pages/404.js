import Link from 'next/link'
import { useEffect } from 'react';
import {useRouter} from 'next/router'

const NotFound = () => {
    const router = useRouter()

    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
        },2000)
    },[])
    return (
        <div className="notFound">
            <h1>Woops...</h1>
            <p>The page that you've requested does not exist.</p>
            <Link href="/"><a>Take me home !</a></Link>
        </div>
      );
}
 
export default NotFound;