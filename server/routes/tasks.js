
const express=require('express');
const router=express.Router();

const {getAllToDos,createToDo,getToDo,updateTodo,deleteTodo}=require('../controllers/tasks');

router.get("/",getAllToDos);
router.post("/",createToDo);
router.get("/:id",getToDo);
router.patch("/:id",updateTodo);
router.delete("/:id",deleteTodo);

module.exports=router;




