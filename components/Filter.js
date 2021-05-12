import React from 'react'

function Filter(props){
const {data, name, onChange} = props;


return (
<div className={name} style={{width:"200px"}}>
  <select onChange = {onChange}>
    <option value="0">{name}</option>
    {data.map((item, index) => {
      return (
        <option key={index} value={item}>{item}</option>
      );
    })}
  </select>
</div>  

    )
}

export default Filter
