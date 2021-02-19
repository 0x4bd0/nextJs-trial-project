import Link from 'next/link'

const NavBar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1>Lorem Ipsum</h1>
            </div>


            <div className="links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            </div>

        </nav>
     );
}
 
export default NavBar;