import React, { useContext, useState } from 'react'
import style from "../styles/pages/Products.module.scss"
import Link from "next/link"
import AllProducts from '../pages/all-products'
import AppContext from './AppContext'


const Product = ({...restProps}) => {
  
    const myContext = useContext(AppContext);

    if(restProps.data){
    const {data:product} = restProps;
   

    const openForm = (value) => {
        const orderSampleForm = document.getElementById("contact-form");
        orderSampleForm.classList.toggle("show");
        myContext.setCoffee(value);
    }
    
   
    const {features} = product;
    return (
        <div className={style.products__card} style={restProps.styles}>
            <img 
            src={`/assets/images/products/${product.image}`}
            height="423px" width="450px"
            alt="castillo coffee" />
            <div className={style.products__card__content} style={restProps.cardContentStyle}>
            
{restProps.slug?
            <div style={{display:"flex", alignItems:"center", gap:"1rem"}} > 
            <h3 style={{marginRight: "1rem", lineHeight:"18px"}}>
                {product.varietal}</h3></div>
                    :
                    <Link  style={{display:"flex", alignItems:"center", gap:"1rem"}} href={`/products/${encodeURIComponent(product.id)}`}> 
            <h3 className={style.products__title}  style={{marginRight: "1rem"}}>
                {product.varietal}<span className={style.arrow} >
                    &rarr;</span></h3></Link>
}


                <ul className={style.products__features}>
             {Object.entries(features).map((value, key)=>{
                 return(
                    <li key = {key} className={style.product__feature}><b>{value[0]}: </b> {value[1]}</li>
                 )
             })}  
                </ul>
                {restProps.slug?  <p>{product.description}</p>: ""}

            <div onClick = {()=>openForm(product.varietal)} className={style.orderBtn}>Order Sample</div>
        </div> 
        </div> 
    )
}
else{
    return(
    <AllProducts />
    )
}
}

export default Product
