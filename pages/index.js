import styles from '../styles/Home.module.scss'
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

import Banner from '../components/Banner';
import Layout from '../components/Layout';
import React from "react";
// import AppContext from '../components/AppContext';

export default function Home() {
  // const myContext = useContext(AppContext);

const bannerText = `"FAR MORE THAN COFFEE... 
IT’S A MOVEMENT!!!"`;

 
  return (
    <Layout>
    <Banner text={bannerText} style={{backgroundImage: "url(/assets/images/home-banner.png)"}}/>
      <div className="content">

      <div className={styles.users}>
        <h2>Do you identify as a:</h2>
        <div className={styles.users__user} style={{display:"flex", flexDirection: "row"}}>
        <img src={`/assets/images/roasters.png`} height="500px" width="600px" alt="roasters"/>
        <div className={styles.users__description}>
          <h3>Roasters</h3>
          <p>I am a roaster or green bean buyer and I am looking forward to purchase green bean (Raw) coffee. I’m interested in acquiring from 35kg onwards.<a href="/all-products">
            <span style={{color: "#009869", display:"flex", alignItems:"center"}}>View our range<span style={{marginLeft: "16px"}}>&rarr;</span></span>
            </a>
          </p>
        </div>
      </div>

      <div className={styles.users__user} style={{display:"flex", flexDirection: "row-reverse"}}>
        <img src={`/assets/images/coffee-hand.png`} height="500px" width="600px" alt="roasters"/>
        <div className={styles.users__description}>
          <h3>Coffee Lover</h3>
          <p>
   I’m getting beans to drink coffee at home or at the office. I enjoy good product, variety and convenience. 
   <span style={{color: "#FF3017", display:"flex", alignItems:"center"}}>
   Coming soon 
  <span style={{marginLeft: "16px"}}>
          &rarr;
          </span>
       </span>
       </p>
        </div>
      </div>
          
      </div>
      </div>

    </Layout>
  )
}


