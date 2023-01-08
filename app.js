const express = require('express');
const app = express();
const port = 4680;
// const connectDB = require('./db/connect');
require('dotenv').config();
const tasks = require('./routes/task-route');
const notFound = require('./middleware/not-found');





app.use(express.json());
// app.use(notFound);
// app.use(express.static('./public'));



app.get("/", (req, res)=>{
    res.send("working....");
});

app.use('api/v1/tasks', tasks);

const start = async () => {
    try {
        // await connectDB(process.env.MONGO_URL)
        app.listen(port, ()=>{
            console.log(`port listening to ${port}`);
        });
        
    } catch (error) {
        console.log(error);
    }
}

start();

