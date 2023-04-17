 
import express, { Request,Response } from 'express';
const app = express();
const port = 3001;

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

app.listen(port,() => {
    console.log(`app listen port: ${port}`)
})