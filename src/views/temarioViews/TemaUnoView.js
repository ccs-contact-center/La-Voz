import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import uno from '../../assets/img/voz/uno.jpg'

class TemaUnoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3> Habilidades Básicas de Comunicación “La Voz”</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12 mt-3">
              <h2
                className="animated slideInUp delay-0 mb-2"
                style={{ marginBottom: '0px' }}
              >
                <b>Conceptos básicos de la comunicación</b>
              </h2>
            </Col>
            <Col xs="12" className="text-justify">
              <p>La  Comunicación es la transmisión de un mensaje de un emisor a un receptor mediante la utilización 
                de un codigo conocido por ambos y con un objetivo determinado.  </p>
             
            </Col>
            <Col className="centrado-fila">
            <img
                src={uno}
                style={{ width: 500 }}
                alt="uno"
                className="img-fluid  animated  bounceInRight delay-2s"
              /></Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaUnoView
