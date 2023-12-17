import Head from "next/head";
import { Container, Row, Col } from "reactstrap";
import gears from "../components/data/gears";
import PortfolioItem from "../components/UI/PortfolioItem";
import SectionSubtitle from "../components/UI/SectionSubtitle";
import { useContext } from "react";
import ToggleContext from "../context/ToggleContext";

export default function Gears() {
  const { darkMode } = useContext(ToggleContext);
  return (
    <div style={{ background: darkMode ? "#0e1630" : "#fff" }}>
      <Head>
        <title>Piyush Garg - Gears</title>
      </Head>
      <Container className="mt-5">
        <SectionSubtitle subtitle="Gears" />
        <Row>
          {gears.map((item) => (
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
    </div>
  );
}
