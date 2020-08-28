const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'dbsamines',
    database: 'soap_fase2'
});

exports.connection = connection;

// Comprobar conexion
exports.connect = function(){
    connection.connect(function(err){
        if(!err) {
            console.log('Conexión Establecida con la base de datos');
            return true;
        } else {
            console.log("Error:", err);
            return err;
        }
    });
};