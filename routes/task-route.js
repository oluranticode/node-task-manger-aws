const express = require('express');

const router = express.Router();

const {getTasks, createTask, singleTask, updateTask, deleteTask} = require('../controllers/task-controller');

router.route('/').get(getTasks).post(createTask);
router.route('/:id').get(singleTask).patch(updateTask).delete(deleteTask);



module.exports = router