import { Cliente } from '../models/index.js'

export const obtenerCliente = async (req, res) => {
    try { 
      res.json(await Cliente.findAll()) 
    } 
    catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

export const obtenerClientePorId = async (req, res) => {
    try { 
        const cliente = await Cliente.findByPk(req.params.id); 
        if (!cliente) return res.status(404).json({ error: 'Cliente no encontrado' });
        res.json(cliente); 
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

export const crearCliente = async (req, res) => {
    try { 
      res.status(201).json(await Cliente.create(req.body)); 
    } 
    catch (e) { 
      res.status(400).json({ error: e.message }); 
    }
}

export const actualizarCliente = async (req, res) => {
    try { 
        const [filas] = await Cliente.update(req.body, { where: { id_cliente: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Cliente no encontrado' })
        res.json({ message: 'Actualizado' })
    } catch (e) { 
      res.status(400).json({ error: e.message }) 
    }
}

export const eliminarCliente = async (req, res) => {
    try { 
        const filas = await Cliente.destroy({ where: { id_cliente: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Cliente no encontrado' })
        res.json({ message: 'Eliminado' })
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}