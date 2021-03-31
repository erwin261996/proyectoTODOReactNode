let controller = {};

// Controlador el cual tenemos una llamada de Datos
controller.getTodos = (req, res, pool) => {
    pool.getConnection(function(err, connection) {
      if (err) console.log(err)
      connection.query('call sp_todo(1,0,"",0)', function(err, result) {
        if (err) {
            res.send(JSON.stringify(err));
        } else {
            res.send(JSON.stringify(result[0]));
            connection.release();
        }
      });
    });
}

// Controlador que hace la ejecucion de un Insert
controller.saveTodos = (req, res, pool) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    }).on('end', () => {
        const {cod, texto, valicompl} = JSON.parse(body);
        pool.getConnection(function(err, connection) {
            if (err) console.log(err)
            connection.query('call sp_todo(2,?,?,?)', [cod, texto, valicompl], function(err, result) {
              if (err) {
                  res.send(JSON.stringify(err));
              } else {
                  res.send(JSON.stringify(result[0]));
                  connection.release();
              }
            });
        });
    });
}

// Controlador que actualiza el CheckBox de la lista
controller.updateCheckTodos = (req, res, pool) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    }).on('end', () => {
        const {codigo, active} = JSON.parse(body);
        pool.getConnection(function(err, connection) {
            if (err) console.log(err)
            connection.query('call sp_todo(3,?,"",?)', [codigo, active], function(err, result) {
              if (err) {
                  res.send(JSON.stringify(err));
              } else {
                  res.send(JSON.stringify(result[0]));
                  connection.release();
              }
            });
        });
    });
}

// Controlador que elimina un elemento de la lista
controller.deleteTodos = (req, res, pool) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    }).on('end', () => {
        const {cod} = JSON.parse(body);
        pool.getConnection(function(err, connection) {
            if (err) console.log(err)
            connection.query('call sp_todo(4,?,"",0)', [cod], function(err, result) {
              if (err) {
                  res.send(JSON.stringify(err));
              } else {
                  res.send(JSON.stringify(result[0]));
                  connection.release();
              }
            });
        });
    });
}


module.exports = controller;