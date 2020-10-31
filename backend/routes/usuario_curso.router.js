const express=require('express');
const router=express.Router();

const userCurso=require('../controller/usuario_curso.controller');

router.get('/:id',userCurso.getUsuarioCurso);
router.post('/detalleCurso',userCurso.getDetalleCurso);
router.post('/agregar',userCurso.agregaUsuarioCurso);
module.exports=router;
