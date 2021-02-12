import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'
import siete from '../../assets/img/voz/siete.jpg'

class TemaSieteView extends Component {
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
              <ul>
                <li>
                  Comunicación Oral y Escrita:
                </li>
              </ul>
              <p>
                La comunicación oral se produce por el canal auditivo y es la forma de expresión mas común del ser
                humano, sin embargo la comunicación escrita se realiza a través del canal visual y transmite mediante
                la lectura información mas precisa que en la que se produce oralmente.
              </p>
              <div className="centrado-fila">
              <img
                src={siete}
                style={{ width: 200 }}
                alt="siete"
                className="img-fluid  animated  bounceInRight delay-0s"
              />
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaSieteView
