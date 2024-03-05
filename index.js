import express from 'express';
import 'dotenv/config';
import db from './db/index.js';
import bodyParser from "body-parser";
import router from './routes/index.js';

const app = express();

const port = process.env.PORT || 4040;

//Connect to db
db();

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Routes
app.use(router);

// Server Start
app.listen(port, ()=>console.log(`Server is running on http://localhost:${port}/`));