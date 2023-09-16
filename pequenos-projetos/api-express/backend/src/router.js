const express = require('express')

const router = express.Router();

const taskController = require('./controllers/taskController')
const tasksMiddleware = require('./middlewares/tasksMiddlewares')


router.get('/tasks', taskController.getAll);
router.post('/tasks', tasksMiddleware.validateFieldTitle, taskController.createTask)
router.delete('/tasks/:id', taskController.deleteTask)
router.put('/tasks/:id',
  tasksMiddleware.validateFieldTitle,
  taskController.updateTask,
);

module.exports = router;