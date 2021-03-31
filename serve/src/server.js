var http = require('http');
var router = require('./middleware/router');
const mysql = require('mysql');
const port = 8080;
var pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  port: "3306",
  database: "dbtodo"
});

const citodos = require('./controller/citodos');

const app = router(pool);

app.post('/gettodos', citodos.getTodos);
app.post('/savetodos', citodos.saveTodos);
app.post('/updatecheckbox', citodos.updateCheckTodos);
app.post('/deletetodos', citodos.deleteTodos);

app.listen(port, pool, () => console.log(`Listening on port ${port}!`));
