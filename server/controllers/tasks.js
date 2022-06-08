let todoData=require('../data/data');


const getAllTodoItem=(req,res)=>{
    res.status(200).json({success:true,data:todoData});
}
const createToDoItem=(req,res)=>{
    const {name}=req.body;
    let maxId;
    if(!name) {
        console.log(name);
        return res.status(401).json({success:false,msg:"Input not provided"})
        
    }

    if(todoData.length===0) {
        maxId=1;
        todoData=[...todoData,{id:maxId,task:name,status:false,edit:false}];
        res.status(200).json({success:true,newTodo:{id:maxId,task:name,status:false,edit:false},data:todoData})
    }else{
        let maxIdArr=todoData.map(item=>+item.id);
        maxId=Math.max(...maxIdArr);
        todoData=[...todoData,{id:maxId+1,task:name,status:false,edit:false}];
         res.status(200).json({success:true,newTodo:{id:maxId+1,task:name,status:false,edit:false},data:todoData})
        
    }

    

   
}

const updateToDoItem=(req,res)=>{
    const {id}=req.params;
    const {name}=req.body;
    const todoItem=todoData.find(item=>item.id===+id);
    if(!todoItem) {
        return res.status(401).json({success:false,msg:"no item is found"})
    }

    const newToDoList=todoData.map(todo=>{
        if(todo.id===+id) {
            todo={...todo,task:name}
        }
        return todo;
    })

    res.status(200).json({success:true,data:newToDoList})

}
const deleteAllTodos=(req,res)=>{
    const {id}=req.params;
    const todoItem=todoData.find(item=>item.id===+id);
    if(!todoItem) {
        return res.status(401).json({success:false,msg:"no item is found"})
    }
    const filteredToDoData=todoData.filter(item=>{
        return item.id!==+id;
    })

    todoData=[...filteredToDoData];

    res.status(200).json({success:true,data:filteredToDoData})
}

module.exports={getAllTodoItem,createToDoItem,updateToDoItem,deleteAllTodos};