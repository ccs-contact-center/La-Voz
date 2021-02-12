import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'

class TemaDosView extends Component {
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
                <b>EMISOR</b>
              </p>
              <ul>
                <li className="mt-3">
                  Prejuzgar o Presuponer.
                </li>
                <li>
                  Elaborar un mensaje poco claro.
                </li>
                <li>
                  Escasa capacidad de comunicación.
                </li>
                <li>
                  Desconocimiento del producto.
                </li>
                <li>
                  No vocalizar.
                </li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
