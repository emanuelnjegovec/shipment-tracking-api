const { connect } = require('./db.config');
//const logger = require('../logger/api.logger');


class TaskRepository {

    db = {};

    constructor() {
        this.db = connect();
        // For Development
        this.db.sequelize.sync().then(() => {
            console.log("sync db.");
        });
    }

    async getTasks(id) {
        if (id === undefined) {
            try {
                const tasks = await this.db.tasks.findAll();
                console.log('tasks:::', tasks);
                return tasks;
            } catch (err) {
                console.log(err);
                return [];
            }
        }
        else {
            try {
                console.log('here');
                const tasks = await this.db.tasks.findAll({
                    where: {
                        shipmentid: id
                    }
                });
                console.log('tasks:::', tasks);
                return tasks;
            } catch (err) {
                console.log(err);
                return [];
            }
        }
        
    }

    async createTask(task) {
        let data = {};
        try {
            task.createdate = new Date().toISOString();
            data = await this.db.tasks.create(task);
        } catch(err) {
            console.log(err);
            //logger.error('Error::' + err);
        }
        return data;
    }

    async updateTask(task) {
        let data = {};
        try {
            task.updateddate = new Date().toISOString();
            data = await this.db.tasks.update({...task}, {
                where: {
                    id: task.id
                }
            });
        } catch(err) {
            console.log(err);
            //logger.error('Error::' + err);
        }
        return data;
    }

    async deleteTask(taskId) {
        let data = {};
        try {
            data = await this.db.tasks.destroy({
                where: {
                    id: taskId
                }
            });
        } catch(err) {
            console.log(er);
            //logger.error('Error::' + err);
        }
        return data;
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new TaskRepository();