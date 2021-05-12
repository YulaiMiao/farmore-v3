import React, { useContext } from 'react'
// import AppContext from './AppContext'

const Banner = (props) => {
  // const myContext = useContext(AppContext);

    return (
        <div className="banner" 
        style={props.style}
        >
        <h1 className="banner__text" style={props.textStyle}>
            {props.text} 
       </h1>
        <img src="/assets/images/Vector.png" className="banner__vector"/>
      </div>
    )
}

export default Banner
