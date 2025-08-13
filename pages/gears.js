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
        <div style={{ marginBottom: "20px" }}>
          <SectionSubtitle subtitle="Gears" />
        </div>
        <Row>
          {gears.map((item) => (
            <Col
              key={item.id}
              lg="4"
              md="4"
              sm="6"
              style={{ padding: "10px" }}>
              <button
                type="button"
                aria-label={`View details for ${item.title}`}
                className="gear-card shadow-md h-full flex flex-col"
                style={{
                  position: "relative",
                  background: "transparent",
                  borderRadius: "8px",
                }}
              >
                <PortfolioItem item={item} className="flex-1" />
              </button>
            </Col>
          ))}
        </Row>
      </Container>

      <style>{`
        .gear-card {
          transition: transform 0.3s ease;
              text-align: left;
        }
        .gear-card:hover {
          transform: scale(1.03);
          z-index: 2;
        }
      `}</style>
    </div>
  );
}