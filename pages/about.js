// import Head from 'next/head'
// import Image from 'next/image'
// import { useContext } from 'react'
// import AppContext from '../components/AppContext'
import Layout from '../components/Layout'
import Nav from '../components/Nav'
import styles from '../styles/Home.module.scss'


export default function About() {
    // const myContext = useContext(AppContext);
return (
   <Layout>

        <div className={styles.users} style={{marginBottom: "10rem"}}>
        <h2></h2>

        <div className={styles.users__user}>
        <img src="/assets/images/coffee-hand.png" height="500px" width="600px" alt="roasters"/>
        <div className={styles.users__description}>
            <h3>What we Do:</h3>
            <p>Founded in 2019, we partner with a network of associates to offer production, export, education and product development services. We work primarily with wholesalers. We established a direct to consumer coffee brand during the pandemic to cater to cafe and coffee at home buyers.
                
                </p>
        </div>
        </div>

        <div className={styles.users__user}>
        <div className={styles.users__description}>
            <h3>Sustainability</h3>
            <p>
            Our selection of associetied producers in origin has to comint with sustainable practices as the shade grown. Shade grown coffee is possibly the most sustainable for of coffee cultivation. Not only does it influence coffee quality, it requires little or no chemical fertilizers, 
            pesticides or herbicides. The shade trees aid the ecological system whilst reducing carbon dioxide; benefits include carbon retention, soil quality and minimizing erosion.
            </p>
        </div>
        <img src="/assets/images/sustainability.png" height="500px" width="600px" alt="sustainability"/>

        </div>
        <div className={styles.users__user}>
        <img src="/assets/images/building.png" height="500px" width="600px" alt="roasters"/>
        <div className={styles.users__description}>
            <h3>Social Impact</h3>
            <p>Farmore has developed a meriticious and highly scalable model for working with independant producers. To us they are more than just suppliers, they are our “associates”.
        We aim to purchase 100% of associate crops, giving them a level of certainty from year to year. We are commited to our associates to improve their businesses and lives.
        </p>
        </div>
        </div>
        </div>
   </Layout>
        
    )
}