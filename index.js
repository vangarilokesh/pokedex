
// const { application } = require("express");
// const express =require("express");
// const dotenv=require("dotenv");

// const app = express();
// dotenv.config();

// const notes=require("./backend/data/notes.jsx");
// const e = require("express");
// app.get("/",(req,res)=>{
//     res.send("API running..");
// })

// app.get("/api/notes",(req,res)=>{
//     res.json(notes);
// })

// app.get("/api/notes/:id",(req,res)=>{
//     const note=notes.find((n)=>n._id===req.params.id);
//     res.json(note);
// })

// const PORT=process.env.PORT || 5000;

// app.listen(PORT, console.log(`Server started on PORT ${PORT}`));

const { application } = require("express");
const express =require("express");
const dotenv=require("dotenv");
const http = require("http");
const app = require("./app");
const config = require("./utils/config");
const server = http.createServer(app);
dotenv.config();

const notes=require("./backend/data/notes.jsx");
const e = require("express");
app.get("/",(req,res)=>{
    res.send("API running..");
})

app.get("/api/notes",(req,res)=>{
    res.json(notes);
})

app.get("/api/notes/:id",(req,res)=>{
    const note=notes.find((n)=>n._id===req.params.id);
    res.json(note);
})

const PORT=process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`App running on port ${config.PORT}`);
  });