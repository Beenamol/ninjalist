import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../comps/Footer'
import Navbar from '../comps/navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <>

<Head>
  <title>Beena List | Home</title>
  <meta name='keywords' content='Beenas'/>
</Head>
      <div>
      <h1 className = {styles.title}>Homepage</h1>
      <p className = {styles.text}>Next.js is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static websites. React documentation mentions Next.js among "Recommended Toolchains" advising it to developers as a solution when "Building a server-rendered website with Node.js"</p>
      <p className = {styles.text}> Where traditional React apps can only render their content in the client-side browser, Next.js extends this functionality to include applications rendered on the server-side.</p>
      <Link href="/beena/" className = {styles.btn}>
        See Ninja Listing
      </Link>
      
    </div>
    </>
  )
}
