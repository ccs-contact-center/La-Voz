import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader,  } from 'reactstrap'

class TemaDieciseisView extends Component {
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
              <div style={{ width: "195px", paddingLeft: "15px", paddingTop: "13px", }} className="border border-danger">
                <p>
                  Ejercicios Articulación:
                </p>
              </div>
              <ul className="mt-2">
                <li>
                  Lleve los labios hacia atrás pronunciando mentalmente la vocal “i” y luego llévelos hacia delante
                  pronunciando la vocal “u”, hacerlo rápidamente durante treinta segundos, ayuda a fortalecer los
                  músculos de la boca para una correcta vocalización.
               </li>
                <li>
                  Realice movimientos circulares con la lengua por la paredes internas de la boca, como sacando
                  chocolate alojado en las encías. Hágalo durante 30 segundos
               </li>
                <li>
                  Realice la siguiente gimnasia vocálica.
               </li>
              </ul>
              <p className="text-center">
                AA - AE - AI - AO - AU<br />
                 EA - EE - EI - EO - EU<br />
                 IA - IE - II - I O - IU<br />
                 OA - OE - OI - OO - OU<br />
                 UA - UE - UI - UO – UU
              </p>
            </Col>
            <Col xs="12">
              <div style={{ width: "105px", paddingLeft: "15px", paddingTop: "13px", }} className="border border-danger">
                <p>
                  Impostación:
                </p>
              </div>
              <p className="mt-2">
                Impostar es <b>fijar el sonido</b> en las cuerdas vocales <b>para emitir el sonido en su plenitud sin
                vacilación, ni temblor</b>. Hablar con la voz impostada es hablar sin esfuerzo con naturalidad.
              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDieciseisView
