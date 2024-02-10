import dotenv from "dotenv"
import MongoDBconnection from "./db/index.js";


dotenv.config({
    path:'./env'
})


MongoDBconnection();

