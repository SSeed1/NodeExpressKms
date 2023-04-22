 
import express, { Request,Response } from 'express';
const app = express();
const port = process.env.PORT || 5000;

app.get('/',(req : Request  ,res : Response) => {
    let helloWorld = 'hello world';
    res.send(helloWorld);
})

app.get('/post',(req : Request ,res : Response ) => {
    const arr = ['123',1123,'Vlad',{
        age: '23',

    }]
    res.send(arr);
})

app.get('/users',(req : Request ,res : Response) => {
    res.send('123');
})

app.listen(port,() => {
    console.log(`app listen port: ${port}`)
})