import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader,  } from 'reactstrap'
import trece from '../../assets/img/voz/trece.jpg'
import trece2 from '../../assets/img/voz/trece-2.jpg'

class TemaTreceView extends Component {
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
                <b>La Voz y el Agente</b>
              </h2>
            </Col>
            <Col xs="12">
              <p>
                <b>
                  ¿Por que la importancia de controlar el Ritmo?
                </b>
              </p>
              <p>
                <b>
                  ¿Qué impresión te darían los siguientes asesores?
                </b>
              </p>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="6" className="centrado-fila">
              <p><b>Asesor 1</b></p>
            </Col>
            <Col xs="6" className="centrado-fila">
              <p><b>Asesor 2</b></p>
            </Col>
            <Col xs="6" className="centrado-fila">

              <img
                src={trece}
                style={{ width: 200 }}
                alt="trece"
                className="img-fluid  animated  bounceInRight delay-0s"
              />
            </Col>
            <Col xs="6" className="centrado-fila">
              <img
                src={trece2}
                style={{ width: 200 }}
                alt="trece2"
                className="img-fluid  animated  bounceInRight delay-1s"
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaTreceView
