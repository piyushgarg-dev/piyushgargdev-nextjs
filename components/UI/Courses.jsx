import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
// import classes from "../../styles/portfolio.module.css";
import PortfolioItem from "./PortfolioItem";


const Courses = ({ courses = [] }) => {
  return (
<<<<<<< HEAD
    <section id="courses" >
      <Container>
        <Row>
          <Col lg="6"  md="6" className="mb-5">
=======
    <section id="courses">
      <Container>
        <Row>
          <Col lg="6" md="6" className="mb-5">
>>>>>>> 9880dc123f4d7d8bc058e19afa7059e1ffcc0317
            <SectionSubtitle subtitle="Courses" />
            <h4 className="mt-4 text-2xl">Checkout My Interactive Courses</h4>
          </Col>
        </Row>

        <Row>
          {courses.map((item) => (
            <Col
              style={{ margin: "10px 0px" }}
              key={item.id}
              lg="4"
              md="4"
              sm="6"
<<<<<<< HEAD
              

=======
>>>>>>> 9880dc123f4d7d8bc058e19afa7059e1ffcc0317
              className="hover:scale-105 hover:ease-out duration-300 shadow-md"
            >
              <PortfolioItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};


export default Courses;