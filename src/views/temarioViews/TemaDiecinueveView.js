import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader,  } from 'reactstrap'


class TemaDiecinueveView extends Component {
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
                <b>
                  ¿Como podemos prevenir la fatiga vocal?
                </b>
              </p>
              <ul>
                <li>
                  Evitar consumo de Alcohol.
               </li>
                <li>
                  Evitar tomar bebidas demasiado frías o demasiado calientes.
               </li>
                <li>
                  Tomar abundante agua al día.
               </li>
                <li>
                  No fumar.
               </li>
                <li>
                  Evitar cambios bruscos de temperatura.
               </li>
                <li>
                  Evitar el abuso o mal uso de la voz.
               </li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDiecinueveView
