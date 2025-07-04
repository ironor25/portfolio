import express from "express";
import nodemailer from "nodemailer"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.post("/send", async (req,res) =>{
    const {email, message } = req.body;
    const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
   const mail = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New Message`,
    text: `
      You received a new message from your resume contact form:

      Email: ${email}
      Message: ${message}
    `
  };

  try{
    await transporter.sendMail(mail)
    res.status(200).json({"status":true})
  }
  catch(err){
    console.log(err)   
    res.status(500).json({"status":false})
  }  
})

app.listen(3000,() => {
  console.log(`Server is running`);
});