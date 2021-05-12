import React, { useContext, useState } from 'react'
import Banner from '../components/Banner'
import Filter from '../components/Filter'
import Layout from '../components/Layout'
import style from "../styles/pages/Products.module.scss"
import Product from '../components/Product'
import allProducts from "../sampleData.json"
import OrderSample from '../components/OrderSample'
// import AppContext from '../components/AppContext'


function AllProducts(){

    const [products, setProducts] = useState(allProducts);
    const [filterData, setFilterData] = useState({
        varietal: "",
        region: "",
        process:""
    });

    //filtering data
    const showFilteredResults = (filter, prod) => {
        let result = prod;

        if(filter.varietal)
        {
            result = prod.filter(product => product.varietal.toLowerCase().includes(filter.varietal.toLowerCase()));
        
            if(filter.region){
            result = prod.filter( product => {
                return product.varietal.toLowerCase().includes(filter.varietal.toLowerCase()) && 
                product.features.region.toLowerCase().includes(filter.region.toLowerCase()) 
            });
            }
            if(filter.process){
            result = prod.filter( product => {
                return product.varietal.toLowerCase().includes(filter.varietal.toLowerCase()) && 
                product.features.process.toLowerCase().includes(filter.process.toLowerCase()) 
            });
            }
        }
        else if(filter.region){
            result = prod.filter(product => product.features.region.toLowerCase().includes(filter.region.toLowerCase()) ||
                product.features.process.toLowerCase().includes(filter.process.toLowerCase()));
        
        }
    return result;
        
    }

function setFilter(key, value){
    const filter = {...filterData};
    const tempProducts = allProducts;
    if(value!== "0")
        filter[key.toLowerCase()] = value;
    else
        filter[key.toLowerCase()] = "";

    setFilterData(filter);
    let filteredData = showFilteredResults(filter, tempProducts);
    if(filterData)   
        setProducts(filteredData);
    }
    
    

    const process=["Honey", "Natural", "Washed"];
    const region = ["Herrera, Tolima", "Palestina, Huila", "San Augustin, Huila", "Bruselas, Huila","San Adolfo, Huila","Buenavista, Quindio"];
    const varietal = ["Burbon","Castillo","Caturra","Colombia", "Gesha","Tabi","Wush"];
//     // const myContext = useContext(AppContext);
    const bannerText = "Browse the range of ethically sourced Colombian coffee below.";
    return (
        <Layout>
        <Banner text={bannerText} textStyle={{top: "50px", width:"900px"}} style={{height: "80vh", backgroundImage: `url(/assets/images/products-banner.png)`, backgroundPosition: "right bottom", backgroundColor: "#F63497", backgroundSize: "contain"}}/>
        <div className="content">
        <div className={style.filter}>
            <h2 className={style.filter__heading}>Filter
                <img src="/assets/vendor/images/filter.png"
                height="36px"
                width="36px"
                className={style.filter__icon}
                alt="filter-icon"/>
                 </h2>
            <div className={style.filter__options}>
                
                <Filter data={varietal} name="Varietal" onChange = {(e) => setFilter("Varietal", e.target.value)}/>
                <Filter data={region} name="Region" onChange = {(e) => setFilter("Region", e.target.value)}/>
                <Filter data={process} name="Process" onChange = {(e) => setFilter("Process", e.target.value)}/>
                <a href="#" className={style.clearBtn}>clear</a>

                 </div>
                 </div>
        <div className={style.products}>
            {products.map((product, index)=>
            <React.Fragment key={index}>
                <Product data={product} cardContentStyle={{display: "flex", flexDirection:"column"}}/>
            </React.Fragment>
            )}        
        </div>

        </div>
      <OrderSample/>

        </Layout>
    )
}

export default AllProducts
