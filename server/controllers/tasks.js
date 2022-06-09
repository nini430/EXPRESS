
const getAllToDos=(req,res)=>{
    res.status(200).send('all items are sent')
}

const createToDo=(req,res)=>{
    res.status(200).json(req.body)
}

const getToDo=(req,res)=>{
    res.status(200).json({success:true,item:req.params.id});
}

const updateTodo=(req,res)=>{
    res.status(200).send("The todo is updated")
}
const deleteTodo=(req,res)=>{
    res.status(200).send("The todo is deleted")
}


module.exports={getAllToDos,createToDo,getToDo,updateTodo,deleteTodo}