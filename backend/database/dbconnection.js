import mongoose from 'mongoose';

const dbconnection = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "restaurant"
    }).then(()=>{
        console.log('Mongodb connected succefully')
    }).catch(err=>{
        console.log(`mongodb not connected error ${err}`)
    })
}


export default dbconnection;