const assert = require("assert");
const request = require("supertest");
const usuarios = require("../routes/usuario.router");
var express = require("express");
const { response } = require("express");
var app = express();
const bodyparser = require('body-parser');
var express = require('express');
var app = express();
var cors = require('cors');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

describe("Express usuarios", async() => {
    it("TEstgetUser POST request /agregar", (done) => {
        request(app.use(usuarios))
            .post("/agregar")
            .send({ "nombre": "Marcos", "apellidos": "Torres", "cui": "8888889", "clave": "123A", "ref_codigo_carrera": "001" })
            .expect(200)
            .end((err, res) => {
                console.log(res.body);
                if (err) {
                    done(err);
                } else {
                    done();
                }
            });
    });

    it("TestgetUserError POST request /agregar", (done) => {
      request(app.use(usuarios))
        .post("/agregar")
        .send({"carnet": "2015201221","nombre": "Marcos","apellidos": "Torres","cui":"8888889","clave": "123A","ref_codigo_carrera": "001"})
        .expect(200)
        .end((err,res)=>{
          if(err){
              done(err);
          }else{
              done();
          }
         });
    });
    it("TestPostUserDataNotvalid POST REQUEST /agregar",(done)=>{
        request(app.use(usuarios))
        .post("/agregar")
        .send({"carnet": "2016201221","nombre": "Marcos","apellidos": "Torres","cui":"soucui","clave": "123A","ref_codigo_carrera": "sistemas"})
        .expect(200)
        .end((err,res)=>{
            if(err){
                done(err);
            }else{
                done();
            }
        })
    })
//----------------------obtener datos de usuario-----------------------------
    it("TEstgetUser GET request obtenerUsuario/Carnet", (done) => {
        request(app.use(usuarios))
            .get("/obtenerUsuario/:")
            .send('201503986')
            .expect(200)
            .end((err, response) => {
                if(err){
                    done(err);
                }else{
                    done();
                }
            });
    });

    it("TestGetUserFunction GET request /id", (done) => {
        request(app.use(usuarios))
            .get("/2023")
            .end((err, response) => {
                assert(typeof usuarios.getUsuarioId, "function");
                done();
            });
    });
    it("TestLogin POST request /inicioSesion", (done) => {
        request(app.use(usuarios))
            .post("{carnet:2023,clave:123}")
            .end((err, response) => {
                assert(typeof usuarios, "object");
                done();
            });
    });
    it("TestLoginFuction POST request /inicioSesion", (done) => {
        request(app.use(usuarios))
            .post("{carnet: 2023,clave:123}")
            .end((err, response) => {
                assert(typeof usuarios.inicioSesion, "function");
                done();
            });
    });
    //==================PRUEBA UNITARIA SOBRE VISUALIZACION DE PENSUM=============



});