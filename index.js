const express = require('express');
const morgan = require('morgan');

require('dotenv').config('./env');
const app = express();
app.use(morgan('dev'));


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(require('./router'))

app.set('port', process.env.PORT ||5000);

app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`)
})