import projects from "../components/data/projects";

const getXmlUrlWrapper = (path) => `<url>
<loc>https://www.piyushgarg.dev/${
  path.startsWith("/") ? path.slice(1) : path
}</loc>
<changefreq>weekly</changefreq>
</url>`;

async function getXMLUrlsForStaticPaths(host) {
  const staticPagesPaths = ["/index", "/gears"];
  return staticPagesPaths
    .map((page) => {
      const path = page
        .replace("pages", "")
        .replace(".js", "")
        .replace("jsx", "");
      const route = path === "/index" ? "" : path;

      return getXmlUrlWrapper(route);
    })
    .join("");
}

async function getXMLUrlsForProjects(host, prefix) {
  return projects
    .map((project) => getXmlUrlWrapper(`${prefix}${project.slug}`))
    .join("");
}

async function getSitemapXML(host) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${await getXMLUrlsForStaticPaths(host)}
    ${await getXMLUrlsForProjects(host, "projects/")}
    </urlset>
    `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ req, res }) {
  const currentHost = req.headers.host;
  res.setHeader("Content-Type", "text/xml");
  res.write(await getSitemapXML(currentHost));
  res.end();
  return {
    props: {},
  };
}
export default SiteMap;
