const userCourseCtrl={};
const mysqldb=require('../database');

userCourseCtrl.getUsuarioCurso=async function(req,res,next){
    const {id}=req.params;
    const sql=`SELECT usuario.nombre,usuario.carnet,`+
    `curso.nombre_curso,curso.creditos,`+
    `usuario_curso.estado `+
    `from usuario_curso `+
    `INNER JOIN usuario ON usuario_curso.ref_carnet=usuario.carnet `+
    `INNER JOIN curso ON  usuario_curso.ref_codigo_curso=codigo_curso `+
    `WHERE usuario.carnet = '${id}'`;
    console.log(sql);
        mysqldb.connection.query(sql, (error, results) => {
        if(error) throw error;
        if(results.length >= 0){
            res.json(results);
        } else {
            res.send('No hay resultados');
        }
    });
}
userCourseCtrl.getDetalleCurso=async function(req,res,next){
    const objeto={
        carnet:req.body.carnet,
        codigo_curso:req.body.codigo_curso
        }
    const sql=`SELECT usuario.nombre,usuario.carnet,`+
    `curso.nombre_curso,curso.creditos,`+
    `usuario_curso.estado `+
    `from usuario_curso `+
    `INNER JOIN usuario ON usuario_curso.ref_carnet=usuario.carnet `+
    `INNER JOIN curso ON  usuario_curso.ref_codigo_curso=codigo_curso `+
    `WHERE usuario.carnet=${req.body.carnet} `+
    `and curso.codigo_curso=${req.body.codigo_curso}`;

        mysqldb.connection.query(sql, [req.body.carnet,req.body.codigo_curso],(error, results) => {         
            if(error) throw error;
            if(results.length >= 0){
                    res.json(results);
            } else {
                res.send('No hay resultados');
            }
        });
}
module.exports=userCourseCtrl;