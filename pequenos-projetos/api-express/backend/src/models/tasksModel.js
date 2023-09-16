const connection = require('./connection')

const getAll = async () => {
    const [tasks] = await connection.execute("SELECT * FROM tasks_tb");
    return tasks;
};

const createTask = async (task) => {
    const {titleTask} = task;

    const query = 'INSERT INTO tasks_tb (task) VALUES (?)'
    const [createdTask] = await connection.execute(query, [titleTask])

    /*
    inserindo valores de data 1:00:06
    const dateUTC = new Date(Date.now()).toUTCString();
    const createdTask = await connection.execute(query, [task], [dateUTC])
     */
    
    return createTask;
}

const deleteTask = async (id) => {
    
    const query = 'DELETE FROM tasks_tb WHERE id = ?'
    const [removedTask] = await connection.execute(query, [id]);

    return removedTask;
};



const updateTask = async (id, task) => {
    const { titleTask } = task;
    
    const query = 'UPDATE tasks_tb set task = ? WHERE id = ?'
  
    const [updatedTask] = await connection.execute(query, [titleTask, id]);
    return updatedTask;
  };



module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
};