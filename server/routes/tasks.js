const express=require("express");
const router=express.Router();
const {getAllTodoItem,createToDoItem,updateToDoItem,deleteAllTodos}=require("../controllers/tasks");


router.route("/").get(getAllTodoItem).post(createToDoItem);
router.route("/:id").put(updateToDoItem).delete(deleteAllTodos);


module.exports=router;



