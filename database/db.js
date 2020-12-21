const mongoose = require('mongoose')

const connectDB = async () => {
  try{
    await mongoose.connect('mongodb+srv://aulia-mernapp:aulia-mernapp@mern-app.etnz4.mongodb.net/<dbname>?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
    console.log('Database connection success')

  }catch (err){
    console.log(err);
  }
}

module.exports = connectDB;