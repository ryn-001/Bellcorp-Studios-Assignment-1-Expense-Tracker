const mongoose = require("mongoose");

async function connectDatabase(server){
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Database connected successfully !');

        server.listen(process.env.PORT, () => {
            console.log('Server running on PORT : ' + process.env.PORT);
        })
    }catch(error){
        console.log('An error occured : ' + error)
    }
}

module.exports = connectDatabase;