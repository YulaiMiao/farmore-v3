import React, { useState } from 'react'
import Layout from '../components/Layout'
import style from "../styles/pages/Contact.module.scss"

const contact = () => {

    const[name, setName] = useState("");
    const[companyName, setCompanyName] = useState("");
    const[email, setEmail] = useState("");
    const[phone, setPhone] = useState("");
    const[message, setMessage] = useState("");

    const handleFormSubmit = (e) => {

        e.preventDefault();
        let data = {
            name,
            companyName, 
            email, 
            phone, 
            message,
        }

            fetch('/api/contact',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((res) =>{
                if(res.status ===200){
                    setName('');
                    setCompanyName('');
                    setEmail('');
                    setPhone('');
                    setMessage('');
                    alert("Email Sent Successfully");

                }else{
                    alert("Failed to Send Email");
                }
            })

        }
    

    return (
        <Layout>
           <div className={style.modalWrapper} >
            <div className={style.modalHeading}>
            <h2>Contact Us Here</h2>
            </div>
            <form 
            onSubmit = {(e) => handleFormSubmit(e)} 
            >
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
        </Layout>
    )
}

export default contact
