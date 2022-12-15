const mongoose = require('mongoose');

let count = 0;

const options = {
    autoIndex:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
}

const connectWithRetry = ()=>{
        console.log('Mongo connection with retry');
        mongoose.connect('mongodb://toniMongodb:mystoredb@127.0.0.1:27017/mystore', options).then(()=>{
            console.log('Mongo is connected');

        }).catch(error=>{
            console.log('Mongo connection unsuccesful, retry after 5 seconds.', ++count);
            console.log('Mongo connection error: ', error);
            setTimeout(connectWithRetry, 5000);
        })
}

connectWithRetry();
exports.mongoose = mongoose;