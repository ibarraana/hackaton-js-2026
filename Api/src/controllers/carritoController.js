import { Carrito } from '../models/index.js'

export const obtenerCarritos = async (req, res) => {
    try { 
      res.json(await Carrito.findAll()) 
    } 
    catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

export const obtenerCarritoPorId = async (req, res) => {
    try { 
        const carrito = await Carrito.findByPk(req.params.id); 
        if (!carrito) return res.status(404).json({ error: 'Carrito no encontrado' });
        res.json(carrito); 
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

export const crearCarrito = async (req, res) => {
    try { 
      res.status(201).json(await Carrito.create(req.body)); 
    } 
    catch (e) { 
      res.status(400).json({ error: e.message }); 
    }
}

export const actualizarCarrito = async (req, res) => {
    try { 
        const [filas] = await Carrito.update(req.body, { where: { id_carrito: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Carrito no encontrado' })
        res.json({ message: 'Actualizado' })
    } catch (e) { 
      res.status(400).json({ error: e.message }) 
    }
}

export const eliminarCarrito = async (req, res) => {
    try { 
        const filas = await Carrito.destroy({ where: { id_carrito: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Carrito no encontrado' })
        res.json({ message: 'Eliminado' })
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}