import express from 'express'
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from 'body-parser';


dotenv.config();

const app= express();


app.use(cors({
    credentials:true,
    origins: 'http://localhost:5000'
}));

app.use(bodyParser.json({ limit: '5gb' }));
app.use(bodyParser.urlencoded({ limit: '5gb', extended: true }));


app.use('public', express.static(new URL('./public', import.meta.url).pathname));
app.use(express.static('public', { extensions: ['html', 'css','js'], }));



app.use((req, res, next) => {
    res.status(404).redirect('/');
});


app.listen(process.env.APP_PORT,()=>{
    console.log('prendio')
});