import Head from 'next/head'
import Footer from '../components/footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="home">
      <h1>Home page</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
      <div className="btnCon"><Link href="/projects"><a>See Projects</a></Link></div>
    </div>
  )
}
