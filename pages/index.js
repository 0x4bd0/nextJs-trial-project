import Head from 'next/head'
import Footer from '../components/footer'
import NavBar from '../components/navBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <NavBar/>
      <h1>Home page</h1>
      <Footer/>
    </div>
  )
}
