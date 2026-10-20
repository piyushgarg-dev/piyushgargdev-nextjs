import { useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { Container, Button } from "reactstrap";
import { MagnifyingGlass, ThreeDots } from "react-loader-spinner";

import urls from "../../components/data/urls";

const URLComponent = ({ url }) => {
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (!url.requireAuth || session.status === "authenticated")
      router.replace(url.url);
  }, [router, session.status, url]);

  if (session.status === "loading")
    return (
      <Container
        style={{
          width: "100vw",
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          >
            Loading...
          </MagnifyingGlass>
          <div>
            <h3>Loading...</h3>
          </div>
        </div>
      </Container>
    );

  return (
    <Container className="my-5">
      <Container
        style={{
          width: "100vw",
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {url.requireAuth && session.status === "unauthenticated" ? (
          <div>
            <h3>Log-in required</h3>
            <Button onClick={signIn} color="success">
              Login
            </Button>
          </div>
        ) : (
          <div>
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#4fa94d"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
            <div>
              <h1>Redirecting...</h1>
            </div>
          </div>
        )}
      </Container>
    </Container>
  );
};

export const getStaticPaths = () => {
  return {
    paths: urls.map((url) => ({ params: { slug: url.slug } })),
    fallback: false,
  };
};

export const getStaticProps = (context) => {
  const slug = context.params.slug;
  const url = urls.find((e) => e.slug === slug);

  return {
    props: {
      url,
    },
  };
};

export default URLComponent;
