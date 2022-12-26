import { Container, Row, Col, Button } from "reactstrap";
import { useSession, signIn } from "next-auth/react";
const Page = () => {
  const { status } = useSession();

  if (status === "loading")
    return (
      <Container>
        <h3>Loading</h3>
      </Container>
    );

  if (status === "unauthenticated") {
    signIn();
    return;
  }

  return (
    <Container className="my-5">
      <h3>Tic Tac Toe Game</h3>
      <Container className="my-3" />

      <Row>
        <Col>
          <iframe
            width="720"
            height="405"
            src="https://www.youtube.com/embed/lKe57l8sttw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen={true}
          ></iframe>
        </Col>
        <Col>
          <Button color="success" style={{ height: "100%", width: "100%" }}>
            Download
          </Button>
        </Col>
      </Row>

      <iframe
        src="https://codesandbox.io/embed/frosty-lake-ymiic3?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
        style={{
          width: "100%",
          height: "600px",
          border: "1px solid",
          margin: "40px 0px",
          borderRadius: "4px",
          overflow: "hidden",
        }}
        title="frosty-lake-ymiic3"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </Container>
  );
};

export default Page;
