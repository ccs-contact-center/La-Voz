import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";


class ObjetivoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Objetivo</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12" sm="12" md="11" lg="10">
              <div className="align-middle animated rubberBand delay-0s">
                <p className="cajaRoja text-center">
                  El participante entrenara habilidades de comunicación necesarias para generar satisfacción a los
                  clientes atendidos.
                </p>
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    );
  }
}
export default ObjetivoView;
