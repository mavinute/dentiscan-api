import 'dotenv/config';
import express from 'express';

const app = express();

app.get("/", (req, res) => {
    return res.send("Servidor está em funcionamento!");
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Servidor em funcionamento em http://localhost:${PORT}`)
})