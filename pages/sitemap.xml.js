import { globby } from "globby";
import projects from "../components/data/projects";

async function getXMLUrlsForStaticPaths(host) {
  const staticPagesPaths = await globby([
    "pages/*.js",
    "!pages/_*.js",
    "!pages/api",
    "!pages/sitemap.xml.js",
  ]);
  return staticPagesPaths
    .map((page) => {
      const path = page
        .replace("pages", "")
        .replace(".js", "")
        .replace("jsx", "");
      const route = path === "/index" ? "" : path;

      return `<url>
        <loc>${host}${route}</loc>
        <changefreq>weekly</changefreq>
      </url>
      `;
    })
    .join("");
}

async function getXMLUrlsForProjects(host, prefix) {
  return projects
    .map(
      (project) => `<url>
    <loc>${host}/${prefix}${project.slug}</loc>
    <changefreq>weekly</changefreq>
    </url>`
    )
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
