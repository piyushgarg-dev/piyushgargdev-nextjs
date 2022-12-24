import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/portfolio.module.css";
import PortfolioItem from "./PortfolioItem";

import portfolioData from "../data/portfolio";

const Portfolio = () => {
  const [filter, setFilter] = useState("Mobile App");
  const [data, setData] = useState();

  useEffect(() => {
    if (filter === "Mobile App") {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }

    if (filter === "Web Design") {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }
  }, [filter]);

  const active = `${classes.tab__btn__active}`;

  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="6" md="6" className="mb-5">
            <SectionSubtitle subtitle="Courses" />
            <h4 className="mt-4">Checkout My Interactive Courses @CodeDamn</h4>
          </Col>
        </Row>

        <Row>
          {portfolioData.map((item) => (
            <Col
              style={{ margin: "10px 0px" }}
              key={item.id}
              lg="4"
              md="4"
              sm="6"
            >
              <PortfolioItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
