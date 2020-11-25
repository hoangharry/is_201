import {Router} from 'express'
import {recommend} from './../controllers/controller'
const router: Router = Router();

router.post("/recommend", recommend)
// router.get("/todos", getTodos)

// router.post("/add-todo", addTodo)

// router.put("/edit-todo/:id", updateTodo)

// router.delete("/delete-todo/:id", deleteTodo)

export default router