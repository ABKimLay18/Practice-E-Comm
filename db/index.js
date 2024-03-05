import { connect } from "mongoose";

const db = ()=>{
    connect(process.env.MONGO_URI).then(()=>{
        console.log('Database is Connected');
    }).catch((error)=>{
        console.log(error);
    })
}

export default db;