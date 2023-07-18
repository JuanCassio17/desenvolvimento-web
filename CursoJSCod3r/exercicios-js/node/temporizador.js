// assim como o crom no terminal UNIX, o node também pode fazer execuções de forma agendada

/* 
    Primeiro passo:
    npm i node-schedule@1.3.0 -E
 */

const schedule = require('node-schedule')

// essa tarefa será executada a cada 5 segundos às 20hrs
const tarefa1 = schedule.scheduleJob('*/5 * 20 * * 2', function() {
    console.log('Executando Tarefa 1', new Date().getSeconds());
})

// padrão do node
setTimeout(function() {
    tarefa1.cancel() // cancelando tarefa 1 depois de 20 segundos
    console.log('Cancelando tarefa 1');
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = (new schedule.Range(1, 5))
regra.hour = 20
regra.second = 30

// outra forma de definir
const tarefa2 = schedule.scheduledJobs(regra, function(){
    console.log('Executando Tarefa 2', new Date().getSeconds());
})

// outras funções padrão do javascript
// setImmediate
// setInterval