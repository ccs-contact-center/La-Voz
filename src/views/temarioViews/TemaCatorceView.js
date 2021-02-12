import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader,  } from 'reactstrap'

class TemaCatorceView extends Component {
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
              <div style={{ width: "95px", paddingLeft: "15px", paddingTop: "13px", }} className="border border-danger">
                <p>
                  Elocución:
                </p>
              </div>
              <p className="mt-2">
                Es aquella forma de seleccionar palabras o frases que serán empleadas en un discurso.<br />
                Eliges las palabras y las distribuyes para expresar tu objetivo…
              </p>
            </Col>
            <Col xs="12">
              <div style={{ width: "105px", paddingLeft: "15px", paddingTop: "13px", }} className="border border-danger">
                <p>
                  Articulación:
                </p>
              </div>
              <p className="mt-2">
                Por articulación entendemos la <b>pronunciación clara y distinta</b> de las palabras y tiene que ver con la
                posición de los órganos de la voz para la pronunciación correcta de una vocal o consonante.
                Una pronunciación a medias dan como resultado una pobre expresión oral.
              </p>
            </Col>
            <Col xs="12">
              <div style={{ width: "225px", paddingLeft: "15px", paddingTop: "13px", }} className="border border-danger">
                <p>
                Ejemplo de Mala Articulación:
                </p>
              </div>
              <p className="mt-2">
                 PERSONA 1  	 Oe, ontá Pedro.<br/>
                 PERSONA 2 	¿Pa’qué lo buscas?<br/>
                 PERSONA 1	 Pa’ darle un candao que me dejó su cuñao.<br/>
                 PERSONA 2	 El tá en cama, tá enfermo.<br/>
                 PERSONA 1	¿Oe, pero ta’ bien o ta’ mal?
              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaCatorceView
