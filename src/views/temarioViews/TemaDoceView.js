import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader,  } from 'reactstrap'

class TemaDoceView extends Component {
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
              <div style={{ width: "80px", paddingLeft: "15px", paddingTop: "13px", }} className="border border-danger">
                <p>
                  Timbre:
                </p>
              </div>
              <p className="mt-2">
                Es la principal seña de <b>identidad</b> que presenta cualquier sonido y lo que nos permite, al percibirlo,
                diferenciar de otro aunque ambos presenten el mismo tono y la misma intensidad.
              </p>
            </Col>
            <Col xs="12">
              <div style={{ width: "105px", paddingLeft: "15px", paddingTop: "13px", }} className="border border-danger">
                <p>
                  Intensidad:
                </p>
              </div>
              <p className="mt-2">
                Es el <b>volumen</b> que se mide en decibelios y que determina las <b>voces fuertes y las voces flojas</b>.
              </p>
            </Col>
            <Col xs="12">
              <div style={{ width: "75px", paddingLeft: "15px", paddingTop: "13px", }} className="border border-danger">
                <p>
                  Ritmo:
                </p>
              </div>
              <p className="mt-2">
                Son las <b>variaciones de velocidad</b> de la palabra o frase. Es la <b>velocidad</b> con la que 
                nos expresamos.
              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDoceView
