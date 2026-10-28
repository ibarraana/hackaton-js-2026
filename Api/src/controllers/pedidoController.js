import { Pedido } from '../models/index.js'

export const obtenerPedido = async (req, res) => {
    try { 
      res.json(await Pedido.findAll()) 
    } 
    catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

export const obtenerPedidoPorId = async (req, res) => {
    try { 
        const pedido = await Pedido.findByPk(req.params.id); 
        if (!pedido) return res.status(404).json({ error: 'Pedido no encontrado' });
        res.json(pedido); 
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

export const crearPedido = async (req, res) => {
    try { 
      res.status(201).json(await Pedido.create(req.body)); 
    } 
    catch (e) { 
      res.status(400).json({ error: e.message }); 
    }
}

export const actualizarPedido = async (req, res) => {
    try { 
        const [filas] = await Pedido.update(req.body, { where: { id_pedido: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Pedido no encontrado' })
        res.json({ message: 'Actualizado' })
    } catch (e) { 
      res.status(400).json({ error: e.message }) 
    }
}

export const eliminarPedido = async (req, res) => {
    try { 
        const filas = await Pedido.destroy({ where: { id_pedido: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Pedido no encontrado' })
        res.json({ message: 'Eliminado' })
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}