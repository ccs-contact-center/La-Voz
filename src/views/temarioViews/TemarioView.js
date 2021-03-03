import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row, Table } from "reactstrap";

class TemarioView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3> Índice</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12 mt-3">
              <Table bordered className="cajaA1">
                <thead style={{ background: "#c52d49" }} className="cajaA1">
                  <tr>
                    <th>
                      {" "}
                      <p
                        className="text-white text-center"
                        style={{ marginBottom: "0px" }}
                      >
                        Habilidades Básicas de Comunicación: “La Voz”

                      </p>
                    </th>
                  </tr>
                </thead>
                <tbody
                  style={{ background: "#c52d49" }}
                  className="cajaA1 text-white"
                >
                  <tr>
                    <td style={{ width: "25%", verticalAlign: "middle" }}>
                      <b> 1. Objetivo </b>

                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>
                      <b>2. Conceptos  básicos de la comunicación</b><br />
                       &nbsp;2.1 Tipos de comunicación<br />
                       &nbsp;2.2 Comunicación Oral y Escrita<br />
                       &nbsp;2.3 Pirámide Invertida de la comunicación <br />
                       &nbsp;2.4 Barreras de la comunicación<br />
                    </td>
                  </tr>
                  <tr>
                    <td>

                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>
                      <b>3. La voz y el Agente  </b>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>
                      <b>4. El uso de la Voz </b>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>
                      <b>5. La fatiga vocal</b>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </CardBody>
      </div>
    );
  }
}
export default TemarioView;
