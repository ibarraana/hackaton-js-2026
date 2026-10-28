import { DetallePedido } from '../models/index.js'

export const obtenerDetallePedido = async (req, res) => {
    try { 
      res.json(await DetallePedido.findAll()) 
    } 
    catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

export const obtenerDetallePedidoPorId = async (req, res) => {
    try { 
        const detallePedido = await DetallePedido.findByPk(req.params.id); 
        if (!detallePedido) return res.status(404).json({ error: 'Detalle Pedido no encontrado' });
        res.json(detallePedido); 
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

export const crearDetallePedido = async (req, res) => {
    try { 
      res.status(201).json(await DetallePedido.create(req.body)); 
    } 
    catch (e) { 
      res.status(400).json({ error: e.message }); 
    }
}

export const actualizarDetallePedido = async (req, res) => {
    try { 
        const [filas] = await DetallePedido.update(req.body, { where: { id_pedido_detalle: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Detalle Pedido no encontrado' })
        res.json({ message: 'Actualizado' })
    } catch (e) { 
      res.status(400).json({ error: e.message }) 
    }
}

export const eliminarDetallePedido = async (req, res) => {
    try { 
        const filas = await DetallePedido.destroy({ where: { id_pedido_detalle: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Detalle Pedido no encontrado' })
        res.json({ message: 'Eliminado' })
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}