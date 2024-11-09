import express from "express";
import cors from 'cors';
import { adminRouter } from "./Routes/AdminRoute.js";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors({
   origin: ["http://localhost:3001"],
   methods: ['GET', 'POST', 'PUT', "DELETE"],
   credentials: true
}));
app.options('*', cors());
app.use(express.json());
app.use(cookieParser());
app.use('/auth', adminRouter);
app.use(express.static('Public'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(3000, () => {
   console.log("Server is running");
});
