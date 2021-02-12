import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

class PresentacionView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3> Conclusión</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12" sm="12" md="12">
              <p>
                <b>Recuerda</b>:
              </p>
              <p>
                La voz es tu herramienta de trabajo.
              </p>
              <p>
                Por medio de la voz puedes transmitir sentimientos, ideas y pensamientos.
              </p>
              <p>
                Tu voz es la mejor etiqueta de la empresa a la que representamos.
              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default PresentacionView
