const Task = require('../models/task-model');
const {throwAnError} = require('../error/custom-error');

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
       
        if(!tasks){
            throwAnError();
            res.status(500).json({msg : error.message})
        }
        res.status(200).json({ tasks });
    } catch (error) {
        console.log(error);
    }
}

const createTask = async (req, res) => {
    try {
        const tasks = await Task.create(req.body);
        
        if(!tasks){
            throwAnError();
            res.status(500).json({msg : error.message})
        }
        res.status(200).json({ tasks });
    } catch (error) {
        console.log(error)
    }
}

const singleTask = async (req, res) => {
    try {
        const {id:taskID} = req.params;
        const tasks = await Task.findOne({_id:taskID});
        
        if(!tasks){
            // throwAnError();
            return res.status(404).json({ msg : `there is no task id : ${taskID}` })
        }
        res.status(200).json({ tasks });
    } catch (error) {
        console.log(error)
    }
}

const updateTask = async (req, res) => {
    try {
        const {id:taskID} = req.params;
        const tasks = await Task.findOneAndUpdate({_id:taskID}, req.body, {new:true, runValidators:true});
        
        if(!tasks){
            // throwAnError();
            return res.status(404).json({ msg : `there is no task id : ${taskID}` })
        }
        res.status(200).json({ tasks });
    } catch (error) {
        console.log(error)
    }
}

const deleteTask = async (req, res) => {
    try {
        const {id:taskID} = req.params;
        const tasks = await Task.findOneAndDelete({_id:taskID});
        
        if(!tasks){
            // throwAnError();
           return res.status(404).json({ msg : `there is no task id : ${taskID}` })
        }
        res.status(200).json({ tasks });
    } catch (error) {
        console.log(error)
    }
}



module.exports = {deleteTask, getTasks, updateTask, createTask, singleTask }