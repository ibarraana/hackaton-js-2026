import { CarritoDetalle } from '../models/index.js'

export const obtenerCarritosDetalle = async (req, res) => {
    try { 
      res.json(await CarritoDetalle.findAll()) 
    } 
    catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

export const obtenerCarritosDetallePorId = async (req, res) => {
    try { 
        const carritosDetalle = await CarritosDetalle.findByPk(req.params.id); 
        if (!carritosDetalle) return res.status(404).json({ error: 'Carrito Detalle no encontrado' });
        res.json(carritosDetalle); 
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

export const crearCarritosDetalle = async (req, res) => {
    try { 
      res.status(201).json(await CarritosDetalle.create(req.body)); 
    } 
    catch (e) { 
      res.status(400).json({ error: e.message }); 
    }
}

export const actualizarCarritosDetalle = async (req, res) => {
    try { 
        const [filas] = await CarritosDetalle.update(req.body, { where: { id_carrito_detalle: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Carrito Detalle no encontrado' })
        res.json({ message: 'Actualizado' })
    } catch (e) { 
      res.status(400).json({ error: e.message }) 
    }
}

export const eliminarCarritoCarritosDetalle = async (req, res) => {
    try { 
        const filas = await CarritosDetalle.destroy({ where: { id_carrito_detalle: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Carrito Detalle no encontrado' })
        res.json({ message: 'Eliminado' })
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}