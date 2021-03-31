El proyecto esta dividido como API con NodeJS y en Front con React

1. App

En la Aplicación de React primero hay que seguir los siguientes pasos
    - npm i
    - npm start

2. Serve

En la Aplicacion Backend con Node tenemos que montar la Base de Datos
que se encuentra en la carpeta nombrada "sql", porteriormente tendremos que verificar que la conexion del serve con MySQL es correcto, esto lo hacemos desde el archivo "server.js" verificando el codigo de conexión de la misma

var pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  port: "3306",
  database: "dbtodo"
});

Ahora bien, Ya una ves teniendo la configuración.. Procedemos a ejecutar los siguientes comandos en la misma carpera serve
 - npm i
 - npm start

3. Una ves teniendo la API corriendo al lado del Backend asi como tambien, tenemos corriendo ReactJS al lado del Frontend.

4. Solo nos queda probar la Aplicación TODO