import { GetServerSideProps } from 'next';
import { apiEndPoint } from '../lib/api';

const EXTERNAL_DATA_URL = 'https://jsonplaceholder.typicode.com/posts';

function generateSiteMap(links: string[]) {
    return `<?xml version="1.0" encoding="UTF-8"?>
       <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
         ${links
             .map((link) => {
                 return `
           <url>
               <loc>${`${link}`}</loc>
           </url>
         `;
             })
             .join('')}
       </urlset>
     `;
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    const request = await fetch(apiEndPoint + 'pages/slugs');
    const pageSlugs = await request.json();

    const pageLinks =
        pageSlugs &&
        pageSlugs.map(function (slug: string) {
            return res.req.headers.host + (slug != '/' ? '/' + slug : slug);
        });

    const request2 = await fetch(apiEndPoint + 'blog/slugs');
    const blogSlugs = await request2.json();

    const blogLinks =
        blogSlugs &&
        blogSlugs.map((slug: string) => {
            return res.req.headers.host + '/blog/' + slug;
        });

    const links = [...pageLinks, ...blogLinks];

    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(links);

    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: { pageLinks }
    };
};

export default SiteMap;
