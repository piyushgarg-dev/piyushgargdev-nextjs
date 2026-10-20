import Head from "next/head";
// import { useSession, signIn } from "next-auth/react";
import { Container, Row, Col } from "reactstrap";
import Browser, { Chrome } from "react-browser-ui";
import { isMobile } from "react-device-detect";
// import { MagnifyingGlass } from "react-loader-spinner";

import projects from "../../components/data/projects";

const { Tab } = Chrome;

const Page = ({ project }) => {
  // const { status } = useSession();

  // if (status === "loading")
  //   return (
  //     <Container
  //       style={{
  //         width: "100vw",
  //         height: "50vh",
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       <div>
  //         <MagnifyingGlass
  //           visible={true}
  //           height="80"
  //           width="80"
  //           ariaLabel="MagnifyingGlass-loading"
  //           wrapperStyle={{}}
  //           wrapperClass="MagnifyingGlass-wrapper"
  //           glassColor="#c0efff"
  //           color="#e15b64"
  //         >
  //           Loading...
  //         </MagnifyingGlass>
  //         <div>
  //           <h3>Loading...</h3>
  //         </div>
  //       </div>
  //     </Container>
  //   );

  // if (status === "unauthenticated") {
  //   signIn();
  //   return;
  // }

  return (
    <Container className="my-5">
      <Head>
        <title>{project.title}</title>
      </Head>
      <h3>{project.title}</h3>
      <Container className="my-3" />

      <Row>
        {project?.youtubeEmbedUrl && (
          <Col sm="12" lg="6" md="6">
            <iframe
              width="100%"
              height="405"
              src={project.youtubeEmbedUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Col>
        )}
        {project.hostedWebUrl && (
          <Col hidden={isMobile} sm="12" lg="6" md="6">
            <div
              style={{
                background: "#fff",
                borderRadius: "10px",
                height: "100%",
              }}
            >
              <Browser activeTabKey={"main"} type={"chrome"}>
                <Tab key={"main"} title={project.title}>
                  <div style={{ height: "100%" }}>
                    <iframe
                      width="100%"
                      height="100%"
                      src={project.hostedWebUrl}
                      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                    />
                  </div>
                </Tab>
              </Browser>
            </div>
          </Col>
        )}
      </Row>

      {project?.codeIframeUrl && (
        <Row>
          <Col lg="12" sm="12" md="12">
            <iframe
              src={project.codeIframeUrl}
              style={{
                width: "100%",
                height: "600px",
                border: "1px solid",
                margin: "40px 0px",
                borderRadius: "4px",
                overflow: "hidden",
              }}
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
          </Col>
        </Row>
      )}
      {project?.sourceCodeDownloadUrl && (
        <Row className="text-center">
          <h3>
            <a
              style={{ color: "#fff", textDecoration: "none" }}
              href={project.sourceCodeDownloadUrl}
            >
              <i className="ri-download-line"></i> Download Code
            </a>
          </h3>
        </Row>
      )}
    </Container>
  );
};

export const getStaticPaths = () => {
  return {
    paths: projects.map((project) => ({ params: { slug: project.slug } })),
    fallback: false,
  };
};

export const getStaticProps = (context) => {
  const slug = context.params.slug;
  const project = projects.find((e) => e.slug === slug);

  return {
    props: {
      project,
    },
  };
};

export default Page;
