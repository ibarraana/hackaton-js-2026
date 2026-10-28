import { Usuario } from '../models/index.js'
import { enviarCorreo } from '../services/emailServices.js'

export const obtenerUsuario = async (req, res) => {
    try { 
      res.json(await Usuario.findAll()) 
    } 
    catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

export const obtenerUsuarioPorId = async (req, res) => {
    try { 
        const usuario = await Usuario.findByPk(req.params.id); 
        if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
        res.json(usuario); 
    } catch (e) { 
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

export const actualizarUsuario = async (req, res) => {
    try { 
        const [filas] = await Usuario.update(req.body, { where: { id_usuario: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Usuario no encontrado' })
        res.json({ message: 'Actualizado' })
    } catch (e) { 
      res.status(400).json({ error: e.message }) 
    }
}

export const eliminarUsuario = async (req, res) => {
    try { 
        const filas = await Usuario.destroy({ where: { id_usuario: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Usuario no encontrado' })
        res.json({ message: 'Eliminado' })
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}