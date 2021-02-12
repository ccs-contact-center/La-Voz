import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader, Table } from 'reactstrap'


class TemaDiezView extends Component {
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
              <Table bordered dark>
                <thead>
                  <tr>
                    <th colSpan="3" className="text-center">La voz</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td >
                      <p>
                        Expresa y transmite pensamientos, emociones y sensaciones.
                      </p>
                    </td>
                    <td>
                      <p>
                        Transmite una imagen de empresa y profesionalidad.
                      </p>
                    </td>
                    <td>
                      <p>
                        Constituye nuestro medio de relación con el cliente.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDiezView
