import express from 'express';

const PORT = 5000;

const app = express();
app.use(express.json());

const start = async () => {
    try{
        app.listen(PORT, () => {
            console.log('server started')
        })
    }
    catch (e){
        console.log(e.message)

    }
}
start()