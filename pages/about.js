import Head from 'next/head'

const About = () => {
    return ( 
        <>
        <Head>
          <title>Beena List | About</title>
          <meta name='keywords' content='Beenas'/>
        </Head>
        <div>
            <h1>About</h1>
            <p>Next.js is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static websites. React documentation mentions Next.js among Recommended Toolchains advising it to developers as a solution when Building a server-rendered website with Node.js</p>
            <p> Where traditional React apps can only render their content in the client-side browser, Next.js extends this functionality to include applications rendered on the server-side.</p>
        </div>
        </>
     );
}
 
export default About;