const nodemailer = require("nodemailer")

const sendEmail = (req, res) => {

    const {name, lastname, email, message, checkPrivacy} = req.body

    let transporter = nodemailer.createTransport({
        host:"",
        port: "",
        secure: true,
        auth:{
            user:"",
            pass:""
        }
    })

    let mailOptions = {
        from: email,
        to: "",
        subject: "Email from web",
        text:`Name: ${name}\nLastname: ${lastname}\nEmail: ${email}\nMessage:${message}\nPrivacy: ${checkPrivacy}`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error)
            return res.status(500).json({
                status:"error",
                message: "Error to send email",
                error: error.message
            })
        }

        return res.status(200).json({
            status: "success",
            message: "Email send succesfully"
        })
    })
    
}

module.exports = {
    sendEmail
}
