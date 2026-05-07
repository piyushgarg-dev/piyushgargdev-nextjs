import Head from "next/head";
import { Container, Row, Col } from "reactstrap";
import gears from "../components/data/gears";
import PortfolioItem from "../components/UI/PortfolioItem";
import SectionSubtitle from "../components/UI/SectionSubtitle";

export default function Gears() {
  return (
    <div>
      <Head>
        <title>Piyush Garg - Gears</title>
      </Head>

      <Container className="mt-5">
        <SectionSubtitle subtitle="Gears" />

        {/* Added margin top here */}
        <Row className="mt-4">
          {gears.map((item) => (
            <Col
              key={item.id}
              lg="4"
              md="4"
              sm="6"

              /* Added padding between cards */
              style={{ padding: "15px" }}
            >
              <PortfolioItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}