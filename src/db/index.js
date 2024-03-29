import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



const MongoDBconnection = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
       console.log(`MONGODB CONNECTED ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("ERROR:",error);
        process.exit(1)
    }
}

export default MongoDBconnection