import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader,  } from 'reactstrap'

class TemaOnceView extends Component {
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
              <p>El uso de la Voz:</p>
            </Col>
            <Col xs="12">
              <div style={{ width: "70px", paddingLeft: "15px", paddingTop: "13px", }} className="border border-danger">
                <p>
                  Tono:
                </p>
              </div>
              <p className="mt-2">
                Tono es la inflexión de la voz y modo particular de decir una cosa, según la intención o el estado
                de ánimo de quien habla.
              </p>
            </Col>
            <Col xs="12">
              <div style={{ width: "140px", paddingLeft: "15px", paddingTop: "13px", }} className="border border-danger">
                <p>
                  Ejercicios Tono:
                </p>
              </div>
              <p className="mt-2">
                Yo nací en esta ciudad. <br />
                Yo nací en esta ciudad.<br />
                Yo nací en esta ciudad. <br />
                Yo nací en esta ciudad.<br />
                Yo nací en esta ciudad.
              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaOnceView
