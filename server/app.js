const express=require('express');
const app=express();
const port=5000;
const todos=require("./routes/tasks");


app.use(express.json());
app.use("/api/v1/todos",todos);




app.listen(port,console.log(`server is listening to the port ${port}`));









