import React from 'react'
import Card from '../../components/Card'
import Layout from '../../components/Layout'
import OrderSample from '../../components/OrderSample'
import Product from '../../components/Product'
import allProducts from "../../sampleData.json"
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.scss'


const product = (props) => {
  if(props){
  const router = useRouter()
  const { slug } = router.query

  const singleproduct = allProducts.find(item => item.id === Number(slug));
  //   const content = [{
  //       "id": 1,
  //       "image": "roasters.png",
  //       "title": "Meet the farmer",
  //       "description": <p>I am a roaster or green bean buyer and I am looking forward to purchase green bean (Raw) coffee. I’m interested in acquiring from 35kg onwards.<span style={{color: "#009869", display:"flex", alignItems:"center"}}>View our range<span style={{marginLeft: "16px"}}>&rarr;</span></span></p>,
  //       "style": {display:"flex", flexDirection: "row-reverse", marginBottom: "80px"}
  //     },
  //     {
  //       "id": 2,
  //       "image": "sustainability.png",
  //       "title": "About the region",
  //       "description": <p>
  //       I’m getting beans to drink coffee at home or at the office. I enjoy good product, variety and convenience. 
  //       <span style={{color: "#FF3017", display:"flex", alignItems:"center"}}>
  //       Coming soon 
  //       <span style={{marginLeft: "16px"}}>
  //              &rarr;
  //              </span>
  //           </span>
  //            </p>,
  //         "style": {display:"flex", flexDirection: "row",marginBottom: "80px"}
  //     },];


    return (
       <Layout>
           <Product slug={true} cardContentStyle={{display: "flex", flexDirection:"column", marginLeft: "2rem"}} styles={{display:"flex", flexDirection:"row", padding:"0 80px"}} data={singleproduct}/>
           <div className={styles.users__user} style={{display:"flex", flexDirection: "row-reverse", marginBottom: "80px"}}>
        <img src={`/assets/images/roasters.png`} height="500px" width="600px" alt="roasters"/>
        <div className={styles.users__description}>
          <h3>Meet the farmer</h3>
          <p>I am a roaster or green bean buyer and I am looking forward to purchase green bean (Raw) coffee. I’m interested in acquiring from 35kg onwards.<span style={{color: "#009869", display:"flex", alignItems:"center"}}>View our range<span style={{marginLeft: "16px"}}>&rarr;</span></span></p>
        </div>
      </div>
           <div className={styles.users__user} style={{display:"flex", flexDirection: "row", marginBottom: "80px"}}>
        <img src={`/assets/images/sustainability.png`} height="500px" width="600px" alt="sustainability"/>
        <div className={styles.users__description}>
          <h3>About the Region</h3>
          <p>I am a roaster or green bean buyer and I am looking forward to purchase green bean (Raw) coffee. I’m interested in acquiring from 35kg onwards.<span style={{color: "#009869", display:"flex", alignItems:"center"}}>View our range<span style={{marginLeft: "16px"}}>&rarr;</span></span></p>
        </div>
      </div>
            <OrderSample/>
       </Layout>
    )
}else{
  return(
    <p>Error Occured</p>
  )
}
}

export default product
