import React, { Component } from "react";
import {
  Row,
  Col,
  ListGroup,
  Badge,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import Swal from "sweetalert2";

export default class TroleyComponent extends Component {
  render() {
    return (
      <Col>
        <h4>
          <strong>TROLEY</strong>
        </h4>
        <hr />
        <ListGroup variant="flush">
          {this.props.Troley.map((item, b) => (
            <ListGroup.Item key={b}>
              <Row>
                <Col xs={3}>
                  <h4>
                    <Badge pill variant="success" className="ml-3">
                      {item.jumlah}
                    </Badge>
                  </h4>
                  <div>
                    <ButtonGroup className="horizontal">
                      <Button onClick={() => this.props.KeluarTroley(item)}>
                        -
                      </Button>
                      <Button onClick={() => this.props.MasukTroley(item)}>
                        +
                      </Button>
                    </ButtonGroup>
                  </div>
                </Col>
                <Col className="ml-5" xs={5}>
                  <h5>{item.nama}</h5>
                  <p>Rp {item.harga.toLocaleString()}</p>
                </Col>
                <Col>
                  <strong className="float-right">
                    Rp {item.total.toLocaleString()}
                  </strong>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Button
          size="lg"
          block
          onClick={
            this.props.Troley.length > 0
              ? () => {
                  this.props.openModal();
                  this.props.totalsemua();
                }
              : () =>
                  Swal.fire({
                    position: "Center",
                    icon: "error",
                    title: "ANDA BELUM MEMPUNYAI PESANAN",
                    timer: 5000,
                  })
          }
        >
          BAYAR
        </Button>
      </Col>
    );
  }
}
