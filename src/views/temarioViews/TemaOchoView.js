import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'


class TemaOchoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          {/* <h3> Habilidades Básicas de Comunicación “La Voz”</h3> */}
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12 mt-3">
              <h1
                className="animated slideInUp delay-0 mb-2 text-center"
                style={{ marginBottom: '0px' }}
              >
                <b>3. La voz y el agente</b>
              </h1>
            </Col>
           
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaOchoView
