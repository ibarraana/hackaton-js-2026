import { Usuario } from '../models/index.js'
import { enviarCorreo } from '../services/emailServices.js'
import crypto from 'crypto'


export const obtenerUsuario = async (req, res) => {
    try { 
      res.json(await Usuario.findAll()) 
    } 
    catch (e) { 
      res.status(500).json({ error: e.message })
    }
}


export const crearUsuario = async (req, res) => {
    try { 
      let nombre = req.body.nombre
      let email = req.body.email
      let passwordUsuario = req.body.passwordUsuario

      const nuevoUsuario = await Usuario.create(req.body)

      try {
        let mensajeHtml = "<h1>Bienvenido al programa de E-commerce, tu email es: " + email + "</h1>"      
        await enviarCorreo(email, "Registro en el sistema", mensajeHtml)
      } catch(mailError) {
        console.error("⚠️ El usuario se creó pero falló el envío del mail:", mailError.message);
      }

      res.status(201).json(nuevoUsuario)
    } 
    catch (e) { 
      res.status(400).json({ error: e.message }); 
    }
}

export const solicitarRecuperacion = async (req, res) => {
    try {
        const { email } = req.body

        const usuario = await Usuario.findOne({ where: { email } })
        if (!usuario) {
            return res.status(404).json({ error: 'No existe un usuario registrado con ese correo' })
        }

        const codigoSeguridad = Math.floor(100000 + Math.random() * 900000).toString()

        usuario.codigoRecuperacion = codigoSeguridad
        await usuario.save()

        const mensajeHtml = `
            <h2>Restablecer tu contraseña</h2>
            <p>Hola ${usuario.nombre}, has solicitado restablecer tu clave.</p>
            <p>Tu código de seguridad es: <strong>${codigoSeguridad}</strong></p>
            <p>Este código expirará en 15 minutos. No lo compartas con nadie.</p>
        `

        await enviarCorreo(email, "Código de recuperación de contraseña", mensajeHtml)

        return res.status(200).json({ message: 'Código de verificación enviado al correo electrónico' })
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

export const restablecerContrasenia = async (req, res) => {
    try {
        const { email, codigo, nuevaPassword } = req.body

        const usuario = await Usuario.findOne({ where: { email } })
        
        if (!usuario) {
            return res.status(400).json({ error: 'El código es inválido o el correo no coincide' })
        }

        usuario.passwordUsuario = nuevaPassword
        usuario.codigoRecuperacion = null
        await usuario.save()

        return res.status(200).json({ message: 'Contraseña actualizada con éxito' })
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}