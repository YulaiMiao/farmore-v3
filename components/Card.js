import React, { useContext } from 'react'
import styles from '../styles/Home.module.scss'
// import AppContext from './AppContext'

const Card = ({data,...restProps}) => {
  if(restProps.product){

  // const myContext = useContext(AppContext);
    return (
        <div className={styles.users__user} style={data.style}>
        <img src={`/assets/images/${data.image}`} height="500px" width="600px" alt="roasters"/>
        <div className={styles.users__description}>
          <h3>{data.title}</h3>
          {restProps.product.producer}
          {data.description}
        </div>
      </div>
    )
  }
else{
  return(
  <Card/>
  )
}
}

export default Card
