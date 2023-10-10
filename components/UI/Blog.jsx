import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/portfolio.module.css";
import PortfolioItem from "./PortfolioItem";


const Blog = ({ blogs, blogDomain }) => {
  const [filter, setFilter] = useState("Mobile App");
  const [data, setData] = useState();

  const active = `${classes.tab__btn__active}`;

  return (
    <section id="blogs">
      <Container>
        <Row>
          <Col lg="6" md="6" className="mb-5">
            <SectionSubtitle subtitle="blog.piyushgarg.dev" link="https://blog.piyushgarg.dev/" />
            <h4 className="mt-4 text-2xl">Checkout my recent blogs</h4>
          </Col>
        </Row>

        <Row>
          {blogs.map((blogItem)  => (
            <Col

              className="hover:scale-105 hover:ease-out duration-300"
              style={{ margin: "14px 0px" }}
              key={blogItem._id}
              lg="4"
              md="4"
              sm="6"
            >
              <PortfolioItem
                item={{
                  title: blogItem.title,
                  subtitle: blogItem.brief,
                  img: blogItem.coverImage,
                  liveUrl: `https://${blogDomain}/${blogItem.slug}`,
                  keyword: [`${blogItem.totalReactions} reactions ✨`],
                }}
              />
            </Col>
          ))}
        </Row>

        {/* <Row>
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
        </Row> */}
      </Container>
    </section>
  );
};

export default Blog;
