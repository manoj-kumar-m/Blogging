const express = require('express')
const app = express()
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const postRoute = require('./routes/post')
const categoryRoute = require('./routes/categories')
const multer = require("multer");
const path = require("path");
const dotenv = require('dotenv')



dotenv.config()
app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "/images")));



mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
}).then(
    console.log("mongo connected")
).catch((err) => console.log(err))




const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({
    storage: storage
});

app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
});



app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/post', postRoute);
app.use('/api/categories', categoryRoute);

app.listen(8000, () => {
    console.log("Backend is running")
})