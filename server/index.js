const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");


const app = express();


app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);
const moodRoutes = require("./routes/moodRoutes");
app.use("/api/mood", moodRoutes);
const chatRoutes = require("./routes/chatRoutes");
app.use("/api/chat",chatRoutes);
// Database Connection
 connectDB();



app.get("/", (req,res)=>{
    res.send("MindMate AI Server Running");
});





app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});
