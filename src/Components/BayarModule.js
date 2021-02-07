import React, { Component } from "react";
import { Modal, Button, Table } from "react-bootstrap";

export default class BayarModule extends Component {
  render() {
    return (
      <Modal
        show={this.props.show}
        closeModal={this.props.closeModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter">
            <h3>
              <strong>KASIR</strong>
            </h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table responsive="sm">
            <thead>
              <tr>
                <th>No.</th>
                <th>Menu</th>
                <th>Jumlah</th>
                <th>@</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {this.props.Troley.map((item, b) => (
                <tr key={b}>
                  <td>{b + 1}</td>
                  <td>{item.nama} </td>
                  <td>{item.jumlah} </td>
                  <td>Rp {item.harga.toLocaleString()} </td>
                  <td>Rp {item.total.toLocaleString()} </td>
                </tr>
              ))}
            </tbody>
            <tbody>
              <tr>
                <td></td>
                <td>
                  <h4>
                    <strong>TOTAL</strong>
                  </h4>
                </td>
                <td></td>
                <td></td>
                <td>
                  <h4>
                    <strong>Rp {this.props.Total.toLocaleString()}</strong>
                  </h4>
                </td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>         
          <Button            
            onClick={() => {
              this.props.closeModal();
              this.props.kosongkan();
            }}
          >
            BAYAR
          </Button>
          <Button variant="secondary" onClick={this.props.closeModal}>
            Batal
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
