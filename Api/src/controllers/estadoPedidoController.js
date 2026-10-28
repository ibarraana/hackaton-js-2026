import { EstadoPedido } from '../models/index.js'

export const obtenerEstadoPedido = async (req, res) => {
    try { 
      res.json(await EstadoPedido.findAll()) 
    } 
    catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

export const obtenerEstadoPedidoPorId = async (req, res) => {
    try { 
        const estadoPedido = await EstadoPedido.findByPk(req.params.id); 
        if (!estadoPedido) return res.status(404).json({ error: 'Estado Pedido no encontrado' });
        res.json(estadoPedido); 
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

export const crearEstadoPedido = async (req, res) => {
    try { 
      res.status(201).json(await EstadoPedido.create(req.body)); 
    } 
    catch (e) { 
      res.status(400).json({ error: e.message }); 
    }
}

export const actualizarEstadoPedido = async (req, res) => {
    try { 
        const [filas] = await EstadoPedido.update(req.body, { where: { id_estado: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Estado Pedido no encontrado' })
        res.json({ message: 'Actualizado' })
    } catch (e) { 
      res.status(400).json({ error: e.message }) 
    }
}

export const eliminarEstadoPedido = async (req, res) => {
    try { 
        const filas = await EstadoPedido.destroy({ where: { id_estado: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Estado Pedido no encontrado' })
        res.json({ message: 'Eliminado' })
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}