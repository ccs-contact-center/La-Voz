import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader,  } from 'reactstrap'

class TemaDieciochoView extends Component {
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
                <b>La fatiga vocal</b>
              </h2>
            </Col>
            <Col xs="12">
              <p>
                La mayor parte de los trabajadores que se dedican al Marketing telefonico tienen riesgo de sufrir
                fatiga vocal.
              </p>
              <p>
                Agentes perjudiciales para la voz:
              </p>
              <p>
                <b>Externos</b>: Tabaco, Alcohol, Catarros, Polución, Alergias, etc.
              </p>
              <p>
                <b>Internos</b> : Forzar la voz, Gritar, Respirar por la boca.
              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDieciochoView
