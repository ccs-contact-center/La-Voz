import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'

class TemaCuatroView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3> Habilidades Básicas de Comunicación “La Voz”</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12 mt-3">
              <h2
                className="animated slideInUp delay-0 mb-2"
                style={{ marginBottom: '0px' }}
              >
                <b>Conceptos básicos de la comunicación</b>
              </h2>
            </Col>
            <Col xs="12">
              <p>Barreras de la Comunicación:</p>
              <p>
                <b>MEDIO</b>
              </p>
              <ul>
                <li className="mt-3">
                  Distancia Espacial.
                </li>
                <li>
                  Ruidos.
                </li>
                <li>
                  Interferencias.
                </li>
                <li>
                  6
                </li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaCuatroView