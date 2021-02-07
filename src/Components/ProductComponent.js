import React, {Component} from "react";
import Swal from "sweetalert2";
import {
  Card,
  CardDeck,
  Col 
} from "react-bootstrap";


export default class ProductComponent extends Component {
  render() {
    return (
      <Col sm={8}>
              <h4>
                <strong>Daftar Makanan</strong>
              </h4>
              <hr />
      <CardDeck>
        {this.props.stokproduk.map((item, b) => (
          <Col key={b} md={4} xs={6} className="mb-4">
            <Card
              bg="light"              
              className="shadow"
              onClick={() => {
                this.props.MasukTroley(item);
                Swal.fire({
                  title: item.nama + " Sukses Masuk Troley",                 
                  icon: "success",
                  timer: 2000,
                });
              }}
            >
              <Card.Img variant="top" src={"assets/" + item.gambar} />
              <Card.Body>
                <Card.Title>
                  <strong>{item.nama}</strong>
                </Card.Title>
                <Card.Text>
                  <strong>Rp {item.harga.toLocaleString()}</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </CardDeck>
      </Col>
    );
  }
}