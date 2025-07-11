import { Router } from 'express';
import { crearProduct, listarProductos } from '../services/productService.js';

const router = Router();

router.get("/allProduct", async (req, res) => {
  try {
    const allProduct = await listarProductos();
    res.json(allProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "No se pudieron obtener los productos" });
  }
});
router.post('/product', async (req, res) => {
  try {
    const newProduct = await crearProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'No se pudo crear el producto' });
  }
});

export default router;
