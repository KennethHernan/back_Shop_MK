import { Router } from 'express';
import { crearCategory, listarCategory } from '../services/categoryService.js';

const router = Router();

router.get("/allCategory", async (req, res) => {
  try {
    const allCategory = await listarCategory();
    res.json(allCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "No se pudieron obtener las Categorias" });
  }
});
router.post('/category', async (req, res) => {
  try {
    const newCategory = await crearCategory(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'No se pudo crear la Categoria' });
  }
});

export default router;
