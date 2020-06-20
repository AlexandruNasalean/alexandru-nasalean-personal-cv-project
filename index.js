const express = require('express');
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');
const cors = require('cors');


const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


app.get('/', ()=>{
    res.send('welcome to my forma');
})

app.post('/api/forma', (req,res)=>{

let data=req.body;

let smtpTransport = nodemailer.createTransport({
   service:'Gmail' ,
   port:465,
   auth:{
    user:'alexandru.nasalean.off@gmail.com',
    pass:"Energon123"
   }
});


let mailOptions={
    from:data.email,
    to:'alexandru.nasalean.off@gmail.com',
    subject:`Message from ${data.FullName}`,
    html:`
    
    <h3>Informations</h3>
    <ul>
      <li>Name: ${data.FullName}</li>
      <li>Email: ${data.email}</li>
    
    </ul> 
    <h3>Message</h3> 
    <p>${data.textarea}</p>  
    
    `

};

smtpTransport.sendMail(mailOptions, (error, response)=>{
  
    if(error){
        res.send(error)
    }
    else{
        res.send('Success')
    }

    smtpTransport.close();
})





})


const PORT = process.env.PORT||3001;

app.listen(PORT,()=>{
    console.log(`server listening at port ${PORT}`);
    
})