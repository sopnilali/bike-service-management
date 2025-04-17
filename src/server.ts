import app from "./app";
import config from "./app/config";


const server = async()=> {
    try{
        app.listen(config.port, ()=> {
            console.log(`Bike Service Management Server port ${config.port}`)
        })
    }catch(err){
        console.log(`Example app listening on port ${config.port}`)
    }
}

server();