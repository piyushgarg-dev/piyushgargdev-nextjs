import { Container, Row, Col, Button } from "reactstrap";
import Browser, { Chrome } from "react-browser-ui";
import { isMobile } from "react-device-detect";

const { Tab } = Chrome;

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
      <h3>Tic Tac Toe Game </h3>
      <Container className="my-3" />

      <Row>
        <Col sm="12" lg="6" md="6">
          <iframe
            width="100%"
            height="405"
            src="https://www.youtube.com/embed/lKe57l8sttw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
        <Col hidden={isMobile} sm="12" lg="6" md="6">
          <div
            style={{ background: "#fff", borderRadius: "10px", height: "100%" }}
          >
            <Browser activeTabKey={"main"} type={"chrome"}>
              <Tab key={"main"} title={"Tic Tac Toe"}>
                <div style={{ height: "100%" }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://ymiic3.csb.app/"
                  />
                </div>
              </Tab>
            </Browser>
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg="12" sm="12" md="12">
          <iframe
            src="https://codesandbox.io/embed/frosty-lake-ymiic3?fontsize=14&hidenavigation=1&theme=dark&view=editor"
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
        </Col>
      </Row>
      <h3>
        <a href="/files/code/tic-tac-toe.zip">
          <i className="ri-download-line"></i> Click here to download source
          code
        </a>
      </h3>
    </Container>
  );
};

export default Page;
