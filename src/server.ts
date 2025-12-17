import 'dotenv/config';
import express from 'express';

import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
    return res.send("Servidor está em funcionamento!");
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Servidor em funcionamento em http://localhost:${PORT}`)
})