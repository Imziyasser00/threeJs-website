import express from "express";
import * as dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/dalle.routes.js'

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb"}))

app.use('/api/v1/dalle',router);

app.get('/', (req, res) => {
    res.status(200).json({ messages: "Hello from Yassir"})
})

app.listen(5000, () => console.log('Server port 5000'));