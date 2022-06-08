const express=require("express");
const app=express();
const port=3000;
const todoRoute=require("./routes/tasks");


app.use(express.json());
app.use(express.static("../public"))
app.use("/api/v1/todos",todoRoute);
app.listen(port,console.log(`server is listening to the port ${port}`));







