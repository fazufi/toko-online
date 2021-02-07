import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import "./App.css";
import stokproduk from "./product.json";
import NavbarComponent from "./Components/NavbarComponent";
import ProductComponent from "./Components/ProductComponent";
import TroleyComponent from "./Components/TroleyComponent";
import BayarModule from "./Components/BayarModule";

export default class App extends Component {
  state = {
    stokproduk,
    Troley: [],
    Total: "",
    show: false,
  };

  componentDidMount() {
    const LocalTroley = localStorage.getItem("SimpanTroley");
    const Troley = LocalTroley ? JSON.parse(LocalTroley) : [];
    this.setState({ Troley });
  } 

  MasukTroley = (item) => {
    const Troley = this.state.Troley;
    const a = Troley.findIndex((p) => p.nama === item.nama);
    if (a < 0) {
      Troley.push({
        nama: item.nama,
        harga: item.harga,
        jumlah: 1,
        total: item.harga,
      });
    } else {
      Troley[a].harga = item.harga;
      Troley[a].jumlah = Troley[a].jumlah + 1;
      Troley[a].total = Troley[a].jumlah * item.harga;
    }
    this.setState({ Troley: Troley });
    localStorage.setItem("SimpanTroley", JSON.stringify(Troley));
  };

  KeluarTroley = (item) => {
    const Troley = this.state.Troley;
    const a = Troley.findIndex((p) => p.nama === item.nama);
    if (Troley[a].jumlah <= 1) {
      Troley.splice(a, 1);
    } else {
      Troley[a].harga = item.harga;
      Troley[a].jumlah = Troley[a].jumlah - 1;
      Troley[a].total = Troley[a].jumlah * item.harga;
    }
    this.setState({ Troley: Troley });
    localStorage.setItem("SimpanTroley", JSON.stringify(Troley));
  };

  openModal = () => {
    this.setState({ show: true });
  };

  closeModal = () => {
    this.setState({ show: false });
  };

  kosongkan = () => {
    this.setState({ Troley: [] });
    localStorage.removeItem("SimpanTroley");
    Swal.fire({
      title: "Pembayaran Berhasil !",
      text: "Pesanan anda akan segera dikirim.",     
      timer: 5000,
    });
  };

  totalsemua = () => {
    const total = this.state.Troley;
    const totalTroley = total.reduce((jml, currentValue) => {
      return jml + currentValue.total;
    }, 0);
    this.setState({ Total: totalTroley });
  };
  render() {
    return (
      <Container fluid>
        <NavbarComponent />
        <Row>
          <ProductComponent
            {...this.state}
            MasukTroley={this.MasukTroley}
          />
          <TroleyComponent
            {...this.state}
            MasukTroley={this.MasukTroley}
            KeluarTroley={this.KeluarTroley}
            openModal={this.openModal}
            totalsemua={this.totalsemua}
          />
          <BayarModule
            {...this.state}
            closeModal={this.closeModal}                        
            kosongkan={this.kosongkan}
          />
        </Row>
      </Container>
    );
  }
}
