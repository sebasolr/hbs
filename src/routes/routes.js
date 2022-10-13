import { Router } from "express";
const productRouter = Router();

productRouter.get('/products', (req, res) => {
    res.json({"USER_ID": "testeando desde routes"})
});

export default productRouter