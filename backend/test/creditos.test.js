const bodyparser = require('body-parser');
const assert = require("assert");
const request = require("supertest");
const creditos =require("../routes/creditos.route");
var express = require('express');
var app = express();
var cors = require('cors');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

describe("Pruebas unitarias para creditos ", async() => {
   //--------------------------pruebas para credito-----
   it("TestCursodetalle GET request /creditosPorcentaje", done => {
    request(app.use(creditos))
    .get("/creditosPorcentaje/2015")
    .expect(200)
    .end((err, res) => {
            if (err) {
                done(err);
            } else {
                done();
            }
        });
    });
    it("TestCreditoParameterNotValid GET request /creditosPorcentaje", done => {
        request(app.use(creditos))
        .get("/creditosPorcentaje/n")
        .expect(200)
        .end((err, res) => {
                if (err) {
                    done(err);
                } else {
                    done();
                }
            });
        });
        it("TestCreditoParameterVacio GET request /creditosPorcentaje", done => {
        request(app.use(creditos))
        .get("/creditosPorcentaje/")
        .expect(404)
        .end((err, res) => {
            if (err) {
                done(err);
            } else {
                done();
                }
            });
        });
    //----------creditos para suma -----
    it("TestCreditoSuma GET request /creditosSuma/:carnet", done => {
        request(app.use(creditos))
        .get("/creditosSuma/2020")
        .expect(200)
        .end((err, res) => {
            if (err) {
                done(err);
            } else {
                done();
                }
            });
        });
        it("TestCreditoSumaParamterNotValid GET request /creditosSuma/:carnet", done => {
        request(app.use(creditos))
        .get("/creditosSuma/n")
        .expect(200)
        .end((err, res) => {
                if (err) {
                    done(err);
                } else {
                    done();
                    }
                });
        });
        it("TestCreditoParamaterVacio GET request /creditosSuma/:carnet", done => {
            request(app.use(creditos))
            .get("/creditosSuma/ ")
            .expect(404)
            .end((err, res) => {
                    if (err) {
                        done(err);
                    } else {
                        done();
                        }
                    });
            });
})