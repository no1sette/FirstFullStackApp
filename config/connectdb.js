const mongoose = require("mongoose");

const connect = ()=>{
    try {
        const conn = mongoose.connect(process.env.RABBITHOLE, {useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify: false,});
    } catch (error) {
        console.log(error);
    }
}

module.exports = connect;