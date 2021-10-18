const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        const conn = await mongoose.connect('mongodb+srv://srikanrh_rao:63moons@cluster0.kxpwv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true,
             })
        console.log('MongoDB Connected')
    }catch (err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB