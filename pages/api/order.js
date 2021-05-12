

export default function (req, res){
    let smtpEndpoint = "email-smtp.us-west-2.amazonaws.com";

    let smtpUsername = "AKIA5MALYI2EVYIDAF53";
    let smtpPassword = "BGUVqAVzmTmTm6VqKJ0Aw8MYQKLFZ+1IfIv5RBQjbTwV";
    let senderAddress = "order.farmoreco@gmail.com";
    

    let subject = `${req.body.product} Sample Request by ${req.body.name}`;
    let body_text = `Coffee Sample Request (${req.body.product}) <br/>
    -------------------------------------------------------------<br/><br/>
    Dear Sir/Madam:
    <br/> <br/>   

    ${req.body.message}
    <br/>
    <br/>
    Regards,
    <br/><br/>
    
    Name: ${req.body.name}  <br/>
    Email: ${req.body.email}<br/><br/>

    Company Name: ${req.body.companyName}<br/>
    Phone: ${req.body.phone}<br/>
    
    `;

    let body_html = `<html>
<head></head>
<body>
  <h1>Coffee Sample Request ${req.body.product} </h1>
  
  <p>

  Dear Sir/Madam:
  <br/>
  <br/>
  ${req.body.message}

  </p>

  <p>
  Regards, 
  <br/>
  <br/>


  Name: ${req.body.name} <br/>
  Email: ${req.body.email} <br/> <br/>

  Company Name: ${req.body.companyName} <br/>
  Phone: ${req.body.phone} <br/>
  </p>
</body>
</html>`;

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: smtpEndpoint,
        auth: {
            user: smtpUsername,
            pass: smtpPassword,
            },
        secure: true,
    });


    const mailData = {
        from: senderAddress,
        // to: "info@farmore.co",
        to: "sebastian@farmore.co",
        subject: subject,
        text: body_text,
        html: body_text
    }

    transporter.sendMail(mailData,function(err, info){
        if(err){
            
            res.status(err.responseCode).json({status: err});
        }else{
        res.status(200).json({status:"success"});
        }
        })

}
export const config = {
    api:{
        externalResolver: true,
    },
}
  