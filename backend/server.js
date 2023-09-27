import  express from "express";
import dotenv from "dotenv";
import userRoutes from './routes/userRoutes.js'

dotenv.config();
import { notFound,errorHandler } from "./middleware/errorMiddileware.js";
const port = process.env.PORT || 5000;

const app = express();

app.use('/api/users', userRoutes)

app.get('/',(req,res) => res.send('server is ready'));

app.use(notFound)
app.use(errorHandler)

app.listen(port,()=> console.log(`server started on port ${port}`));
