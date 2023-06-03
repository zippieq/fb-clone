require('@babel/register')
import express from 'express';
import cors from 'cors';
import user from './routes/user' ;
import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config();
const app = express();
app.use(cors());
app.use("/api", user);
app.get("/", (req, res) => {
  res.send("welcome from home");
});
app.get("/books", (req, res) => {
  res.send("Hello World");
});

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
}).then(()=> console.log("Connected to database"))
.catch((err)=> console.log("Error connecting: ", err));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("server is listening...");
});
