const express = require('express');
const router = require('./router/mainRouter');
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');
require('dotenv').config();
const methodOverride = require('method-override');


const app = express();

const PORT = process.env.PORT || 3010;
const HOST = process.env.LOCALHOST || 'localhost';
const MONGO_URI = process.env.MONGO_URI;


mongoose.connect(MONGO_URI)
.then(() => {
    console.log("Connected to database!");
})
.catch(error => {
    console.log("Error: ", error);
})



app.set('view engine', 'ejs');
app.set('views', './views');

app.use(methodOverride('_method'));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));


app.use(expressLayouts);


app.use("/", router);














app.listen(PORT, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});