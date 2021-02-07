// MODALCOMPONENT PERCOBAAN


// import React, { Component } from "react";
// import { Row, Col, ListGroup, Badge } from "react-bootstrap";
// import Modalcomponent from "./Modalcomponent";

// export default class TroleyComponent extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       showModal: false,
//       TroleyDetail: false,
//       jumlah: 0,
//       keterangan: "",
//       total: 0
//     };
//   }

//   handleShow = (item) => {
//     this.setState({
//       showModal: true,
//       TroleyDetail: item,
//       jumlah: item.jumlah,
//       keterangan: item.keterangan,
//       total: item.total
//     });
//   };

//   handleClose = () => {
//     this.setState({
//       showModal: false,
//     });
//   };

//   tambah = () => {
//     this.setState({
//       jumlah: this.state.jumlah + 1,
//       total: this.state.TroleyDetail.harga*(this.state.jumlah + 1)
//     });
//   };

//   kurang = () => {
//     if (this.state.jumlah !== 1) {
//       this.setState({
//         jumlah: this.state.jumlah - 1,
//         total: this.state.TroleyDetail.harga*(this.state.jumlah - 1)

//       });
//     }
//   };

//   changeHandler = (event) => {
//     this.setState({
//       keterangan:event.target.value
//     })
//   }

//   handleSubmit = (event) => {
//     // biar tidak ke reload maka pakai preventdefault
//     event.preventDefault();
//     console.log(this.state.keterangan);
//   }

//   render() {
//     return (
//       <ListGroup variant="flush">
//         {this.props.Troley.map((item, b) => (
//           <ListGroup.Item key={b} onClick={() => this.handleShow(item)}>
//             <Row>
//               <Col xs={2}>
//                 <h4>
//                   <Badge pill variant="success">
//                     {item.jumlah}
//                   </Badge>
//                 </h4>
//               </Col>
//               <Col>
//                 <h5>{item.nama}</h5>
//                 <p>Rp {item.harga.toLocaleString()}</p>
//               </Col>
//               <Col>
//                 <strong className="float-right">
//                   Rp {item.total.toLocaleString()}
//                 </strong>
//               </Col>
//             </Row>
//           </ListGroup.Item>
//         ))}
//         <Modalcomponent handleClose={this.handleClose} {...this.state} tambah={this.tambah} kurang={this.kurang} changeHandler={this.changeHandler} handleSubmit={this.handleSubmit} />
//       </ListGroup>
//     );
//   }
// }












// import React from "react";
// import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faPlus, faMinus, faTrash} from "@fortawesome/free-solid-svg-icons";
// import { Modal, Button, Form } from "react-bootstrap";
// // import {numberWithCommas} from "../Utils/Rupiahset";

// const Modalcomponent = ({ showModal, handleClose, TroleyDetail, jumlah, keterangan, tambah, kurang, changeHandler, handleSubmit, total }) => {
//   console.log(TroleyDetail.harga);

//   return (
//     <Modal show={showModal} onHide={handleClose} animation={false}>
//       <Modal.Header closeButton>
//         <Modal.Title>
//           <strong>{TroleyDetail.nama}</strong>, (Rp {TroleyDetail.harga || 0})
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group controlId="formBasicEmail">
//             <Form.Label>Total Harga:</Form.Label>
//             <p>
//               <strong>Rp {total}</strong>
//             </p>
//           </Form.Group>

//           <Form.Group controlId="formBasicEmail">
//             <Form.Label>Jumlah:</Form.Label> <br />
//             <Button variant="primary" size="sm" className="mr-2" onClick={ () => tambah()}>
//               <FontAwesomeIcon icon={faPlus}  />
//             </Button>
//             <strong>{jumlah}</strong>
//             <Button variant="primary" size="sm"  className="ml-2" onClick={ () => kurang()}>
//               <FontAwesomeIcon icon={faMinus}  />
//             </Button>
//           </Form.Group>

//           <Form.Group controlId="formBasicPassword">
//             <Form.Label>KETERANGAN :</Form.Label>
//             <Form.Control as="textarea" row="3" placeholder="keterangan menu yg ingin dibeli" value={keterangan} onChange={(event) => changeHandler(event)} />
//           </Form.Group>
//           <Button variant="primary" type="submit">
//             simpan
//           </Button>
//         </Form>
//       </Modal.Body>
//       <Modal.Footer>       
//         <Button variant="danger" >
//           <FontAwesomeIcon icon={faTrash} /> Hapus Pesanan
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default Modalcomponent;
