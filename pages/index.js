import Head from 'next/head'
import Footer from '../components/footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Link href="/projects">See Projects</Link>
    </div>
  )
}
