import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import style from "../styles/components/OrderSample.module.scss"
import AppContext from './AppContext';

const OrderSample = () => {
    const myContext = useContext(AppContext);

    const[name, setName] = useState("");
    const[companyName, setCompanyName] = useState("");
    const[email, setEmail] = useState("");
    const[phone, setPhone] = useState("");
    const[message, setMessage] = useState("");

    const closeModal = () => {
        const orderSampleForm = document.getElementById("contact-form");
        orderSampleForm.classList.toggle("show");
    }

    const handleFormSubmit = (e) => {
    const product = myContext.name;
    console.log(product);

        e.preventDefault();
        console.log("Sending Email");
        let data = {
            name,
            companyName, 
            email, 
            phone, 
            message,
            product
        }

            fetch('/api/order',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((res) =>{
                if(res.status ===200){
                    console.log("Response succeeded");
                    setName('');
                    setCompanyName('');
                    setEmail('');
                    setPhone('');
                    setMessage('');
                    alert("Email Sent Successfully");
                    document.getElementById("contact-form").classList.toggle("show");

                }else{
                    alert("Failed to Send Email");
                }
            })

        }
    
    return (

        <div className={style.overlay} id="contact-form">
        <div className={style.modalWrapper} >
            <div className={style.modalHeading}>
            <h2>Let's do this</h2>
            <FontAwesomeIcon icon={faTimes} size="3x" onClick={closeModal}/>
            </div>
            <form 
            onSubmit = {(e) => handleFormSubmit(e)} 
            >
                {/* {myContext.name} */}
                <label>
                    Name *
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required/>
                </label>
                <label>
                    Company Name *
                    <input type="text" value={companyName} onChange={(e)=>setCompanyName(e.target.value)} required/>
                </label>
                <label>
                    Email Address *
                    <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                </label>
                <label>
                    Phone Number *
                    <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
                </label>
                <label>
                    Message 
                    <textarea value={message} onChange={(e)=>setMessage(e.target.value)} />
                </label>
                <input type="submit" value="submit"/>
            </form>
        </div>
        </div>
    )
}

export default OrderSample
