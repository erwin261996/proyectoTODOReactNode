const http = require('http');
var connect = require('connect');
var cors = require('cors')

module.exports = (() => {
  let routes = [];

  /** Añadimos las rutas que utilizaremos en nuestro caso son
    * metodos GET, POST
    */
  const addRoute = (method, url, handler) => {
    routes.push({ method, url, handler });
  };
  
  const findRoute = (method, url) => {
    return routes.find(route => route.method === method && route.url === url);
  }
  
  // Establecemos la salidas por los diferentes metodos
  const router = () => {
    const get = (route, handler) => addRoute('get', route, handler);
    const post = (route, handler) => addRoute('post', route, handler);
    
    const listen = (port, pool, cb) => {
      /** Utilizamos connet para incorporar CORD
       * sin esto, nosotros no podemos hacer una petición
       * porque el envio de los datos se bloquean, es por eso el CORD.
       * */
      var app = connect()
        .use(cors())
        .use(function(req, res){
          const method = req.method.toLowerCase();
          const url = req.url.toLowerCase();
          const found = findRoute(method, url);

          const headers = {
            "Content-Type": "application/json"
          };
        
          if (found) {
            res.send = content => {
              res.writeHead(200, headers);
              res.end(content);
            };
            return found.handler(req, res, pool);
          }
          
          // Si la ruta no esta declarada, entonces manda un error
          res.writeHead(404, headers);
          res.end('Route not found.');

        });

      // Salida del Servidor
      http.createServer(app).listen(port, cb);
    };

    return {
      get,
      post,
      listen
    };
  };

  return router;
})();