const mongoose = require("mongoose");
const secretENV = process.env.RABBITHOLE;

const connect = async () => {
  try {
    const conn = await mongoose.connect(
      secretENV,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      },
      console.log("db Connected")
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;
