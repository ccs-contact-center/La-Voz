import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'
import bienvenida from '../../assets/img/voz/cinco.png'

class TemaCincoView extends Component {
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
            <Col xs="12" className="centrado-fila">
            <img
                src={bienvenida}
                style={{ width: 600 }}
                alt="bienvenida"
                className="img-fluid  animated  bounceInRight delay-0s"
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaCincoView
