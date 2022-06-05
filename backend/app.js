import express from 'express';
import {router} from "./router/router.js";
import cors from 'cors'

const PORT = 5000;

const app = express();
app.use(express.json());
app.use(cors({origin:'*', credentials:true, optionSuccessStatus:200}))
app.use('/api',router)

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