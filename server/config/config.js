const mongoose=require("mongoose");
require("colors")
const connectDb= async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI
            // useUnifiedTopology:true,
            // useNewUrlParser:true,
            // useCreateIndex:true
        );
        console.log(`mongoDb Connected ${conn.connection.host}`.yellow)
    }
    catch(err){
      console.error("error",err.massage.red);
      process.exit(1);
    }
}

module.exports=connectDb;