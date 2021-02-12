import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader,  } from 'reactstrap'

class TemaQuinceView extends Component {
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

                Aquí vemos, como muchas consonantes son omitidas y como muchas vocales al unirse producen un sonido
                cacofónico que muchas veces no son entendidas con facilidad por los oyentes.<br /><br />

                Esta expresión es pobre y desagradable. Por ello, tengamos presente que articular bien, es pronunciar
                distintamente todas las consonantes y vocales; articular bien nos permite, entre otras cosas, hacernos
                comprender con claridad, incluso cuando hablamos en voz baja.<br /><br />

                Una buena articulación proporciona la debida comprensión de lo que se diga, lo cual constituye la mejor
                manera de mantener y desarrollar el interés de los oyentes hacía nuestro mensaje.

              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaQuinceView
