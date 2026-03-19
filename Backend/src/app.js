import cookieParser from 'cookie-parser';
import express from 'express';
import authRouter from './routes/auth.routes.js';
import morgan from "morgan";
import cors from "cors";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true,
  methods:["GET", "POST", "DELETE", "PUT"]
}))


app.get('/', (req, res) => {
  res.json({message: 'Hello, World!'});
});

app.use('/api/auth', authRouter);

export default app;