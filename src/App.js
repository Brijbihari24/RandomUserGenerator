import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Axios from "axios";
import MyCard from "./MyCard";

function App() {
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const { data } = await Axios.get("https://randomuser.me/api/");
    console.log("Response", data);

    const details = data.results[0];

    setDetails(details);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div>
      <Container fluid className="p-4 bg-primary App">
        <Row>
          <Col md={4} className="offset-md-4 mt-4">
            <MyCard details={details} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
