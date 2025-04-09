import express from "express";
import dotenv from 'dotenv'
import path from 'path';
import { fileURLToPath } from 'url';
import htmxRouter from "./routes/htmx.js";

const __filename = fileURLToPath(import.meta.url);
const __backend_root = path.resolve(__filename, "../..");
const envPath = path.join(__backend_root, '.env');
dotenv.config({ path: envPath });

const app = express();
const port = process.env.PORT || 3000;
const app_root = path.resolve(__backend_root, "..");
const static_files = path.join(app_root, 'frontend/dist');

app.use(express.static(static_files));

app.get('/', (req, res) => {
    res.sendFile(path.join(static_files, "index.html"));
});

app.use("/htmx", htmxRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})