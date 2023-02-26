import React, { Component } from "react";
import { Row, Card, Col } from "react-bootstrap";
import axios from "axios";
const BASE_URL = "https://six5130969-lab-nodejs.onrender.com";

export default class Product extends Component {
  state = {
    products: [],
  };
  getData = async () => {
    try {
      await axios
        .get(`${BASE_URL}/products`)
        .then((response) => {
          console.log(response);
          let res = response.data;

          if (res === undefined) {
            this.setState({
              district: [],
            });
          }
          this.setState({
            products: res,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <div>
          <h2>รายการสินค้า</h2>
        </div>

        <Row>
          {this.state.products.map((rs, index) => (
            <Col xl="3" lg="4" md="6" sm="12" key={index}>
              <div style={{ paddingBottom: "25px" }}>
                <Card>
                  <Card.Img variant="top" src={rs.cover} />
                  <Card.Body>
                    <Card.Title>{rs.name}</Card.Title>
                    {rs.category}
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
