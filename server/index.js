require('dotenv').config();
const express = require('express');
const handle = require('./handlers');
const cors = require('cors');
const bodyParser = require('body-parser');
const db=require('./models');


const app = express();

const port = process.env.PORT;

app.get('/',(req,res) => res.json({hello:'world'}));

app.use(handle.notFound);

app.use(handle.errors)
app.listen(port,console.log('server started on 4000'));

