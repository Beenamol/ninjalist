import styles from '../../styles/beena.module.css'
import Link from 'next/link';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    return {
      props: { beena: data }
    }
  }
  
  const Beena = ({ beena}) => {
    // console.log(beena)
  
    return (
      <div>
        <h1>All Lists</h1>
        {beena.map(e => (
          <Link href={ '/beena/' + e.id} key={e.id} legacyBehavior> 
            <a className={styles.single}>
              <h3>{ e.name }</h3>
            </a>
          </Link>
        ))}
      </div>
    );
  }
   
  export default Beena;