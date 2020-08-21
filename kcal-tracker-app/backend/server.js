const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoute');
const productRouter = require('./routes/productRoute');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/users', userRouter);
app.use('/products', productRouter);

const uri = process.env.DB_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("Connected to Mdb succesfully!");
});

app.listen(port, () =>{
    console.log(`Server started at http://localhost:${port}`);
});