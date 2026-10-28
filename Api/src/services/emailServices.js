import nodemailer from 'nodemailer'
import 'dotenv/config'

const configTransporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
})

configTransporter.verify((error, success) => {
    if(error) {
        console.error("❌ Error en la configuracion de NodeMailer: ", error)
    } else {
        console.log("✅ Servidor de correo listo para usar, funciona correctamente")
    }
})


export const enviarCorreo = async(destinatario, asunto, cuerpoMensaje) => {
    try {
        const info = await configTransporter.sendMail( {
            from: "Proyecto E-commerce " + process.env.SMTP_USER,
            to: destinatario,
            subject: asunto,
            html: cuerpoMensaje
        })

        console.log("✅📧 Correo enviado correctamente a " + destinatario + ", id del correo: " + info.messageId)
        return true
    } catch (error) {
        console.error("💥 Error al enviar correcto a " + destinatario + ": ", error)
        return false
    }
}


