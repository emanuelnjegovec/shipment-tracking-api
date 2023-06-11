const taskRepository  = require('./task.repository');

class TaskService {

    constructor() {}

    async getTasks(id) {
        return await taskRepository.getTasks(id);
    }

    async createTask(task) {
        return await taskRepository.createTask(task);
    }

    async updateTask(task) {
        return await taskRepository.updateTask(task);
    }

    async deleteTask(taskId) {
        return await taskRepository.deleteTask(taskId);
    }

}

module.exports = new TaskService();