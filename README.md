API REST con nodeJS, express y nodemailer realizada para recoger datos de un formulario en el front y enviar por email.

Para su funcionamiento correcto es necesario incluir en transporter y en mailOptions los datos correctos del emisor y receptor del email. Por ejemplo:

let transporter = nodemailer.createTransport({
        host:"smtp.gmail.com",
        port: "465",
        secure: true,
        auth:{
            user:"user@gmail.com",
            pass:"1234"
        }
})

let mailOptions = {
        from: email,
        to: "user2@gmail.com",
        subject: "Email from web",
        text:`Name: ${name}\nLastname: ${lastname}\nEmail: ${email}\nMessage:${message}\nPrivacy: ${checkPrivacy}`
    }
