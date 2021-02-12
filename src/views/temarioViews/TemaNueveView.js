import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'
import nueve from '../../assets/img/voz/nueve.jpg'

class TemaNueveView extends Component {
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
                <b>La voz</b>: elemento fundamental de la comunicación telefónica.
             </p>
              <p>
                <b>
                  Todo Agente utiliza su voz como medio de trabajo y por tanto la Voz se convierte en un aspecto a
                  cuidar y proteger.
               </b>
              </p>
              <p>
                La voz, bien utilizada es capaz de expresar y transmitir una infinidad de emociones, sensaciones y
                matices diferentes. Esto hace el mensaje mas atractivo e impactante para la gente que lo escucha.
              </p>
              <div className="centrado-fila">
                <img
                  src={nueve}
                  style={{ width: 200 }}
                  alt="nueve"
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
export default TemaNueveView
