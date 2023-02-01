const express=require("express")
const dotenv=require("dotenv")
const connectDB=require("./config/db")
const userRoutes=require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
// const { notFound, errorHandler } = require("./middleware/errorMiddleware")
const cors = require("cors");
const path = require("path");

const app=express();
app.use(cors());
app.use(express.static("build"));
app.use(express.json());
dotenv.config();
connectDB();
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("api is running")
});
app.get("/api/notes",(req,res)=>{
    res.json(notes);
})
app.use('/api/users',userRoutes)
app.use(notFound)
app.use(errorHandler)

console.log(__dirname);
// console.log(path.join(__dirname, "/classifier_models/mod/model.json"));

app.use(
  "/api/pokeml/classify",
  express.static(path.join(__dirname, "/classifier_models/mod/model.json"))
);

app.use(    
  "/api/pokeml",
  express.static(path.join(__dirname, "classifier_models/mod"))
);

const PORT=process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));