const { default: mongoose } = require("mongoose")

exports.databaseConnect = function dbConnect(){
    mongoose.connect(process.env.DATABASE).then(()=>{
        console.log(`Database connected successfully`.bgGreen);
    });
};